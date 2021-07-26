import React from 'React'
import { StyleSheet, Text, View } from 'react-native'


const TopBar = () => {
    return(
        <View style={styles.container}>
            <a href='/'>Quizmee</a>
        </View>
    )
}

export default TopBar;

const styles = StyleSheet.create({
    container: {
        height: '5%',
        width: '100%',
        backgroundColor: '#E847AE',
        alignItems: 'center',
        justifyContent: 'center',
    },
    link: {
        textDecoration: 'none',
    }
});