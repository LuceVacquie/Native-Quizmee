import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const Box = ({backgroundColor, title}) => {
    return(
        <View style={styles({backgroundColor}).box}>
            <Text>{title}</Text>
        </View>
    )
}

export default Box;

const styles = ({backgroundColor}) => StyleSheet.create({
    box: {
        height: '20%',
        width: '50%',
        backgroundColor: backgroundColor,
    }
  });