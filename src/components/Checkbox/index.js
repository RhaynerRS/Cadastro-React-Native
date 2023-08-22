import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { useState } from "react";

// https://www.youtube.com/watch?v=ZEATUQRxBwc

export function Checkbox({options = [], onChange}){
    const [selected, setSelected] = useState([]);

    function toggle(id){
        let index = selected.includes(id);
        let arrSelecteds = [...selected];
        if(index !== -1){
            arrSelecteds = arrSelecteds.filter((i) => i !== id);
        } else {
            arrSelecteds.push(id);
        }
        setSelected(arrSelecteds);
    }

    const styles = StyleSheet.create({
        Container: {
            width: 32,
            height: 32,
            marginTop: 'auto',
            marginBottom: 'auto',
            alignItems: 'center',
            justifyContent: 'center',
        },
        Touchable: {
            alignItems: 'center',
            justifyContent: 'center',
            height: 32,
            width: 32,
            backgroundColor: '#625C6F',
        }
    });

    return (
    <View style={styles.Container}>
        {options.map((op,index) => (
            <TouchableOpacity 
                style={styles.Touchable} 
                onPress={() => toggle(op?.id)}>
                <Icon
                    name={selected.includes(op.id) ? "check-box" : "check-box-outline-blank"} 
                    color={selected.includes(op.id) ? '#343779' : '#625C6F'} 
                    size={20}
                />
            </TouchableOpacity>
        ))}
    </View>
    )}

export default Checkbox;