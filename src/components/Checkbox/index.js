import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

// https://www.youtube.com/watch?v=ZEATUQRxBwc

export function Checkbox(props){
    const styles = StyleSheet.create({
        Check: {
            marginTop: 'auto',
            marginBottom: 'auto',
            height:20,
            paddingRight: 15,
        },
        Touchable: {
            alignItems: 'center',
            height: '32px',
            width: '32px',
        }
    });

    return (
    <View>
        <TouchableOpacity style={styles.Touchable}>
            <Icon name="check-box" style={styles.Check} color={('#343779')} size='20px'>

            </Icon>
        </TouchableOpacity>
    </View>
    )}