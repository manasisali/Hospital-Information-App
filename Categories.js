import { View, Text, FlatList, Image, TouchableOpacity  } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../../Shared/GlobalApi'
import { useNavigation } from '@react-navigation/native';
import Hospital_Doctor_List from '../../Screens/Hospital_Doctor_List';

export default function Categories() {

    const navigation = useNavigation();
    const [categories,setCategories]=useState([]);
    useEffect(()=>{
        getCategories();
    },[])
    const getCategories=()=>{
        GlobalApi.getCategories().then(resp=>{
            // console.log(resp.categories);
            setCategories(resp?.categories);
        })
    }
    return (
        <View style={{ marginTop: 10 }}>
            <Text style={{
                fontSize:20,
                fontWeight:'bold'
            }}>Doctor Speciality</Text>
                <FlatList
                   data={categories}
                     numColumns={4}
                    renderItem={({item,index})=>(
                        <TouchableOpacity 
                        onPress={()=>navigation.navigate("Hospital-Doctor-List",
                        {
                            categoryName:item.name
                        })}
                        style={{
                            flex:1,
                            alignItems:'center',
                            marginTop:10
                        }}>
                          <View style={{
                            backgroundColor:'#fff',
                            padding:17,
                            borderRadius:99
                          }}>
                            <Image source={{uri:item?.icon?.url}}
                            style={{
                                height: 40,
                                width:40,
                           }}/>
                         </View>
                         <Text style={{
                            fontSize:15,
                            fontWeight:'500',
                            marginTop:5
                         }}>{item?.name}</Text>
                        </TouchableOpacity>
                    )}/>
           </View>
      )
    }