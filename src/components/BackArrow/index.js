import { StyleSheet, View, Text, Image } from 'react-native';
import { useFonts } from 'expo-font';

export function BackArrow(props){
    const styles = StyleSheet.create({
      ContainerArrow: {
        paddingInline: '1rem',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'start',
      },
      Arrow: {
        width: 36,
        height: 36,
        color: '#26262B',
      },
      Title: {
        fontSize: '24px',
        fontFamily: 'PoppinsBold',
        color: '#26262B',
      },
      ContainerTitle: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      },
    });
    
    return (
      <View style={styles.ContainerArrow}>
        <Image 
          source={require('../../../assets/arrow_back.png')}
          style={styles.Arrow}
          color={'#26262B'}
          size={36}
        />
        <View style={styles.ContainerTitle}>
          <Text style={styles.Title}>{props.valor??' '}</Text>
        </View>
      </View>
    )
}