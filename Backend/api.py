from datetime import datetime
from flask import Flask, jsonify, request, Response, send_file, render_template
import pandas as pd
import random   
import string  
import shutil
import os
import secrets # import package  
#import requests
from datetime import datetime
from flask_cors import CORS




def timeNow():
    return datetime.now().strftime('%Y-%m-%d %H:%M:%S').split(" ")[1]

app = Flask(__name__)
CORS(app)

@app.route('/time') # http://127.0.0.1/time
def serve():
    return jsonify({"time": timeNow()})

@app.route('/img.jpg')
def img():
    #my_img = {'image': open('test.jpg', 'rb')}
    return send_file('./test.jpg', mimetype='image/gif')

@app.route('/')
def hello():
    return render_template("hello.html")

@app.route('/privacypolicy')    
def privacypolicy():
    return render_template('policy.html')

@app.route('/splash.png')
def splash():
    return send_file('./splash.png', mimetype='image/gif')    

@app.route('/register')
def register():
    name=request.args.get('name')
    email=request.args.get('email')
    phone=request.args.get('phone')
    password=request.args.get('password')
    postalcode=request.args.get('postalcode')
    df=pd.read_csv("./db.csv",index_col=False)
    found=0
    pos=0
    for row in df.itertuples():
        if str(row.phone)==str(phone):
            found=1
            return 'Error'
            break
        pos=pos+1
    for row in df.itertuples():
        if str(row.email)==str(email):
            found=1
            return 'Error'
            break
        pos=pos+1
    if found==0:
        num = 12 # define the length of the string  
        res = ''.join(secrets.choice(string.ascii_letters + string.digits) for x in range(num))  
        row={'name':name,'email':email, 'phone':phone,'password':password,'postalcode':postalcode, 'cookie':str(res), 'score':0}
        df = df.append(row,ignore_index=True)
        df.to_csv('./db.csv', encoding='utf-8', header=True, index=False)
        postaldf=pd.read_csv("./postalcode.csv",index_col=False)
        found=0
        pos=0
        for row in postaldf.itertuples():
            if str(row.postalcode)==str(postalcode):
                found=1
                break
            pos=pos+1
        if found==0:
            row={'postalcode':postalcode}
            postaldf=postaldf.append(row,ignore_index=True)
            postaldf.to_csv('./postalcode.csv', encoding='utf-8', header=True, index=False)
            

            chatdf = pd.DataFrame(columns=['datetime','name','phone','msg'])
            chatdf.to_csv('./chats/'+str(postalcode)+'.csv', encoding='utf-8', header=True, index=False)
            tompangdf=pd.DataFrame(columns=['datetime','name','phone','msg','accepted'])
            tompangdf.to_csv('./tompangs/'+str(postalcode)+'.csv', encoding='utf-8', header=True, index=False)

        return 'OK'

@app.route('/reset')
def reset():
    shutil.rmtree('chats')
    shutil.rmtree('tompangs')
    
    postaldf=pd.read_csv("./postalcode.csv",index_col=False)
    df_empty = postaldf[0:0]
    df_empty.to_csv('./postalcode.csv', encoding='utf-8', header=True, index=False)
    df=pd.read_csv("./db.csv",index_col=False)
    df_empty1 = df[0:0]
    df_empty1.to_csv('./db.csv', encoding='utf-8', header=True, index=False)
    os.mkdir('tompangs')
    os.mkdir('chats') 

    return 'OK'

@app.route('/getchat')
def getchat():
    cookie=request.args.get('cookie')
    df=pd.read_csv("./db.csv",index_col=False)
    found=0
    pos=0
    for row in df.itertuples():
        if str(row.cookie)==str(cookie):
            found=1
            name=str(row.name)
            postalcode=str(row.postalcode)
            phone=str(row.phone)
            break
        pos=pos+1
    if found==0:
        return "Error"

    chatdf=pd.read_csv("./chats/"+postalcode+".csv",index_col=False)
    chatdf=chatdf.drop(columns=['phone'])
    js=chatdf.to_json(orient='records',lines=True)
    return js


@app.route('/chat')
def chat():
    cookie=request.args.get('cookie')
    msg=request.args.get('msg')
    df=pd.read_csv("./db.csv",index_col=False)
    found=0
    pos=0
    for row in df.itertuples():
        if str(row.cookie)==str(cookie):
            found=1
            name=str(row.name)
            postalcode=str(row.postalcode)
            phone=str(row.phone)
            break
        pos=pos+1
    if found==0:
        return "Error"

    now = datetime.now()

    dt_string = now.strftime("%d/%m/%Y %H:%M:%S")
    chatdf=pd.read_csv("./chats/"+postalcode+".csv",index_col=False)
    row={'datetime':dt_string,'name':name, 'phone':phone, 'msg':msg}
    chatdf=chatdf.append(row,ignore_index=True)
    chatdf.to_csv('./chats/'+postalcode+'.csv', encoding='utf-8', header=True, index=False)	

    return "OK"

@app.route('/login')
def login():
    phone=request.args.get('phone')
    password=request.args.get('password')
    df=pd.read_csv("./db.csv",index_col=False)
    found=0
    pos=0
    for row in df.itertuples():
        if int(row.phone)==int(phone):
            found=1
            if row.password==password:
                return str(row.cookie)
            else:
                return 'Error'
        pos=pos+1
    if found==0:
        return 'Error'

@app.route('/tompangreq')
def tompangreq():
    cookie=request.args.get('cookie')
    msg=request.args.get('msg')
    df=pd.read_csv("./db.csv",index_col=False)
    found=0
    pos=0
    for row in df.itertuples():
        if str(row.cookie)==str(cookie):
            found=1
            name=str(row.name)
            postalcode=str(row.postalcode)
            phone=str(row.phone)
            break
        pos=pos+1
    if found==0:
        return "Error"
    now = datetime.now()

    dt_string = now.strftime("%d/%m/%Y %H:%M:%S")
    tompangdf=pd.read_csv("./tompangs/"+postalcode+".csv",index_col=False)
    row={'datetime':dt_string,'name':name, 'phone':phone, 'msg':msg,'accepted':0}
    tompangdf=tompangdf.append(row,ignore_index=True)
    tompangdf.to_csv('./tompangs/'+postalcode+'.csv', encoding='utf-8', header=True, index=False)
    return 'OK'	        

