import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { Card, TextInput } from 'react-native-paper'

const QuestionCard = (props) => {

    const [textData, setTextData] = useState(props.formData[props.titleText])

    const handleFormChange = (newText) => {
        const newTextData = newText
        setTextData(newTextData)

        const formData = props.formData
        formData[props.titleText] = newText;
        props.setFormData(formData)
    }

    return (
        <Card style={{
            width: 350,
            height: 175,
            margin: 10

        }}>
            <Card.Title title={props.titleText} />
            <Card.Content>
                <Text variant='bodyMedium'>{props.questionText}</Text>
                <View style={{ height: 10 }} />
                <TextInput
                    label="Answer"
                    value={props.formData[props.titleText]}
                    mode='outlined'
                    onChangeText={text => handleFormChange(text)}
                />
            </Card.Content>
        </Card>
    )
}

export default QuestionCard