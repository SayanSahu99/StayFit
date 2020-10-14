import React from 'react'
import Onboarding from 'react-native-onboarding-swiper';
import { Button, Image, TouchableOpacity, View, Text } from 'react-native';

const OnBoarding = ({navigation}) => {

  const Done = ({ ...props }) => (
     <View style={{margin:15}}>
        <TouchableOpacity      
          {...props}
        >
          <Text style={{color:'white', fontSize:16}}>Done</Text>
        </TouchableOpacity>
      </View>
    
  );

  const resetStack = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Welcome' }]
  })
  }

  return (
      <Onboarding
        onSkip={resetStack}
        onDone={resetStack}
        DoneButtonComponent={Done}
        pages={[
          {
            backgroundColor: '#757ce8',
            image: <Image source={require('./../../../assets/onBoard1.png')} />,
            title: 'Welcome to Stay Fit',
            subtitle: 'Your complete guide to nutrition, health and fitness',
          },
          {
            backgroundColor: '#ff7961',
            image: <Image source={require('./../../../assets/onBoard2.png')} />,
            title: 'Diet',
            subtitle: 'Easily Track your diet, water and exercise.',
          },
          {
            backgroundColor: '#6fbf73',
            image: <Image source={require('./../../../assets/onBoard3.png')} />,
            title: 'Goals',
            subtitle: 'Keep your goals in view and track your progress',
          }
        ]}
    />
  )
}

export default OnBoarding;
