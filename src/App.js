import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import { Icon } from 'react-native-elements';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ForgotPasswordPage from './pages/ForgotPasswordPage/index.js';
import SignUpPage from './pages/SignUpPage/index.js';
import VerificationCode from './pages/VerificationCode/index.js';
import SignInPage from './pages/SignInPage/index.js';
import AuthContext from "./src/routes";
import Routes from "./src/routes"

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <AuthProvider>
        <Routes />
      </AuthProvider>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='SignIn' component={SignInPage}/>
        <Stack.Screen name='SignUp' component={SignUpPage}/>
        <Stack.Screen name='ForgotPassword' component={ForgotPasswordPage}/>
        <Stack.Screen name='VerificationCode' component={VerificationCode}/>
      </Stack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  MainContainer: {
    gap: '35px',
    flex: 1,
    backgroundColor: '#F7F7F7',
    alignItems: 'center',
    justifyContent: 'center',
    paddingInline: '0.5rem'
  }
});


