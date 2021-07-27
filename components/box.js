import React from 'react'
import { StyleSheet, Text, View, Linking } from 'react-native'


const Box = ({backgroundColor, title, url}) => {
    return(
        <View style={styles({backgroundColor}).box}>
            <Text 
                onPress={() => Linking.openURL(url)} 
                style={styles.text}>
                    {title}
            </Text>
        </View>
    )
}

export default Box;

const styles = ({backgroundColor}) => StyleSheet.create({
    box: {
        height: '20%',
        width: '50%',
        backgroundColor: backgroundColor,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    text: {
        fontFamily: 'Comfortaa_600SemiBold',
        fontSize: 16,
    }
  });