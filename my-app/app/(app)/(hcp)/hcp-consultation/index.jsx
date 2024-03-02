import LabelInputContainer from '../../../../components/LabelInputContainer'


import { Button, StyleSheet, TextInput } from 'react-native';
import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { useAuth } from '@/context/auth';
import axios from 'axios';
import { useState } from 'react';

export default function TabOneScreen() {
    const [userData, setUserData] = useState({
        MRN: '',
        patient_name: '',
        user_name: '',
        user_ID: '',
        password: '',
        password_confirm: '',
    });

    //user_password2 = '';

    const handleInputChange = (name, value) => {
        setUserData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };
    //const { signIn } = useAuth();

    const send = () => {
        print(userData)
        const apiURL = 'http://localhost:3001/register';
        axios.post(apiURL, userData)
            .then(response => {
                console.log("Account created Successfully", response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Consult Spiritual Health</Text>
            <View
                style={styles.separator}
                lightColor="#eee"
                darkColor="rgba(255,255,255,0.1)"
            />

            <LabelInputContainer
                text={"Patient's MRN"}
                label={'Enter MRN'}
                secure={false}
                onChange={(value) => handleInputChange('MRN', value)}
            />
            <LabelInputContainer
                text={"Patient Name"}
                label={'Enter Name'}
                secure={false}
                onChange={(value) => handleInputChange('patient_name', value)}
            />
            <LabelInputContainer
                text={"Unit"}
                label={'Enter Unit'}
                secure={false}
                onChange={(value) => handleInputChange('unit', value)}
            />
            
            <View
                style={styles.separator}
                lightColor="#eee"
                darkColor="rgba(255,255,255,0.1)"
            />

        <Text style={styles.title}>Brief description</Text>
            <View
                style={styles.separator}
                lightColor="#eee"
                darkColor="rgba(255,255,255,0.1)"
            />

    <View style={styles.container}>
      <TextInput
        style={styles.input}       
        placeholder="Enter text here"
        
      />
        </View>

            <Button title='Send Consult' color={'orange'} onPress={send} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
    input: {
        width: 400,
        height:60,
    },
});
