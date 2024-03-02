import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { Card, SegmentedButtons, Switch, TextInput, ToggleButton } from 'react-native-paper'
import { RadioButton } from 'react-native-paper';


const MedtationCard = (props) => {
    const [meditation, setMeditation] = useState('first');

    const handleChange = (event) => {
        setMeditation(event)

        const newFormData = props.formData;
        newFormData['prompt'] = event;
        props.setFormData(newFormData)
    }

    return (
        <Card style={{
            width: 350,
            height: 345,
            margin: 10

        }}>
            <Card.Title title={props.titleText} titleNumberOfLines={2} style={{ marginTop: '3%' }} />
            <Card.Content>
                <View style={{ height: 10 }} />
                <RadioButton.Group onValueChange={value => handleChange(value)} value={meditation}>
                    <RadioButton.Item label={props.firstItem} value={props.firstItem} />
                    <RadioButton.Item label={props.secondItem} value={props.secondItem} />
                    <RadioButton.Item label={props.thirdItem} value={props.thirdItem} />
                    <RadioButton.Item label={props.fourthItem} value={props.fourthItem} />
                    <RadioButton.Item label={props.fifthItem} value={props.fifthItem} />
                </RadioButton.Group>
            </Card.Content>
        </Card>
    )
}

export default MedtationCard