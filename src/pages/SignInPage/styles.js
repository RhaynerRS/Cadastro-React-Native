import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import { Icon } from 'react-native-elements';

const styles = StyleSheet.create({
  FullProject: {
    gap: 98,
    flex: 1,
    backgroundColor: '#F7F7F7',
    alignItems: 'center',
  },
  Nav: {
    marginTop: 0,
  },
  MainContainer:{
    width: '100%',
    gap: 112,
    paddingInline: '1rem',
  },
  Container: {
    gap: '16px',
    width: '100%',  },
  Hero: {
    gap: '12px',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
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
  Forgot: {
    flexDirection: 'row',
    justifyContent: 'end',
  }
});

export default styles;