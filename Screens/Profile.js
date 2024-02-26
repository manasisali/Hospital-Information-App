import { View, Text, Image } from 'react-native'
import React from 'react'
import PageHeader from '../Components/Common/PageHeader'
import { useUser } from '@clerk/clerk-expo';

export default function Profile() {
  const {isLoaded,isSignedIn,user} = useUser();
  return (
    <View style={{padding:20,display:'flex'}}>
      <PageHeader title={'Profile'} backbutton={false}/>
      <Image source={{uri:user.imageUrl}}
        style={{width:100,height:100,borderRadius:100,marginHorizontal:140}}/>
      <Text style={{fontSize:20,paddingHorizontal:30,marginTop:20}}>UserName: {user.firstName}</Text>
      <Text style={{fontSize:20,paddingHorizontal:30,marginTop:10}}>Email: {user.primaryEmailAddress.emailAddress}</Text>  
    </View>
  )
}