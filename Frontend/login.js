import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'galio-framework';
import { Input, Block } from 'galio-framework';

<Input placeholder="regular" />
<Input placeholder="theme" color={theme.COLORS.THEME} style={{ borderColor: theme.COLORS.THEME }} placeholderTextColor={theme.COLORS.THEME} />
<Input placeholder="info" color={theme.COLORS.INFO} style={{ borderColor: theme.COLORS.INFO }} placeholderTextColor={theme.COLORS.INFO}/>
<Input placeholder="warning" color={theme.COLORS.WARNING} style={{ borderColor: theme.COLORS.WARNING }} placeholderTextColor={theme.COLORS.WARNING}/>
<Input placeholder="error" color={theme.COLORS.ERROR} style={{ borderColor: theme.COLORS.ERROR }} placeholderTextColor={theme.COLORS.ERROR}/>
<Input placeholder="success" color={theme.COLORS.SUCCESS} style={{ borderColor: theme.COLORS.SUCCESS }} placeholderTextColor={theme.COLORS.SUCCESS}/>