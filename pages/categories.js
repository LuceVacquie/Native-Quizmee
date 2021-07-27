import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { theme } from '../theme'

const Categories = () => {
    return (
        <View style={styles.container}>
            <Text>Categories</Text>
        </View>
    )
}

export default Categories;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.orange,
        alignItems: 'center',
        justifyContent: 'center',
    },
  });