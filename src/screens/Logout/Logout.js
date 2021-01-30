import React, {useState} from 'react'
import { View, Text, Button } from 'react-native'
import firebase from 'firebase';
import Modal from 'react-native-modal';
import { useSelector, useDispatch } from 'react-redux';
import styles from './style'
import { logoutError, receiveLogout, requestLogout } from '../../Redux/ActionCreaters/auth'
import Spinner from '../../components/activityIndicator';

export default function Logout({ navigation }) {

  const isLoading = useSelector(state => state.auth.isLoading);
  const [isModalVisible, setModalVisible] = useState(true);
  const dispatch = useDispatch();

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={styles.containerView}>
      {isLoading ? <Spinner /> : (
        <View>

        <Modal isVisible={isModalVisible}>
        <View style={{flex: 1}}>
            <Text>Logout?</Text>

            <Button title="NO" onPress={toggleModal} />
            <Button title="YES" onPress={
                () => {
                    dispatch(requestLogout());
                    firebase.auth().signOut().then(() => {
                      dispatch(receiveLogout());
                      console.log("user signed out");
                      navigation.navigate('AuthNavigator');
                    }).catch(function (error) {
                      // An error happened.
                      console.log(error);
                      dispatch(logoutError(error));
                    });
                  }
            } />
        </View>
        </Modal>
        </View>
      )}
    </View>

  )
}
