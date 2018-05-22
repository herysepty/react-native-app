import React, { Component } from 'react'
import { Alert, View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import { Actions } from 'react-native-router-flux';
import { StackNavigator } from 'react-navigation';

class Login extends Component {
    state = {
        email: '',
        password: ''
    }
    handleEmail = (text) => {
    this.setState({ email: text })
}

handlePassword = (text) => {
    this.setState({ password: text })
}

login = (email, pass) => {
    const { navigate } = this.props.navigation;
        if (email == '' || email == '') {
            Alert.alert(
                'Error',
                'Email dan password kosong harap diisi',
                [
                    {text: 'OK', onPress: () => console.log('Ok')},
                    { cancelable: false }
                ]
            )
        } else {
            Alert.alert(
                'Anda yang akan masuk ?',
                'Email : ' + email + ' Password: ' + pass,
                [
                    {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
                    {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                    {text: 'OK', onPress: () => this.props.navigation.navigate('SecondScreen')},
                    { cancelable: false }
                ]
            )
        }
}

render(){
        return (
        <View style = {styles.container}>
            <TextInput style = {styles.input}
                       underlineColorAndroid = "transparent"
                       placeholder = "Email"
                       placeholderTextColor = "#9a73ef"
                       autoCapitalize = "none"
                       onChangeText = {this.handleEmail}/>

            <TextInput style = {styles.input}
                       underlineColorAndroid = "transparent"
                       placeholder = "Password"
                       placeholderTextColor = "#9a73ef"
                       autoCapitalize = "none"
                       onChangeText = {this.handlePassword}/>

            <TouchableOpacity
                style = {styles.submitButton}
                onPress = {
                    () => this.login(this.state.email, this.state.password)
                }>
                <Text style = {styles.submitButtonText}> Submit </Text>
            </TouchableOpacity>
        </View>
    )
}
}
export default Login

const styles = StyleSheet.create({
    container: {
        paddingTop: 23
    },
    input: {
        margin: 15,
        height: 40,
        borderColor: '#02f44d',
        borderWidth: 1
    },
    submitButton: {
        backgroundColor: '#02f44d',
        padding: 10,
        margin: 15,
        height: 40,
    },
    submitButtonText:{
        color: 'white'
    }
})