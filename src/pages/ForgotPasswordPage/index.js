import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { useFonts } from 'expo-font';
import { Icon } from 'react-native-elements';
import { useState } from 'react';
import { DefaultButton } from '../../components/DefaultButton';
import { InputText } from '../../components/InputText';
import { InputKey } from '../../components/InputKey';
import { Checkbox } from '../../components/Checkbox';
import { NavBar } from '../../components/NavBar/index';
import { BackArrow } from '../../components/BackArrow/index';
import styles from './styles'

export default function ForgotPasswordPage() {
  const [loaded] = useFonts({
    PoppinsMedium: require('../../../assets/fonts/Poppins-Medium.ttf'),
    PoppinsBold: require('../../../assets/fonts/Poppins-Bold.ttf'),
    MerriweatherLight: require('../../../assets/fonts/MerriweatherSans-Light.ttf'),
    MerriweatherRegular: require('../../../assets/fonts/MerriweatherSans-Regular.ttf'),
  });

  var options=[
    {text:'', id:1},
  ]

  function handlePress(){
    alert('Seu código de verificação é 1234')
  }

  return (
    <View style={styles.FullProject}>
      <View style={styles.TopContainer}>
        <NavBar style={styles.Nav}></NavBar>
        <BackArrow></BackArrow>
      </View>
      <View style={styles.MainContainer}>
        <View style={styles.Hero}>
          <Text style={styles.Title}>Recupere sua senha</Text>
          <View style={styles.Link}>
            <Text style={styles.Text}>Já possui uma conta? </Text>
            <Text style={styles.Hiperlink}>Entre aqui</Text>
          </View>
        </View>
        <View style={styles.Container}>
          <InputText label='Endereço de E-mail:' placeholder='seuemail@exemplo.com'></InputText>
        </View>
        <DefaultButton valor='Próximo' onPress={handlePress}></DefaultButton>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}
