import React from 'react'
import { View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Image, Button, Text } from 'react-native-elements';
import styles from './style';

const Welcome = ({ navigation }) => {
    return (
        <View style={styles.containerView}>


            <Text h4 h4Style={styles.welcomeText}>Welcome To Stay Fit</Text>

            <Image
                source={require('./../../../assets/jogging.png')}
                style={styles.imageView}
            />

            <View>
                <View style={styles.getStartedButton}>
                    <Button
                        title="Get Started"
                        onPress={() => navigation.push('Register')}
                        buttonStyle={styles.getStartedButton}
                    />
                </View>
                <View style={styles.accountText}>
                    <Text style={{ fontSize: 15 }}>Already Have an account?</Text>
                    <TouchableOpacity
                        onPress={() => navigation.push('SignIn')}>
                        <Text style={styles.signInText}>Sign In</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}

export default Welcome
