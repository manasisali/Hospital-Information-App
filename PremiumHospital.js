import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../../Shared/GlobalApi'
import Hospitalitem from './Hospitalitem';

export default function PremiumHospital() {

  const [hospitals,sethospitals]=useState([]);
    useEffect(()=>{
       getHospitals();
    },[])
    const getHospitals=()=>{
        GlobalApi.getHospitals().then(resp=>{
            console.log(resp.hospitals);
            sethospitals(resp?.hospitals);
        })
    }

  return hospitals&&(
    <View style={{
        marginTop:10
    }}>
      <Text  style={{
                fontSize:20,
                fontWeight:'bold'
            }}>Our Premium Hospital
      </Text>
      <FlatList
      data={hospitals}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      renderItem={({item,index})=>(
          <Hospitalitem hospital={item}/>
      )}/>
    </View>
  )
}

