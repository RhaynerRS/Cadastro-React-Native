import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { IconButton } from '../IconButton/index';
import Hamburguer from '../Hamburguer/index';

export function NavBar(props){
  const styles = StyleSheet.create({
    Container: {
      flexDirection: 'row',
    },
  });

  return(
    <View style={styles.Container}>
      <Hamburguer></Hamburguer>
      <IconButton valor={'Login'} paddingBlock={8} paddingInline={18}></IconButton>
    </View>
  )
}