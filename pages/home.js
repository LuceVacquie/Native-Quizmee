import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import Box from '../components/box'
import { theme } from '../theme'

const Home = () => {
    return (
        <View style={styles.container}>
            <Box backgroundColor={theme.colors.green} title='General Knowledge'/>
            <Box backgroundColor={theme.colors.orange} title='Choose a category'/>
            <Box backgroundColor={theme.colors.yellow} title='Party Quiz'/>
            <Box backgroundColor={theme.colors.purple} title='Dual Quiz'/>
        </View>
    )
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3B27BA',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
});