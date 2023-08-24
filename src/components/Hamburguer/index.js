import React from "react";
import { Icon } from 'react-native-elements';
import { StyleSheet, TouchableOpacity, View, Image } from 'react-native';
import { Actionsheet, useDisclose, Text, Box, NativeBaseProvider } from "native-base";

function Example() {
  const { isOpen, onOpen, onClose } = useDisclose();

  const styles = StyleSheet.create({
    Button: {
      width: 36,
    },
    Icon:{
      width: 36,
      height: 36,
      margin: 'auto',
      color: '#26262a',
    }
  });

  return (
    <>
      <TouchableOpacity onPress={onOpen} style={styles.Button}>
        <Image
            source={require('../../../assets/hambergermenu.png')} 
            style={styles.Icon} 
            size={36}
        />
      </TouchableOpacity>
      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content>
          <Box w="100%" h={60} px={4} justifyContent="center">
            <Text
              fontSize="16"
              color="gray.500"
              _dark={{
                color: "gray.300",
              }}
            >
              Menu
            </Text>
          </Box>
          <Actionsheet.Item>Sobre mim</Actionsheet.Item>
          <Actionsheet.Item>Portfolio</Actionsheet.Item>
          <Actionsheet.Item>Contato</Actionsheet.Item>
        </Actionsheet.Content>
      </Actionsheet>
    </>
  );
}

export default function Hamburguer() {
  const styles = StyleSheet.create({
    Containter: {
      width: 36,
    }
  });

  return (
    <NativeBaseProvider>
      <View style={styles.Container}>
        <Example />
      </View>
    </NativeBaseProvider>
  );
}