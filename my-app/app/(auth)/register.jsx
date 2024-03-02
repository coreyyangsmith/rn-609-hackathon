import { Button, StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { useAuth } from '@/context/auth';
import LabelInputContainer from '../../components/LabelInputContainer';


export default function TabOneScreen() {

    const { signIn } = useAuth();

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
            />
            <LabelInputContainer
                text={"Patient Name"}
                label={'Enter Name'}
                secure={false}
            />
            <LabelInputContainer
                text={"Your Name"}
                label={'Enter Name'}
                secure={false}
            />
            <LabelInputContainer
                text={"Create User ID"}
                label={'Enter User ID'}
                secure={false}
            />
            <LabelInputContainer
                text={"Create Password"}
                label={'Enter Password'}
                secure={true}
            />
            <LabelInputContainer
                text={"Confirm Password"}
                label={'Enter Password'}
                secure={true}
            />
            <View
                style={styles.separator}
                lightColor="#eee"
                darkColor="rgba(255,255,255,0.1)"
            />
            <Button title='Create Profile' color={'orange'} onPress={signIn} />
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
