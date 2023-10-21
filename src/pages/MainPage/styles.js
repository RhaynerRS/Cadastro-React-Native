import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import { Icon } from 'react-native-elements';

const styles = StyleSheet.create({
  FullProject: {
    gap: 32,
    flex: 1,
    backgroundColor: '#F7F7F7',
    alignItems: 'center',
  },
  Nav: {
    marginTop: 0,
  },
  MainContainer:{
    width: '100%',
    gap: 64,
    paddingInline: '1rem',
  },
  Container: {
    gap: '16px',
    width: '100%',  },
  Hero: {
    gap: '64px',
    alignItems: 'center',
    justifyContent: 'center',
  },
  HeroImage: {
    width: 248,
    height: 302,
  },
  Desc: {
    gap: 16,
    width: 318,
  },
  Title: {
    fontFamily: 'PoppinsBold',
    fontSize: '18px',
    color: '#26262B',
    textAlign: 'center',
  },
  Subtitle: {
    fontFamily: 'MerriweatherLight',
    color: '#26262B',
    textAlign: 'center',
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
  CallToAction: {
    gap: 32,
  }
});

export default styles;