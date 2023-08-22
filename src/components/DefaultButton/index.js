import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useFonts } from 'expo-font';

export function DefaultButton(props){
    const styles = StyleSheet.create({
        DefaultButton: {
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#F86041',
            borderRadius: '30px',
            color: '#F7F7F7',
            border: 'none',
            paddingBlock: '12px',
            paddingInline: props.paddingInline??"32px",
            width: '100%',
            fontSize: '14px',
            fontFamily: 'PoppinsMedium',
        }
    });
    
    return (
        <TouchableOpacity style={styles.DefaultButton}>{props.valor}</TouchableOpacity>
    )
}


