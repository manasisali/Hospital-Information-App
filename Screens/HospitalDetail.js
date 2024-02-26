import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import PageHeader from '../Components/Common/PageHeader';
import Hospitalinfo from '../Components/HospitalDetail/Hospitalinfo';
import BookAppointment from './BookAppointment';

export default function HospitalDetail() {
    const [hospital, setHospital] = useState(null);
    const param = useRoute().params;
    const navigation=useNavigation();

    useEffect(() => {
        setHospital(param.hospital);
    }, [param.hospital]);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <PageHeader title={''} />
            </View>
            <ScrollView style={styles.content}>
                {hospital && (
                    <>
                        <Image
                            source={{ uri: hospital.image.url }}
                            style={styles.image}
                        />
                        <View style={styles.infoContainer}>
                            <Hospitalinfo hospital={hospital} />
                        </View>
                    </>
                )}
            </ScrollView>
            <TouchableOpacity
                style={styles.button}
                onPress={() =>
                    navigation.navigate('book-appointment',{
                        hospital:hospital
                    })
                   
                }>
                <Text style={styles.buttonText}>Book Appointment</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        position: 'absolute',
        zIndex: 10,
        margin: 10,
    },
    content: {
        flex: 1,
    },
    image: {
        width: '100%',
        height: 260,
    },
    infoContainer: {
        marginTop: -20,
        backgroundColor: '#fff',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 20,
    },
    button: {
        padding: 15,
        backgroundColor: '#863A6F',
        borderRadius: 10,
        alignItems: 'center',
        marginHorizontal: 20,
        marginBottom: 20,
    },
    buttonText: {
        fontSize: 18,
        color: '#FBF9F1',
    },
});

