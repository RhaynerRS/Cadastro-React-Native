import { StyleSheet, Text, TextInput, View, Image } from 'react-native';
import { useFonts } from 'expo-font';
import { Icon } from 'react-native-elements';
import React, { useState } from 'react';


export function InputKey(props){
    const [secure, setSecure] = React.useState (props.secure);

    const styles = StyleSheet.create({
        InputText: {
            position: 'relative',
            width: '100%',
            gap: '8px',
        },
        Label: {
            color: '#26262B',
            fontSize: '12px',
            fontFamily: 'MerriweatherLight',
        },
        Input: {
            display: 'flex',
            flexDirection: 'row',
            position: 'relative',
        },
        Text: {
            width: '100%',
            backgroundColor: 'transparent',
            color: '#26262B',
            border: 'none',
            borderRadius: '15px',
            height: '24px',
            fontFamily: 'MerriweatherLight',
            fontSize: '14px',
            alignItems: 'center',
            paddingBlock: '12px',
            paddingInline: '12px',
            gap: '8px',
            border: '1px solid #625C6F',
            borderRadius: '15px',
            height: '54px',
        },
        Image: {
            marginTop: 'auto',
            marginBottom: 'auto',
            position: 'absolute',
            height:20,
            right: '0',
            top: '0',
            bottom: '0',
            paddingRight: 15,
        },
    });

    return (
        <View style={styles.InputText}>
            <Text style={styles.Label}>{props.label}</Text>
            <View style={styles.Input}>
                <TextInput style={styles.Text} type="text" placeholder={props.placeholder} secureTextEntry={secure}></TextInput>
                <Icon  containerStyle={styles.Image}
                    name={secure ? "visibility" : "visibility-off"}
                    size={20} color='#625C6F' 
                    onPress={() => setSecure(!secure)} />
            </View>
        </View>
    )
}