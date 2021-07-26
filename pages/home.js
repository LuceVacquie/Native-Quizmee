import React, { FC } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import Box from '../components/box'

const Home = () => {
    return (
        <View style={styles.container}>
            <Box backgroundColor='red' title='General Knowledge'/>
            <Box backgroundColor='blue' title='Choose a category'/>
        </View>
    )
}

export default Home;

const styles = StyleSheet.create({
    container: {
      width: '100%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
});