import React from 'react'
import { ScrollView } from 'react-native'
import { StyleSheet, Image, Text } from 'react-native'
import { Button } from 'react-native-elements'




export default function userGuest() {
    return (
      <ScrollView centerContent={true} style={styles.viewBody}>
        <Image
          source={require("../../assets/logo.png")}
          resizeMode="contain"
          style={styles.image}
        />
        <Text style={styles.title}>Consulta tu perfil en Restos</Text>
        <Text style={styles.subtitle}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </Text>
        <Button 
            buttonStyle={styles.button}
            title="Ver mi perfil"
         />
      </ScrollView>
    );
}


const styles = StyleSheet.create({
    viewBody: {
        marginHorizontal: 30,
        flex:1,

    },
    image:{
        height: 300,
        width: "100%",
        marginBottom: 10,
        
    },
    title:{
        fontWeight: "bold",
        fontSize: 19,
        marginVertical: 10,
        textAlign: "center"

    },
    subTitle:{
        textAlign:'justify'

    },
    button:{
        marginTop:20,
        backgroundColor:"#442484"

    }
})