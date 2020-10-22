
import React from 'react'
import styles from "../Register/style";
import {Keyboard, Text, View, TextInput, TouchableWithoutFeedback, Platform, KeyboardAvoidingView } from 'react-native';
import { Button, SocialIcon } from 'react-native-elements';

export default function Register({ navigation }) {
  // TODO: add firebase login function later

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 40 : 0}
      style={styles.containerView}
    >

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.loginScreenContainer}>
          <View style={styles.loginFormView}>
          <Text style={styles.logoText}>Stay Fit</Text>
            <TextInput placeholder="Email" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} />
            <TextInput placeholder="Password" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} secureTextEntry={true}/>
            <Button
              buttonStyle={styles.loginButton}
              onPress={() => {}}
              title="LOGIN"
            />
            <View style={styles.socialView}>
              <View style={styles.socialTextView}><Text style={{fontSize: 15}}>Or login with</Text></View>
              
              <View style={styles.socialButtonView}>
                <SocialIcon
                  type='facebook'
                  buttonStyle={styles.fbLoginButton}
                  onPress={() =>{}}
                />
                <SocialIcon
                  type='google'
                  buttonStyle={styles.fbLoginButton}
                  onPress={() =>{}}
                />
                <SocialIcon
                  type='twitter'
                  buttonStyle={styles.fbLoginButton}
                  onPress={() =>{}}
                />
              </View>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}