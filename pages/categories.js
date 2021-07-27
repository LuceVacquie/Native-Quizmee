import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { theme } from '../theme'

const Categories = ({route}) => {
    return (
        <View style={styles.container}>
            <Text>Categories</Text>
            {route.params.name && <Text>{route.params.name}</Text>}
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