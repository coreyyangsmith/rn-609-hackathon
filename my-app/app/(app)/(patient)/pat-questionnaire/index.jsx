import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Button } from 'react-native-paper'
import QuestionCard from "../../../../components/QuestionCard";
import { useState } from "react";
import { API_KEY } from '@env';

export default function Page() {
    const [formData, setFormData] = useState({
        Q1: '',
        Q2: '',
        Q3: ''
    });

    const styles = StyleSheet.create({
        mainContainer: { flex: 1 },
        scrollView: { flexGrow: 1, alignItems: 'center' },
    });

    return (
        <View style={styles.mainContainer}>
            <ScrollView contentContainerStyle={styles.scrollView}>
                <Text>Questionnaire Page</Text>
                <QuestionCard
                    titleText={'Q1'}
                    questionText={'How do you define a positive end-of-life care experience?'}
                    formData={formData}
                    setFormData={setFormData}
                />
                <QuestionCard
                    titleText={'Q2'}
                    questionText={'What are some advantages and disadvantages of resuscitation?'}
                    formData={formData}
                    setFormData={setFormData}
                />
                <QuestionCard
                    titleText={'Q3'}
                    questionText={'What worries you/the patient the most about end-of-life care?'}
                    formData={formData}
                    setFormData={setFormData}
                />
                <Button
                    style={{ width: 350 }}
                    mode="elevated"
                    compact={true}
                    onPress={() => console.log(formData)}
                >
                    Submit
                </Button>
            </ScrollView>
        </View >
    );
}

