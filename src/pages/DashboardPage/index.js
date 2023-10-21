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
import { WhiteArrow } from '../../components/WhiteArrow/index';
import styles from './styles'
import RoundedCard from '../../components/RoundedCard/Index';

export default function DashboardPage() {

  const [loaded] = useFonts({
    PoppinsMedium: require('../../../assets/fonts/Poppins-Medium.ttf'),
    PoppinsBold: require('../../../assets/fonts/Poppins-Bold.ttf'),
    MerriweatherLight: require('../../../assets/fonts/MerriweatherSans-Light.ttf'),
    MerriweatherRegular: require('../../../assets/fonts/MerriweatherSans-Regular.ttf'),
  });


  return (
    <View style={[styles.FullProject,{backgroundColor: '#F0F0F0'}]}>
      <View style={styles.OrangeBack}>
        <view style={{padding: 14}}>
          <WhiteArrow/>
        </view>
        <RoundedCard height='10.63%'></RoundedCard>
      </View>
      <View style={styles.MainContainer}>
        <RoundedCard ></RoundedCard>
        <RoundedCard></RoundedCard>
      </View>
    </View>
  );
}
