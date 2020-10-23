
import React, { useEffect } from 'react'
import styles from "./style";
import {Keyboard, Text, View, TextInput, TouchableWithoutFeedback, Platform, KeyboardAvoidingView } from 'react-native';
import { Button, SocialIcon } from 'react-native-elements';
import { connect } from 'react-redux';
import {loginUser} from '../../Redux/ActionCreaters/auth'
import Loader from '../../components/loading';

const mapStateToProps = state => {
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = dispatch => ({
  loginUser: () => dispatch(loginUser())
})


function Register(props) {
  // TODO: add firebase login function later
  
  useEffect(() => {
    return () => {
      if(props.auth.isAuthenticated) {
        props.navigation.navigate('SignOut', {screen: 'Home'});
      }
    }
  }, []);


  return (
    <View style={styles.containerView}>
      
      <Loader loading={props.auth.isLoading} />
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
                title="SIGN UP"
              />
              <View style={styles.socialView}>
                <View style={styles.socialTextView}><Text style={{fontSize: 15}}>Or connect with</Text></View>
                
                <View style={styles.socialButtonView}>
                  <SocialIcon
                    type='facebook'
                    buttonStyle={styles.fbLoginButton}
                    onPress={() =>{}}
                  />
                  <SocialIcon
                    type='google'
                    buttonStyle={styles.fbLoginButton}
                    onPress={() => {props.loginUser();}}
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
    </View>
    );
  }

export default connect(mapStateToProps, mapDispatchToProps)(Register);
