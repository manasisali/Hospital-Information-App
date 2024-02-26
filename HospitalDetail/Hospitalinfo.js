import React, { useState } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { View, Text, TouchableOpacity, Linking } from 'react-native';
import { Fontisto } from '@expo/vector-icons';

export default function Hospitalinfo({ hospital }) {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return hospital && (
    <View>
      <Text style={{ fontSize: 23 }}>{hospital.name}</Text>
      <FlatList
        data={hospital.categories}
        horizontal={true}
        renderItem={({ item }) => (
          <View>
            <Text style={{
              marginRight: 10,
              color: '#b8b3b8'
            }}>{item.name},</Text>
          </View>
        )}
      />
      <View style={{ borderBottomWidth: 1, borderColor: '#b8b3b8', margin: 5, marginBottom: 10 }} />
      <View style={{ display: 'flex', flexDirection: 'row', gap: 5, alignItems: 'center' }}>
        <Entypo name="location-pin" size={30} color="#863A6F" />
        <Text style={{ fontSize: 16, paddingRight: 23, color: '#b8b3b8' }}>{hospital.address}</Text>
      </View>
      <View style={{ display: 'flex', flexDirection: 'row', gap: 5, alignItems: 'center', marginTop: 5 }}>
        <AntDesign name="clockcircle" size={25} color="#863A6F" />
        <Text style={{ fontSize: 17, paddingRight: 23, color: '#b8b3b8', paddingLeft: 5 }}>Mon Fri | 8AM-11AM</Text>
      </View>
      <View style={{ borderBottomWidth: 1, borderColor: '#b8b3b8', margin: 5, marginBottom: 10 }} />
      <Text style={{ fontSize: 20, paddingRight: 23, paddingLeft: 5, fontWeight: '500' }}>About</Text>
      <Text style={{ fontSize: 17, paddingRight: 23, color: '#b8b3b8', paddingLeft: 5 }}>
        {showFullDescription ? hospital.description : `${hospital.description.slice(0, 60)}...`}
        <TouchableOpacity onPress={toggleDescription}>
          <Text style={{ color: '#863A6F',fontSize:17 }}>
            {showFullDescription ? ' Read less' : ' Read more'}
          </Text>
        </TouchableOpacity>
      </Text>
      <View style={{ display: 'flex', flexDirection: 'row', gap: 5, alignItems: 'center', marginTop: 5 }}>
      <Entypo name="phone" size={24} color="#863A6F" />
      <Text style={{ fontSize: 17, paddingRight: 23,  paddingLeft: 5 }}>{hospital.phone}</Text>
      </View>
      <View style={{ display: 'flex', flexDirection: 'row', gap: 5, alignItems: 'center', marginTop: 5 }}>
      <Fontisto name="email" size={24} color="#863A6F" />
       <Text style={{ fontSize: 17, paddingRight: 23, paddingLeft: 5 }}>{hospital.email}</Text>
      </View>
      
      <View style={{ display: 'flex', flexDirection: 'row', gap: 5, alignItems: 'center', marginTop: 5 }}>
  <FontAwesome6 name="earth-americas" size={24} color="#863A6F" />
  <TouchableOpacity onPress={() => Linking.openURL(hospital.website)}>
    <Text style={{ fontSize: 17, paddingRight: 23, color: '#863A6F', paddingLeft: 5 }}>
      {hospital.website}
    </Text>
  </TouchableOpacity>
</View>
  </View>
  );
}