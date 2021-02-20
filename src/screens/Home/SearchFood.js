import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { SearchBar } from 'react-native-elements'
import { useSelector } from 'react-redux';
import { useTheme } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';

export default function SearchFood({ navigation }) {

    const { colors } = useTheme();
    const [search, updateSearch] = useState('');

    return (
        <ScrollView style={styles.container}>
            <SearchBar
                placeholder="Search Food..."
                onChangeText={search => updateSearch(search)}
                value={search}
                platform="android"
                round={true}
            />

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding:10
    },

});
