import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import { Icon } from 'react-native-elements';

const styles = StyleSheet.create({
  FullProject: {
    gap: 48,
    flex: 1,
    backgroundColor: '#F7F7F7',
    alignItems: 'center',
  },
  Nav: {
    marginTop: 0,
  },
  TopContainer: {
    gap: 14,
    width: '100%',
  },
  MainContainer:{
    width: '100%',
    gap: 32,
  },
  Container: {
    gap: '16px',
    width: '100%',
    paddingInline: '0.5rem',
    marginBottom: 25,
  },
  Hero: {
    gap: '42px',
    paddingInline: '0.5rem',
    alignItems: 'center',
    justifyContent: 'center', 
  },
  Title: {
    fontFamily: 'PoppinsBold',
    fontSize: '24px',
    color: '#26262B',
  },
  Link: {
    gap: 8,
    width: '100%',
    alignItems: 'start',
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '8px',
    fontSize: '16px',
  },
  Text: {
    fontFamily: 'MerriweatherLight',
    color: '#26262B',
  },
  Hiperlink: {
    fontFamily: 'MerriweatherRegular',
    color: '#F86041',
    textDecorationLine: 'underline',
    fontSize: '24px',
  },
});

export default styles;