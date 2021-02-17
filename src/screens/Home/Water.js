import React, { useState } from 'react';
import { View, StyleSheet, Dimensions, Platform } from 'react-native';
import { Text, Image, Divider } from 'react-native-elements';
import Constants from 'expo-constants';
import ProgressBar from 'react-native-progress/Bar';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useTheme } from '@react-navigation/native';
import { BarChart, LineChart, ProgressChart } from "expo-chart-kit"



const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Water = () => {

    
    const { colors } = useTheme();

    const [numGlasses, changeGlasses] = useState(0);

    
    const data = {
      labels: ["January", "February", "March", "April", "May", "June"],
      datasets: [
        {
          data: [20, 45, 28, 80, 99, 43],
        }
      ],
    };

    const chartConfig={
      backgroundColor:"transparent",
      backgroundGradientFrom: '#54544e',
      backgroundGradientTo: '#ffffff',
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16
      }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}><Text h4>{numGlasses}</Text> / 8 glasses</Text>
            <View style={styles.progressBar}>
                <ProgressBar progress={numGlasses/8} width={width*0.9} color={colors.primary} />
            </View>

            <View style={styles.waterSelector}>
                
                <View style={styles.controls}>
                  {numGlasses > 0 ? 
                  <Icon
                    name="minus-circle"
                    size={30}
                    color={colors.primary}
                    onPress={()=>changeGlasses(numGlasses-1)}
                  /> : 
                  <Icon
                    name="minus-circle"
                    size={30}
                    color="#AAAAAA"  
                  />}
                </View>

                <Image
                    source={require('./../../../assets/water.png')}
                    style={{ width: 100, height: 100 }}
                />


                <View style={styles.controls}>
                  {numGlasses < 8 ? 
                  <Icon
                    name="plus-circle"
                    size={30}
                    color={colors.primary}
                    onPress={()=>changeGlasses(numGlasses+1)}
                  /> : 
                  <Icon
                    name="plus-circle"
                    size={30}
                    color="#AAAAAA"  
                  />}
                </View>
                    

            </View>

            <View style={styles.waterText}>
                <Text h4 h4Style={{fontSize: 20}}> 1 Glass (250  ml)</Text>
            </View>

            <Divider style={styles.Divider} />
            <Text h4 h4Style={{fontSize: 20}}> Water Intake </Text>
            <Divider style={styles.Divider} />
            <View>
            <ProgressChart
              data={[0,0,0,0,0,0,0]}
              width={Dimensions.get('window').width}
              height={260}
              radius={0}
              strokeWidth={60}
              hideLegend={false}
              chartConfig={{
                backgroundColor: '#1cc910',
                backgroundGradientFrom: '#eff3ff',
                backgroundGradientTo: '#efefef',
                decimalPlaces: 2,
                color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              }}
              style={{
                marginVertical: 10,
                borderRadius: 16,
              }}
            />
            </View>
            <Divider style={styles.Divider} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: Constants.statusBarHeight,
      backgroundColor: '#ecf0f1',
      padding: 10,
    },

    progressBar:{
        marginHorizontal:10
    },

    text:{
        alignSelf: 'flex-start',
        fontSize: 20,
        marginLeft: 10,
        marginBottom:5
    },

    waterSelector: {
        alignSelf: 'center',
        paddingTop: width*0.1,
        paddingBottom: 15,
        flexDirection: 'row'
    },

    Divider:{
        height: 5,
        marginTop: 10,
        marginBottom: 10,
    },

    controls:{
        alignSelf:"center",
        marginHorizontal: 20
    },
    waterText:{
        alignSelf: "center",
        marginBottom: 40
    },
    
});


export default Water;
