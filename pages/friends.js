import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const Friends = () => {
    return (
        <View style={styles.container}>
            <Text>My Friends</Text>
        </View>
    )
}

export default Friends;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3B27BA',
        alignItems: 'center',
        justifyContent: 'center',
    },
  });