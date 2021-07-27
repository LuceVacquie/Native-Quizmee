import React from 'react'
import { Linking } from 'react-native';
import { StyleSheet, Text, View } from 'react-native'


const TopBar = () => {
    return(
        <View style={styles.container}>
            <Text onPress={() => Linking.openURL('/')} style={styles.text}>Quizmee</Text>
        </View>
    )
}

export default TopBar;

const styles = StyleSheet.create({
    container: {
        height: '10%',
        width: '100%',
        backgroundColor: '#E847AE',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: 'whitesmoke'
    }
});