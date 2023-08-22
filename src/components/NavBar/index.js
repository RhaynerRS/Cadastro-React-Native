import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { IconButton } from '../IconButton/index'

export function NavBar(props){
  const styles = StyleSheet.create({
    Container: {
      flexDirection: 'row',
    },
  });

  return(
    <View style={styles.Container}>
      <IconButton valor={'Login'} paddingBlock={8} paddingInline={18}></IconButton>
    </View>
  )
}