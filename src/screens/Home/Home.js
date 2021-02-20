import React, { useState } from 'react'
import { View } from 'react-native'
import { ListItem, Text, BottomSheet } from 'react-native-elements'
import { Icon } from 'react-native-elements'
import { useSelector } from 'react-redux';
import styles from './style';
import { useTheme } from '@react-navigation/native';
import Spinner from '../../components/activityIndicator';

export default function Home({ navigation }) {
  // TODO: add firebase sign-out and user info function later
  const { colors } = useTheme();
  const isLoading = useSelector(state => state.auth.isLoading);
  const [isVisible, setIsVisible] = useState(false);

  const bottomSheetList = [
    {
      title: 'Breakfast',
      subtitle: '100 / 700 Cal'
    },
    {
      title: 'Morning Snacks',
      subtitle: '100 / 700 Cal',
      onPress: () => {
        setIsVisible(false);
        navigation.navigate("Nutrition")
      },
    },
    {
      title: 'Lunch',
      subtitle: '100 / 700 Cal',
      onPress: () => {
        setIsVisible(false);
        navigation.navigate("Nutrition")
      },
    },
    {
      title: 'Evening Snacks',
      subtitle: '100 / 700 Cal',
      onPress: () => {
        setIsVisible(false);
        navigation.navigate("Nutrition")
      },
    },
    {
      title: 'Dinner',
      subtitle: '100 / 700 Cal',
      onPress: () => {
        setIsVisible(false);
        navigation.navigate("Nutrition")
      },
    },
    {
      title: 'Cancel',
      containerStyle: { backgroundColor: 'red' },
      titleStyle: { color: 'white' },
      onPress: () => setIsVisible(false),
    },
  ];

  const list = [
    {
      title: 'Nutrition',
      icon: 'cutlery',
      subtitle: '1000 cal / 2200 cal',
      onPress: () => { navigation.navigate("Nutrition") },
      btnOnPress: () => { setIsVisible(true) }
    },
    {
      title: 'Water',
      icon: 'tint',
      subtitle: '2/8',
      onPress: () => navigation.navigate("Water"),
      btnOnPress: () => { }
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
                <ListItem key={i} onPress={item.onPress} bottomDivider>
                  <Icon
                    name={item.icon}
                    size={30}
                    color='black'
                    type='font-awesome'
                  />
                  <ListItem.Content>
                    <ListItem.Title><Text style={styles.listText}>{item.title}</Text></ListItem.Title>
                    <ListItem.Subtitle><Text style={styles.listSubText}>{item.subtitle}</Text></ListItem.Subtitle>
                  </ListItem.Content>
                  <Icon
                    size={30}
                    name='plus'
                    type='font-awesome'
                    color={colors.primary}
                    onPress={item.btnOnPress}
                  />
                </ListItem>
              ))
            }
          </View>

          <View style={{ height: 100 }}>
            <Text>
              <BottomSheet
                isVisible={isVisible}
                containerStyle={{ backgroundColor: 'rgba(0.5, 0.25, 0, 0.2)' }}
              >
                {bottomSheetList.map((l, i) => (
                  <ListItem key={i} containerStyle={l.containerStyle} onPress={l.onPress} bottomDivider>
                    <ListItem.Content>
                      <View>
                        <ListItem.Title style={l.titleStyle}><Text style={{ fontWeight: 'bold' }}>{l.title}</Text></ListItem.Title>
                      </View>
                    </ListItem.Content>
                    {l.subtitle ? <ListItem.Subtitle><Text>{l.subtitle}</Text></ListItem.Subtitle> : <View></View>}
                    <ListItem.Chevron />
                  </ListItem>
                ))}
              </BottomSheet>;
            </Text>
          </View>
        </View>
      )}
    </View>

  )
}
