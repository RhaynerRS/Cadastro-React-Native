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
import styles from './styles'

export default function SignUpPage() {
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
    <View style={styles.MainContainer}>
      <View style={styles.Hero}>
        <Text style={styles.Title}>Registre-se</Text>
        <View style={styles.Link}>
          <Text style={styles.Text}>Já possui uma conta? </Text>
          <Text style={styles.Hiperlink}>Entre aqui</Text>
        </View>
      </View>
      <View style={styles.Container}>
        <InputText label='Nome:' placeholder='Digite seu nome'></InputText>
        <InputText label='Endereço de E-mail:' placeholder='seuemail@exemplo.com'></InputText>
        <InputKey label='Senha:' placeholder='Crie uma senha' secure={true}></InputKey>
        <View style={styles.Sign}>
          <Checkbox style={styles.Checkbox} onChange={(op)=> alert('op')} options={options}></Checkbox>
          <Text style={styles.Text}>Eu aceito 
          <Text style={styles.Hiperlink}> Termos e Condições </Text> 
          e li e entendi a 
          <Text style={styles.Hiperlink}> Política de Privacidade</Text> 
          </Text>
        </View>
      </View>
      <DefaultButton valor='Próximo'></DefaultButton>
      <StatusBar style="auto" />
    </View>
  );
}
