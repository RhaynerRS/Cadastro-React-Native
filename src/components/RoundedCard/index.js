import { StyleSheet, Text, View } from 'react-native';

export default function RoundedCard(prop){
    const styles = StyleSheet.create({
        RoundedCard:{
            width: '91.35%',
            height: '120px',
            borderRadius: 28,
            backgroundColor: '#000'
        }
    })

    return (
        <View style={styles.RoundedCard}>teste</View>
    )
}