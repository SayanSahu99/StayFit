
import React, { useEffect } from 'react'
import styles from "./style";
import {
  Keyboard,
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Platform,
  KeyboardAvoidingView
} from 'react-native';
import { Button, SocialIcon } from 'react-native-elements';
import { useSelector, useDispatch } from 'react-redux';
import { loginUserFacebook, loginUserGoogle, requestLogin } from '../../Redux/ActionCreaters/auth'
import Loader from '../../components/loading';


function Register(props) {
  // TODO: add firebase login function later

  useEffect(() => {
    return () => {
      if (isAuthenticated) {
        props.navigation.push('DetailsForm');
      }
    }
  }, []);

  const isLoading = useSelector(state => state.auth.isLoading);
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  return (
    <View style={styles.containerView}>

      <Loader loading={isLoading} />
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
              <TextInput placeholder="Password" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} secureTextEntry={true} />
              <Button
                buttonStyle={styles.loginButton}
                onPress={() => { }}
                title="SIGN UP"
              />
              <View style={styles.socialView}>
                <View style={styles.socialTextView}><Text style={{ fontSize: 15 }}>Or connect with</Text></View>

                <View style={styles.socialButtonView}>
                  <SocialIcon
                    type='facebook'
                    button
                    title='Sign In With Facebook'
                    onPress={() => { 
                      dispatch(requestLogin());
                      dispatch(loginUserFacebook());
                    }}
                  />
                  <SocialIcon
                    type='google'
                    button
                    title='Sign In With Google'
                    onPress={() => {
                      dispatch(requestLogin());
                      dispatch(loginUserGoogle());
                    }}
                  />
                </View>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
        <View style={{alignSelf:"stretch"}}></View>
      </KeyboardAvoidingView>
    </View>
  );
}

export default Register;
