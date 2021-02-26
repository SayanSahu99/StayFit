import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'
import { Image, Text, Button } from 'react-native-elements'
import { useTheme } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import Spinner from '../../components/activityIndicator';
import { Picker } from '@react-native-picker/picker';
import { Table, Row, Rows } from 'react-native-table-component';

export default function FoodDetails({ route, navigation }) {

    const { colors } = useTheme();
    const { food, measures } = route.params;
    const width = Dimensions.get('window').width;
    const height = Dimensions.get('window').height;
    const [amount, setAmount] = useState(1);
    const [portion, setPortion] = useState(measures[0].label);
    const [title, onChangeTitle] = React.useState(route.params.title);
    const [weight, setWeight] = React.useState(amount * measures[0].weight);
    const [table, setTable] = useState({
        tableHead: ['Nutrient', 'Content'],
        tableData: [
            ['Protein', Math.ceil(food.nutrients.PROCNT * (weight / 100)) + " g"],
            ['Carbohydrates', Math.ceil(food.nutrients.CHOCDF * (weight / 100)) + " g"],
            ['Fat', Math.ceil(food.nutrients.FAT * (weight / 100)) + " g"],
            ['Fiber', Math.ceil(food.nutrients.FIBTG * (weight / 100)) + " g"]
        ]
    })


    useEffect(() => {
        onChangeTitle(food.label);
    })

    useEffect(() => {
        setTable(
            {
                tableHead: ['Nutrient', 'Content'],
                tableData: [
                    ['Protein', Math.ceil(food.nutrients.PROCNT * (weight / 100)) + " g"],
                    ['Carbohydrates', Math.ceil(food.nutrients.CHOCDF * (weight / 100)) + " g"],
                    ['Fat', Math.ceil(food.nutrients.FAT * (weight / 100)) + " g"],
                    ['Fiber', Math.ceil(food.nutrients.FIBTG * (weight / 100)) + " g"]
                ]
            }
        );
    }, [weight])

    useEffect(() => {
        const result = measures.filter((m) => m.label == portion)[0];
        setWeight(amount * result.weight);
    }, [amount, portion])

    // Change the title of the screen
    React.useLayoutEffect(() => {
        navigation.setOptions({
            title: title === '' ? 'Add Food' : title,
        });
    }, [navigation, title]);


    // Food quantity picker array
    const quantity = [];
    for (var i = 0; i < 24; i++) {
        quantity.push(
            <Picker.Item label={i.toString()} value={i} key={i} />
        );
    }

    // Food Portion Size picker array
    const sizing = [];
    for (var i = 0; i < measures.length; i++) {
        sizing.push(
            <Picker.Item label={measures[i].label} value={measures[i].label} key={i} />
        );
    }


    return (
        <View style={styles.container}>
            <ScrollView >
                {
                    food.image ?
                        <Image
                            source={{ uri: food.image }}
                            style={{ width: width, height: height / 4 }}
                            PlaceholderContent={<Spinner />}
                        />
                        :
                        <Image
                            source={require('./../../../assets/default.jpg')}
                            style={{ width: width, height: height / 4 }}
                            PlaceholderContent={<Spinner />}
                        />
                }
                <View style={{marginBottom:20}}>
                    <Text style={{fontSize:18, fontWeight:"bold"}}>{Math.ceil(food.nutrients.ENERC_KCAL * (weight / 100))} cal - {Math.ceil(weight)} g</Text>
                </View>
                <View>
                    <Text h4>Pick your quantity</Text>
                </View>
                <View style={{ flexDirection: "row", marginBottom:20 }}>
                    <Picker
                        selectedValue={amount}
                        style={{ height: 50, width: width / 4 }}
                        onValueChange={(itemValue, itemIndex) => {
                            setAmount(itemValue);
                        }
                        }>
                        {quantity}
                    </Picker>

                    <Picker
                        selectedValue={portion}
                        style={{ height: 50, width: width * 0.70 }}
                        onValueChange={(itemValue, itemIndex) => {
                            setPortion(itemValue);
                        }
                        }>
                        {sizing}
                    </Picker>
                </View>
                <View style={{marginBottom: 10}}>
                    <Text h4>Nutrient Content</Text>
                </View>
                <View>
                    <Table borderStyle={styles.tableBorder}>
                        <Row data={table.tableHead} style={styles.head} textStyle={styles.text} />
                        <Rows data={table.tableData} textStyle={styles.text} />
                    </Table>
                </View>
            </ScrollView>
            <View
                style={{backgroundColor: colors.primary}}
            >
            <Button
                title="ADD"
                onPress={() => props.navigation.push("Main")}
                titleStyle={{fontSize:20, alignSelf:"center"}}
                onPress={()=>{navigation.navigate("Nutrition")}}
            />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15
    },

    head: { height: 40, backgroundColor: '#f1f8ff' },
    text: { margin: 6, fontSize:18 },
    tableBorder: {
        borderWidth: 2, 
        borderColor: '#c8e1ff'
    }

});
