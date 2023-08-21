import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import { Icon } from 'react-native-elements';
import { useState } from 'react';
import { Abobora } from './src/components/Abobora';
import { DefaultButton } from './src/components/DefaultButton';
import { InputText } from './src/components/InputText';
import { InputKey } from './src/components/InputKey';

export default function App() {
  const [loaded] = useFonts({
    PoppinsMedium: require('./assets/fonts/Poppins-Medium.ttf'),
    PoppinsBold: require('./assets/fonts/Poppins-Bold.ttf'),
    MerriweatherLight: require('./assets/fonts/MerriweatherSans-Light.ttf'),
    MerriweatherRegular: require('./assets/fonts/MerriweatherSans-Regular.ttf'),
  });

  return (
    <View style={styles.MainContainer}>
      <Text style={styles.Title}>Registre-se</Text>
      <View style={styles.Container}>
        <InputText label='Nome:' placeholder='Digite seu nome'></InputText>
        <InputText label='Endereço de E-mail:' placeholder='seuemail@exemplo.com'></InputText>
        <InputKey label='Senha:' placeholder='Crie uma senha' secure={true}></InputKey>
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
  Title: {
    fontFamily: 'PoppinsBold',
    fontSize: '24px',
  }
});
