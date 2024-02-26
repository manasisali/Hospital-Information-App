import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function PageHeader({title,backbutton=true}) {
    const navigation = useNavigation();
  return (
    <View style={{
        display:'flex',
        flexDirection:'row',
        gap:5,
        alignItems:'center',
        marginTop:15
    }}>{backbutton?
        <TouchableOpacity onPress={()=>navigation.goBack()}>
        <Ionicons name="arrow-back-circle" size={37} color="black" />
        </TouchableOpacity>:null}
      <Text style={{fontSize:25}}>{title}</Text>
    </View>
  )
}