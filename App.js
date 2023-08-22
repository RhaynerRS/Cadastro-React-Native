import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import { Icon } from 'react-native-elements';
import { useState } from 'react';
import { Abobora } from './src/components/Abobora';
import { DefaultButton } from './src/components/DefaultButton';
import { InputText } from './src/components/InputText';
import { InputKey } from './src/components/InputKey';
import { Checkbox } from './src/components/Checkbox';

export default function App() {
  const [loaded] = useFonts({
    PoppinsMedium: require('./assets/fonts/Poppins-Medium.ttf'),
    PoppinsBold: require('./assets/fonts/Poppins-Bold.ttf'),
    MerriweatherLight: require('./assets/fonts/MerriweatherSans-Light.ttf'),
    MerriweatherRegular: require('./assets/fonts/MerriweatherSans-Regular.ttf'),
  });

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
          <Checkbox onChange={(op)=> alert('op')}></Checkbox>
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

const styles = StyleSheet.create({
  MainContainer: {
    gap: '35px',
    flex: 1,
    backgroundColor: '#F7F7F7',
    alignItems: 'center',
    justifyContent: 'center',
    paddingInline: '0.5rem'
  },
  Container: {
    gap: '16px',
    width: '100%',
  },
  Hero: {
    gap: '12px',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Title: {
    fontFamily: 'PoppinsBold',
    fontSize: '24px',
    color: '#26262B',
  },
  Link: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '8px',
    fontSize: '14px',
  },
  Text: {
    fontFamily: 'MerriweatherLight',
    color: '#26262B',
  },
  Hiperlink: {
    fontFamily: 'MerriweatherRegular',
    color: '#F86041',
    textDecorationLine: 'underline',
  },
  Sign: {
    width: '100%',
    margin: 'auto', 
    alignItems: 'center',
    justifyContent: 'left',
    fontSize: '14px',
    display: 'flex',
    flexDirection: 'row',
  },
});
