import { useNavigation } from '@react-navigation/core';
import React from 'react'

import { StyleSheet, Text, View, Button } from 'react-native';




export default function Home(){
 const Navigation = useNavigation();

 function paginaDetalhes() {
   Navigation.navigate("Detalhes")


 }

return(

    <View>

    <Text> ESSA É PAGINA INICIAL </Text>

    <Button title = 'Ir Para Detalhes' onPress = {paginaDetalhes} />

    </View>


);


}