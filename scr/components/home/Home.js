import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';

const Home = () => {
    const goToAbout = () => {
        Actions.about()
    };
    const goToList = () => {
        Actions.list()
    };
    return (
        <TouchableOpacity style = {{ margin: 128 }}>
            <Text style = {styles.text} onPress = {goToAbout}>About!</Text>
            <Text style = {styles.text} onPress = {goToList}>List View</Text>
        </TouchableOpacity>
    )
};
export default Home

const styles = StyleSheet.create ({
    container: {
        alignItems: 'center',
    }
})