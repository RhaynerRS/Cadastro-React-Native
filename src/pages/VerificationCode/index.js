import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { useFonts } from 'expo-font';
import { Icon } from 'react-native-elements';
import { useState } from 'react';
import { Link } from '@react-navigation/native';
import { DefaultButton } from '../../components/DefaultButton';
import { InputText } from '../../components/InputText';
import { InputKey } from '../../components/InputKey';
import { NavBar } from '../../components/NavBar/index';
import { BackArrow } from '../../components/BackArrow/index';
import styles from './styles'

export default function VerificationCode() {
  const [loaded] = useFonts({
    PoppinsMedium: require('../../../assets/fonts/Poppins-Medium.ttf'),
    PoppinsBold: require('../../../assets/fonts/Poppins-Bold.ttf'),
    MerriweatherLight: require('../../../assets/fonts/MerriweatherSans-Light.ttf'),
    MerriweatherRegular: require('../../../assets/fonts/MerriweatherSans-Regular.ttf'),
  });

  var options=[
    {text:'', id:1},
  ]

  return (
    <View style={styles.FullProject}>
      <View style={styles.TopContainer}>
        <NavBar style={styles.Nav}></NavBar>
        <Link to={{ screen: 'ForgotPassword' }}><BackArrow valor={' '}/></Link>
      </View>
      <View style={styles.MainContainer}>
        <View style={styles.Hero}>
        <Text style={styles.Title}>Recupere sua senha</Text>
        <View style={styles.Link}>
          <Text style={styles.Text}>Um código de verificação foi enviado para:</Text>
          <Text style={styles.Hiperlink}>seumail@exemplo.com</Text>
        </View>
        </View>
        <View style={styles.Container}>
          <InputText label='Código de Verificação: ' placeholder='Digite o código'></InputText>
          <InputKey label='Senha:' placeholder='Defina sua nova senha'></InputKey>
          <InputKey label='Senha:' placeholder='Confirme sua nova senha'></InputKey>
        </View>
        <DefaultButton valor='Próximo'></DefaultButton>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}
