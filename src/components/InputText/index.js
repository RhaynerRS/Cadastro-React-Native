import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { useFonts } from 'expo-font';

export function InputText(props){

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
            backgroundColor: 'transparent',
            color: '#26262B',
            border: '1px solid #625C6F',
            borderRadius: '15px',
            height: '54px',
            paddingInline: '12px',
            fontFamily: 'MerriweatherLight',
            fontSize: '14px',
        }
    });

    return (
        <View style={styles.InputText}>
            <Text style={styles.Label}>{props.label}</Text>
            <TextInput style={styles.Input} placeholder={props.placeholder} onChangeText={props.onChangeText} value={props.value}></TextInput>
        </View>
    )
}