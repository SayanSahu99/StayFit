import React from 'react'
import { View, Text, Button } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import SignIn from '../SignIn/SignIn'

const Welcome = ({navigation}) => {
    return (
        <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
            <Button
                title="Get Started"
                onPress={() => navigation.push('Register')} 
            ></Button>
            <View style={{flexDirection:'row', margin:10}}>
                <Text>Already Have an account?</Text>
                <TouchableOpacity onPress={() => navigation.push('SignIn')}><Text style={{marginHorizontal:10, color:'blue'}}>Sign In</Text></TouchableOpacity>
            </View>
        </View>
    )
}

export default Welcome
