
import { Button, StyleSheet } from 'react-native';
import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { useAuth } from '@/context/auth';
import LabelInputContainer from '../../../../components/LabelInputContainer'
import axios from 'axios';
import { useState } from 'react';

export default function Page() {
    return (
        <View style={styles.container}>
        <Text style={styles.title}>Consult Spi Health</Text>
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
            label={'Unit'}
            secure={false}
            onChange={(value) => handleInputChange('user_name', value)}
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

