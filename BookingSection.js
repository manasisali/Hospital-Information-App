import { View, Text, FlatList,StyleSheet,TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import moment from 'moment'
import { useUser } from '@clerk/clerk-expo';

export default function BookingSection({hospital}) {
    
    const {isLoaded,isSignedIn,user} = useUser();
    const [next7day,setnextSevenday]=useState([]);
    const [selectDate, setselectDate]=useState();
    const [time,settime]=useState();
    const [selectTime, setselectTime]=useState();

    useEffect(()=>{
      getDays();
      getTime();
    },[])

    const getDays=()=>{
        const today = moment();
        const nextSevenday = [];
        for(let i = 0; i<7;i++){
          const date=moment().add(i,'days');
          nextSevenday.push({
            date:date,
            day:date.format('ddd'),
            formatedDate:date.format('Do MMM')
          })
        }
        setnextSevenday(nextSevenday);
    }
    
    const getTime=()=>{
      const timeList = [];
      for(let i = 8; i<=11; i++){
        timeList.push({
          time:i+':00 AM'
        })
        timeList.push({
          time:i+':30 AM'
        })
      } 
      for(let i = 12; i<13; i++){
        timeList.push({
          time:i+':00 PM'
        })
        timeList.push({
          time:i+':30 PM'
        })
      }
      for(let i = 1; i<=6; i++){
        timeList.push({
          time:i+':00 PM'
        })
        timeList.push({
          time:i+':30 PM'
        })
      }
    settime(timeList)
    }

    const BookAppointment=()=>{
      const data={
        data:{
          Username:user.firstName,
          Date:selectDate,
          Time:selectTime,
          Email:user.primaryEmailAddress.emailAddress,
          hospital:hospital.name,
        }
      }
      console.log(data);
      alert("Appointment Booked Successfully.")
    }

    
  


  return (
    <View>
      <Text style={{fontSize:18,
        color:'#a6a4a4'
    }}>Book Appointment</Text>
    <Text style={{fontSize:20,fontWeight:'700',marginTop:10}}>Day</Text>
    <FlatList
     horizontal={true}
     showsHorizontalScrollIndicator={false}
      data={next7day}
      renderItem={({item})=>{
        return(
        <TouchableOpacity style={[styles.daybtn,
         selectDate==item.date
         ?{backgroundColor:"#863A6F"}
         :null
        ]}
        onPress={()=>setselectDate(item.date)}>
          <Text style={[{
              fontWeight:'600'},
              selectDate==item.date
              ?{color:'#fff'}
              :null
              ]}>{item.day}</Text>
          <Text style={[{
            fontSize:16,
            fontWeight:'600'
          },
          selectDate==item.date
          ?{color:'#fff'}
          :null]}>
            {item.formatedDate}</Text>
        </TouchableOpacity>
        )
      }}
    />
     
     <Text style={{fontSize:20,fontWeight:'700',marginTop:20}}>Time</Text>
     <FlatList
     horizontal={true}
     showsHorizontalScrollIndicator={false}
      data={time}
      renderItem={({item})=>{
        return(
        <TouchableOpacity style={[styles.daybtn,{paddingVertical:16},
         selectTime==item.time
         ?{backgroundColor:"#863A6F"}
         :null
        ]}
        onPress={()=>setselectTime(item.time)}>
          <Text style={[{
              fontWeight:'600'},
              selectTime==item.time
              ?{color:'#fff'}
              :null
              ]}>{item.time}</Text>
          
        </TouchableOpacity>
        )
      }}
      />
       <TouchableOpacity
                style={styles.button}
                onPress={()=>BookAppointment()
                }>
                <Text style={styles.buttonText}>Book Appointment</Text>
            </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
  daybtn:{
      borderWidth:1,
      borderRadius:99,
      padding:5,
      paddingHorizontal:20,
      alignItems:'center',
      marginRight:10,
      marginTop:20,
  },
  button: {
    padding: 15,
    backgroundColor: '#863A6F',
    borderRadius: 10,
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 20,
    marginTop:50
},
buttonText: {
    fontSize: 18,
    color: '#FBF9F1',
},
})


