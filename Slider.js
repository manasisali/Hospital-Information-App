import { View, Text,FlatList,Image,Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../../Shared/GlobalApi'

export default function Slider() {
    
    const [slider,setSlider]=useState();

    useEffect(()=>{
        getSlider();
    },[])
    const getSlider=()=>{
        GlobalApi.getSlider().then(resp=>{
            console.log("resp",resp.sliders)
            setSlider(resp?.sliders)
        })
    }
  return (
    <View style={{ marginTop: 10 }}>
            <FlatList
               data={slider}
                 horizontal={true}
                 showsHorizontalScrollIndicator={false}
                renderItem={({item,index})=>(
                    <View>
                       <Image source={{uri:item?.image?.url}}
                       style={{
                        height: 170,
                        width:Dimensions.get('screen').width*0.9,
                        margin:2,
                        borderRadius:10
                       }}/>
                    </View>
                )}/>
       </View>
  )
}