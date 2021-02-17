import React from 'react'
import { View } from 'react-native'
import {ListItem, Text} from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome5';
import firebase from 'firebase';
import { useSelector } from 'react-redux';
import styles from './style'
import Spinner from '../../components/activityIndicator';

export default function Home({ navigation }) {
  // TODO: add firebase sign-out and user info function later

  const isLoading = useSelector(state => state.auth.isLoading);

  const list = [
    {
      title: 'Nutrition',
      icon: 'apple-alt',
      subtitle: '1000 cal / 2200 cal'
    },
    {
      title: 'Water',
      icon: 'glass-whiskey',
      subtitle: '2/8'
    },
    ];
  
  return (
    <View style={styles.containerView}>
      {isLoading ? <Spinner /> : (
        <View>
          <View>
            <View style={styles.TextView}> 
              <Text h1 style={styles.greetingText}>Hello Name</Text>
              <Text h4>Eat the right amount of food and stay hydrated throughout the day</Text>
            </View>
          </View>
          <View style={styles.listView}>
            {
              list.map((item, i) => (
                <ListItem key={i} onPress={() => {if(i==1) navigation.push("Water") }} bottomDivider>
                  <Icon
                      name={item.icon}
                      size={30}
                      color='black'
                  />
                  <ListItem.Content>
                    <ListItem.Title><Text style={styles.listText}>{item.title}</Text></ListItem.Title>
                    <ListItem.Subtitle><Text style={styles.listSubText}>{item.subtitle}</Text></ListItem.Subtitle>
                  </ListItem.Content>
                  <ListItem.Chevron />
                </ListItem>
              ))
            }
          </View>
        </View>
      )}
    </View>

  )
}
