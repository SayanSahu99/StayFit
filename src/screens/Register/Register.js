
import React from 'react'
import styles from "./style";
import {Keyboard, Text, View, TextInput, TouchableWithoutFeedback, Platform, KeyboardAvoidingView } from 'react-native';
import { Button, SocialIcon } from 'react-native-elements';
import { connect } from 'react-redux';
import {loginUser} from '../../Redux/ActionCreaters/auth'
import Spinner from '../../components/activityIndicator';

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    isAuthenticated: state.isAuthenticated,
    errMess: state.errMess
  }
}

const mapDispatchToProps = dispatch => ({
  loginUser: () => dispatch(loginUser())
})

class Register extends React.Component {
  // TODO: add firebase login function later

  constructor(props) {
    super(props);

    if(props.isAuthenticated) {
      props.navigation.navigate('SignOut');
    }
  }

  render() {
  return (
    <View style={styles.containerView}>
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
                    onPress={() => {this.props.loginUser();}}
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
}
export default connect(mapStateToProps, mapDispatchToProps)(Register);
