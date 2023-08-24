import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import { Icon } from 'react-native-elements';
import { useState } from 'react';
import { Abobora } from '../../components/Abobora';
import { DefaultButton } from '../../components/DefaultButton';
import { InputText } from '../../components/InputText';
import { InputKey } from '../../components/InputKey';
import { Checkbox } from '../../components/Checkbox';
import { NavBar } from '../../components/NavBar/index';
import styles from './styles'

export default function SignInPage() {
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
      <NavBar style={styles.Nav}></NavBar>
      <View style={styles.MainContainer}>
        <View style={styles.Hero}>
          <Text style={styles.Title}>Entre</Text>
          <View style={styles.Link}>
            <Text style={styles.Text}>Novo por aqui? </Text>
            <Text style={styles.Hiperlink}>Registre-se aqui</Text>
          </View>
        </View>
        <View style={styles.Container}>
          <InputText label='Endereço de E-mail:' placeholder='seuemail@exemplo.com'></InputText>
          <InputKey label='Senha:' placeholder='Digite sua senha' secure={true}></InputKey>
          <View style={styles.Forgot}>
            <Text style={styles.Hiperlink}>Esqueci minha senha</Text> 
          </View>
        </View>
        <DefaultButton valor='Próximo'></DefaultButton>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}
