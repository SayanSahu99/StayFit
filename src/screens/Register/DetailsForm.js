import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Input, Button, Text } from 'react-native-elements';
import { Formik } from 'formik';
import * as yup from 'yup';
import RNPickerSelect from 'react-native-picker-select';
import { ScrollView } from 'react-native-gesture-handler';

const validationSchema = yup.object().shape({
    name: yup
        .string()
        .min(4, "Too Short!")
        .max(50, "Too Long!")
        .required('Full name is required'),
    height: yup
        .number()
        .max(10, "Too Long!!")
        .lessThan(2.7432, "Max height is 2.7432 metres")
        .positive("Must be positive")
        .required('Height is required'),
    weight: yup
        .number()
        .max(10, "Too Long!!")
        .lessThan(500, "Max weight is 500 Kg")
        .positive("Must be positive")
        .required('weight is required'),
})

const StyledInput = ({ label, formikProps, formikKey, ...rest }) => {
    const inputStyles = {
        padding: 10,
        marginBottom: 10,
        marginVertical: 15
    };

    if (formikProps.touched[formikKey] && formikProps.errors[formikKey]) {
        inputStyles.borderColor = 'red';
    }

    return (
            <Input
                style={inputStyles}
                onChangeText={formikProps.handleChange(formikKey)}
                onBlur={formikProps.handleBlur(formikKey)}
                errorStyle={{ color: 'red' }}
                errorMessage={formikProps.touched[formikKey] && formikProps.errors[formikKey]}
                {...rest}
            />
    );
};

export const DetailsForm = props => {

    const [gender, setGender] = useState('');

    const selectItem = (value, formikProps) => {
        setGender(value)
        formikProps.setFieldValue('gender', value);
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.formStyles}>
                <Formik
                    
                    initialValues={{ 
                                    name: '',
                                    gender:gender,
                                    height: 0,
                                    weight: 0
                                }}
                    onSubmit={values => {
                        alert(JSON.stringify(values));
                        console.log(values)
                    }}
                    validationSchema={validationSchema}
                >
                    {formikProps => (
                        <View>
                            <StyledInput
                                label="Name"
                                formikProps={formikProps}
                                formikKey="name"
                                placeholder="Name"
                                autoFocus
                            />
                            <RNPickerSelect
                                key={gender}
                                onValueChange={value => selectItem(value, formikProps)}
                                placeholder={{
                                    label: "Select gender...",
                                    value: null
                                }}
                                items={[
                                    { label: 'Male', value: 'male' },
                                    { label: 'Female', value: 'female' },
                                ]}
                                value={gender}
                                style={styles.inputIOS}
                            />
                            <StyledInput
                                label="height"
                                formikProps={formikProps}
                                formikKey="height"
                                placeholder="Enter height in metres"
                                autoFocus
                            />
                            <StyledInput
                                label="weight"
                                formikProps={formikProps}
                                formikKey="weight"
                                placeholder="Enter weight in Kg"
                                autoFocus
                            />
                            <View>
                                <Button onPress={formikProps.handleSubmit} title="Submit" />
                            </View>
                        </View>
                    )}

                </Formik>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        paddingTop: 13,
        paddingHorizontal: 10,
        paddingBottom: 12,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        backgroundColor: 'white',
        color: 'black',
    },
    container: {
        flex: 1,
        justifyContent: 'flex-start',
    },
    formStyles: {
        margin: 15,
        marginVertical: 10
    }
});