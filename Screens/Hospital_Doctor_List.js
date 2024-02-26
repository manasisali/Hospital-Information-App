import { View, Text, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native'
import PageHeader from '../Components/Common/PageHeader';
import HospitalDoctor_Tab from '../Components/HospitalDoctorScreen/HospitalDoctor_Tab';
import HospitalListByCategory from '../Components/HospitalDoctorScreen/HospitalListByCategory';
import GlobalApi from '../Shared/GlobalApi';
import DoctorListByCategory from '../Components/HospitalDoctorScreen/DoctorListByCategory';

export default function Hospital_Doctor_List() {
   const [hospitalList,setHospitalList]=useState([]);
   const param=useRoute().params;
   const [activeTab,setActivetab]=useState('Hospital');

   useEffect(()=>{
     getHospitalsByCategory();
   },[])

   const getHospitalsByCategory=()=>{
    GlobalApi.getHospitalsListByCategory(param?.categoryName)
    .then(resp=>{
      setHospitalList(resp.hospitals);
      console.log(hospitalList);
    })
   }
    
   const[doctorList,setdoctorList] = useState([]); 
   useEffect (()=>{
        getDoctorListByCategory()
   },[])
   const getDoctorListByCategory=()=>{
    GlobalApi.getDoctor(param?.categoryName).then(resp=>{
      setdoctorList(resp.doctors);
      console.log(resp.doctors);
    })
   }
  
   

    return (
    <View style={{padding:20}}>
      <PageHeader title={param?.categoryName}/>
      <HospitalDoctor_Tab activeTab={(value)=>setActivetab(value)}/>
      {activeTab=='Hospital'?
      <HospitalListByCategory hospitalList={hospitalList}/>
      :<DoctorListByCategory doctorList={doctorList}/>  
     
    }
    </View>
  )
}

