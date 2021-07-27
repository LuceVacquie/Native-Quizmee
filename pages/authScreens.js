import React, { useContext } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { AuthContext } from '../context';

export const SignIn = ({navigation}) => {
    const { signIn } = useContext(AuthContext)
    return (
        <View style={styles.container}>
            {/* Create a form to sign in */}
            <Button title='Sign In' onPress={() => signIn()}/>
            <Text>or</Text>
            <Button title='Sign Up' onPress={() => navigation.push('SignUp')}/>
        </View>
    )
}

export const SignUp = () => {

    const { signUp } = useContext(AuthContext)

    return (
        <View style={styles.container}>
            {/* Create a form to sign up */}
            <Button title='Sign up' onPress={() => signUp()}/>
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
  });