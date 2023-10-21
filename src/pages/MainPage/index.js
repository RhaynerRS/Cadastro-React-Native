import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { useFonts } from 'expo-font';
import { Icon } from 'react-native-elements';
import { useState } from 'react';
import { Link } from '@react-navigation/native';
import { DefaultButton } from '../../components/DefaultButton';
import { InputText } from '../../components/InputText';
import { InputKey } from '../../components/InputKey';
import { Checkbox } from '../../components/Checkbox';
import { NavBar } from '../../components/NavBar/index';
import styles from './styles'

export default function MainPage({ navigation }) {

  const [loaded] = useFonts({
    PoppinsMedium: require('../../../assets/fonts/Poppins-Medium.ttf'),
    PoppinsBold: require('../../../assets/fonts/Poppins-Bold.ttf'),
    MerriweatherLight: require('../../../assets/fonts/MerriweatherSans-Light.ttf'),
    MerriweatherRegular: require('../../../assets/fonts/MerriweatherSans-Regular.ttf'),
  });


  return (
    <View style={styles.FullProject}>
      <NavBar style={styles.Nav}></NavBar>
      <View style={styles.MainContainer}>
        <View style={styles.Hero}>
          <Image 
            source={require('../../../assets/Group.png')} 
            style={styles.HeroImage} 
          />
          <View style={styles.Desc}> 
            <Text style={styles.Title}>Encontre um designer que combina com você</Text>
            <Text style={styles.Subtitle}>Explore diversos perfis e encontre um profissional com quem você se identifica</Text>
          </View>
        </View>
        <View style={styles.CallToAction}>
        <DefaultButton valor='Comece agora!' onPress={() => navigation.navigate('SignUp')}/>
          <View style={styles.Link}>
            <Text style={styles.Text}>Já possui uma conta? </Text>
            <Text style={styles.Hiperlink}><Link to={{ screen: 'SignIn' }}>Entre aqui</Link></Text>
          </View>
        </View>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}
