import React from 'react'
import { StyleSheet, View, Button } from 'react-native'
import Box from '../components/box'
import { theme } from '../theme'

const Home = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Box backgroundColor={theme.colors.green} title='General Knowledge'/>
            {/* <Box backgroundColor={theme.colors.orange} navigation={navigation} pushTo='Categories' title='Choose a category'/> */}
            <Button title='Categories' onPress={() => navigation.push('Categories', {name: 'Choose a category'})}/>
            <Box backgroundColor={theme.colors.yellow} title='Party Quiz'/>
            <Box backgroundColor={theme.colors.purple} title='Dual Quiz'/>
        </View>
    )
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.blue,
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
});