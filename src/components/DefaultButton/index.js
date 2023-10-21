import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useFonts } from 'expo-font';

export function DefaultButton(props){
    const styles = StyleSheet.create({
        DefaultButton: {
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#F86041',
            borderRadius: '30px',
            border: 'none',
            paddingBlock: '12px',
            paddingInline: props.paddingInline??"32px",
            width: '100%',
        },
        TextButton: {
            color: '#F7F7F7',
            fontSize: '14px',
            fontFamily: 'PoppinsMedium',
        },
    });
    
    return (
            <TouchableOpacity style={styles.DefaultButton} onPress={props.onPress}>
                <Text style={styles.TextButton}>{props.valor}</Text>
            </TouchableOpacity>
    )
}


