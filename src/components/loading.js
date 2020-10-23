import React from 'react';
import {
  StyleSheet,
  View,
  Modal,
  ActivityIndicator
} from 'react-native';
import {Text} from 'react-native-elements';
import { useTheme } from '@react-navigation/native';

const Loader = props => {
  const {
    loading,
    ...attributes
  } = props;

  const { colors } = useTheme();

  return (
    <Modal
      transparent={true}
      animationType={'none'}
      visible={loading}
      onRequestClose={() => {console.log('close modal')}}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                <ActivityIndicator
                    animating={loading}
                    size="large" animating={true} 
                    color={colors.primary} />
                <Text style={styles.modalText}>Please Wait...</Text>
                </View>
            </View>
      
      
    </Modal>
  )
}

const styles = StyleSheet.create({
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    flexDirection:'row'
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#00000040',
    marginTop: 22
  },
  modalText: {
    marginLeft: 15,
    textAlign: "center",
    justifyContent: 'space-around'
  },
  modalBackground: {
    backgroundColor: '#00000040'
  },
});

export default Loader;