import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { SearchBar, Text, ListItem } from 'react-native-elements'
import { useTheme } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import Spinner from '../../components/activityIndicator';

export default function SearchFood({ navigation }) {

    const { colors } = useTheme();
    const [search, updateSearch] = useState('');
    const [data, changeData] = useState(null);
    const [loading, setLoading] = useState(false);


    async function sendApiRequest(search) {
        setLoading(true);
        const APP_ID = process.env.EDAMAM_APP_ID;
        const APP_KEY = process.env.EDAMAM_APP_KEY;
        let response = await fetch(`https://api.edamam.com/api/food-database/v2/parser?nutrition-type=logging&ingr=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`);
        changeData(await response.json());
        setLoading(false);
        console.log(data);
    }

    const rendering = (data) => {
       return(
           <View style={styles.listView}>
               {
                   data.hints.map((item, i) => (
                    <ListItem key={i} onPress={() => navigation.navigate("FoodDetails", {food:item.food, measures:item.measures})} bottomDivider>
                      <ListItem.Content>
                        <ListItem.Title><Text style={styles.listText}>{item.food.label}</Text></ListItem.Title>
                        <ListItem.Subtitle><Text style={styles.listSubText}>{item.food.category}</Text></ListItem.Subtitle>
                      </ListItem.Content>
                      <ListItem.Chevron/>
                    </ListItem>
                  ))
               }
           </View>
       );
    }

    return (
        <View style={styles.container}>
            <SearchBar
                placeholder="Search Food..."
                onChangeText={search => updateSearch(search)}
                value={search}
                platform="android"
                round={true}
                containerStyle={{ borderWidth: 0.5, borderRadius: 30, backgroundColor: "#d3d3d3", borderColor: "#d3d3d3" }}
                onSubmitEditing={() => sendApiRequest(search)}
            />
            <ScrollView >
                { loading ? <View style={{justifyContent:"center", alignItems: 'center', flex:1}} ><Spinner /></View>: data ? rendering(data) : <View></View>}
               
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },

    listView:{
        marginTop: 20,
    },
    
    listText: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    
    listSubText: {
        fontSize: 14
    }

});
