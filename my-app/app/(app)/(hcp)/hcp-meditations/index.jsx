import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { Button, SegmentedButtons, Switch, ToggleButton } from 'react-native-paper'
import MeditationCard from "../../../../components/MeditationCard";
import { useState } from "react";

export default function Page() {
    const [audio, setAudio] = useState(false)
    const [time, setTime] = useState(5)

    const [formData, setFormData] = useState({
        prompt: '',
        audio: audio,
        time: time,
    });

    const onButtonToggle = (event) => {
        setAudio(event)

        const newFormData = formData;
        newFormData['audio'] = event;
        setFormData(newFormData)
    }

    const handleTimeChange = (event) => {
        setTime(event)

        const newFormData = formData;
        newFormData['time'] = event;
        setFormData(newFormData)
    }


    const onSubmit = () => {
        console.log(formData)
    }

    const styles = StyleSheet.create({
        mainContainer: { flex: 1 },
        scrollView: { flexGrow: 1, alignItems: 'center' },
        segmentedButtonContainer: {
            flex: 1,
            alignItems: 'center',
        },
    });

    return (
        <View style={styles.mainContainer}>
            <ScrollView contentContainerStyle={styles.scrollView}>
                <MeditationCard
                    titleText={'What would you like the focus of this \nmeditation to be?'}
                    firstItem={'Mindfulness'}
                    secondItem={'Stress Reduction'}
                    thirdItem={'Anxiety Reduction'}
                    fourthItem={'Compassion Fatigue'}
                    fifthItem={'Resilience'}
                    formData={formData}
                    setFormData={setFormData}
                />

                {/* Selection for Time */}
                <View style={{ height: 10 }} />
                <SegmentedButtons
                    value={time}
                    onValueChange={(value) => { handleTimeChange(value) }}
                    buttons={[
                        { value: 5, label: '5 min' },
                        { value: 10, label: '10 min' },
                        { value: 15, label: '15 min' },
                        { value: 20, label: '20 min' },
                    ]}
                    style={{ width: '85%' }}
                />


                {/* Selection for Include Audio */}
                <View style={{ height: 20 }} />
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ paddingRight: 16 }}>Include Audio?</Text>
                    <Switch
                        value={audio}
                        onValueChange={(event) => onButtonToggle(event)} />
                </View>

                {/* Submit Button */}
                <View style={{ height: 20 }} />
                <Button
                    style={{ width: 350 }}
                    mode="elevated"
                    compact={true}
                    onPress={() => onSubmit()}
                >
                    Submit
                </Button>
            </ScrollView>
        </View >
    );
}

