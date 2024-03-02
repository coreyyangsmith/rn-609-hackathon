import { Button, StyleSheet } from 'react-native';
import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { useAuth } from '@/context/auth';
import LabelInputContainer from '../../components/LabelInputContainer';
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

    const register = () => {
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
            <Text style={styles.title}>Create an Account</Text>
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
                text={"Your Name"}
                label={'Enter Name'}
                secure={false}
                onChange={(value) => handleInputChange('user_name', value)}
            />
            <LabelInputContainer
                text={"Create User ID"}
                label={'Enter User ID'}
                secure={false}
                onChange={(value) => handleInputChange('user_ID', value)}
            />
            <LabelInputContainer
                text={"Create Password"}
                label={'Enter Password'}
                secure={true}
                onChange={(value) => handleInputChange('password', value)}
            />
            <LabelInputContainer
                text={"Confirm Password"}
                label={'Enter Password'}
                secure={true}
                onChange={(value) => handleInputChange('pasword_confirm', value)}
            />
            <View
                style={styles.separator}
                lightColor="#eee"
                darkColor="rgba(255,255,255,0.1)"
            />
            <Button title='Create Profile' color={'orange'} onPress={register} />
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
});
