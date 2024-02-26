import { request, gql } from 'graphql-request'

const MASTER_URL="https://api-ap-south-1.hygraph.com/v2/clrzyy96r23mm01w6jyry0s2z/master"

const getSlider=async()=>{
    const query = gql`
    query GetSlider {
        sliders {
          id
          name
          image {
            url
          }
        }
      }
      
`
  const result = await request(MASTER_URL, query);
  return result;
}

const getCategories=async()=>{
  const query = gql`
  query GetCategory {
    categories {
      id
      name
      icon {
        url
      }
    }
  }
  
`
const result = await request(MASTER_URL, query);
return result;
}


const getHospitals=async()=>{
  const query = gql`
  query getHospitalList {
    hospitals {
      id
      name
      email
      description
      address
      categories {
        name
      }
      image {
        url
      }
      phone
      premium
      website
    }
  }
  
`
const result = await request(MASTER_URL, query);
return result;
}

const getHospitalsListByCategory=async(Categories)=>{
  const query = gql`
  query getHospitalList {
    hospitals(where: {categories_some: {name: "`+Categories+`"}}) {
      id
      name
      email
      description
      address
      categories {
        name
      }
      image {
        url
      }
      phone
      premium
      website
    }
  }
  
`
const result = await request(MASTER_URL, query);
return result;
}

const getDoctor=async(Categories)=>{
  const query = gql`
  query getDoctor {
    doctors(where: {category: {name: "`+Categories+`"}}) {
      name
      img {
        url
      }
      experience
      hospital {
        name
      }
      category {
        name
      }
    }
  }
  
`
const result = await request(MASTER_URL, query);
return result;
}

export default{
    getSlider,
    getCategories,
    getHospitals,
    getHospitalsListByCategory,
    getDoctor,
}