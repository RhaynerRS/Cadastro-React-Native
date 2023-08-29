import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import { Icon } from 'react-native-elements';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Stack } from 'native-base';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ForgotPasswordPage from './src/pages/ForgotPasswordPage';
import SignUpPage from './pages/SignUpPage';
import VerificationCode from './pages/VerificationCode';
import SignInPage from './pages/SignInPage';

const Stack = createNativeStackNavigator();

export default function App() {
  const [loaded] = useFonts({
    PoppinsBold: require('./assets/fonts/Poppins-Bold.ttf'),
  });

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SignIn" component={SignInPage}/>
        <Stack.Screen name="SignUp" component={SignUpPage}/>
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordPage}/>
        <Stack.Screen name="VerificationCode" component={VerificationCode}/>
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
  },
  Title: {
    fontFamily: 'PoppinsBold',
    fontSize: '24px',
    color: '#26262B',
  },
});


