import React, { useContext } from 'react'
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native'
import { AuthContext } from '../context';

export const SignIn = ({navigation}) => {

    const [data, setData] = useState({
        username: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true
    })

    const { signIn } = useContext(AuthContext)

    const textInputChange = (val) => {
        if(val.length !== 0){
            setData({
                ...data,
                username: val,
                check_textInputChange: true
            })
        } else {
            setData({
                ...data,
                username: val,
                check_textInputChange: false
            })
        }
    }

    const handlePasswordChange = (val) => {
        setData({
            ...data,
            password: val
        })
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        })
    }

    const loginHandle = (username, password) => {
        signIn(username, password)
    }

    return (
        <View style={styles.container}>
            <Text>Login into your account</Text>
            <TextInput
                placeholder='Username'
                placeholderTextColor='#666666'
                onChangeText={val => textInputChange(val)}
                style={styles.input}
            />
            <TextInput
                placeholder='Password'
                placeholderTextColor='#666666'
                onChangeText={val => handlePasswordChange(val)}
                secureTextEntry={data.secureTextEntry ? true : false}
                style={styles.input}
            />
            <Button title='Sign In' onPress={() => {loginHandle(data.username, data.password)}}/>
            
            <Text>or</Text>
            <Button title='Sign Up' onPress={() => navigation.push('SignUp')}/>
        </View>
    )
}

export const SignUp = ({navigation}) => {

    const [data, setData] = useState({
        username: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true
    })

    const { signUp } = useContext(AuthContext)

    const textInputChange = (val) => {
        if(val.length !== 0){
            setData({
                ...data,
                username: val,
                check_textInputChange: true
            })
        } else {
            setData({
                ...data,
                username: val,
                check_textInputChange: false
            })
        }
    }

    const handlePasswordChange = (val) => {
        setData({
            ...data,
            password: val
        })
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        })
    }

    const loginHandle = (username, password) => {
        signIn(username, password)
    }

    return (
        <View style={styles.container}>
            <Text>Create an account</Text>
            <TextInput
                placeholder='Username'
                placeholderTextColor='#666666'
                onChangeText={val => textInputChange(val)}
                style={styles.input}
            />
            <TextInput
                placeholder='Password'
                placeholderTextColor='#666666'
                onChangeText={val => handlePasswordChange(val)}
                secureTextEntry={data.secureTextEntry ? true : false}
                style={styles.input}
            />
            <Button title='Sign up' onPress={() => signUp()}/>

            <Text>or</Text>

            <Button title='Sign In' onPress={() => navigation.push('SignIn')}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3B27BA',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        paddingLeft: 10,
        color: 'whitesmoke'
    }
  });