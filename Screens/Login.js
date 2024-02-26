import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '../Shared/Colors'
import SignInWithOAuth from '../Components/SignInWithOAuth'

export default function Login() {
  return (
    <View style={{alignItems:'center',backgroundColor:'#FFADBC'}}>
     <Image source={require("../../assets/images/doctor.png")} style={styles.coverimg}/>
     <View style={{backgroundColor:"white",padding:25,alignItems:'center',borderRadius:20,height:450,justifyContent:'center',marginTop:10}}>
        <Text style={styles.heading}>Your Ultimate Doctor</Text>
        <Text style={styles.heading2}>Appointment Booking App</Text>
        <Text style={{textAlign:'center',marginTop:20}}
        >Book Appointments Effortlessly and manage your health journey</Text>
        <SignInWithOAuth/>
      </View>
     </View>
  )
}

const styles = StyleSheet.create({
    coverimg:{
       height:400,
       width:400,
       marginTop:90,
    },
    heading:{
        fontSize:28,
        fontWeight:'bold',
        marginTop:-20
    },
    heading2:{
        fontSize:28,
        fontWeight:'bold',
    }
})