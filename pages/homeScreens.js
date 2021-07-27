import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { theme } from '../theme'

export const GeneralKnowledge = () => {
    return (
        <View style={styles.container}>
            <Text>General Knowledge</Text>
        </View>
    )
}

export const Categories = ({route}) => {
    return (
        <View style={styles.container}>
            {route.params.name && <Text>{route.params.name}</Text>}
        </View>
    )
}

export const PartyQuiz = () => {
    return (
        <View style={styles.container}>
            <Text>Party Quiz</Text>
        </View>
    )
}

export const DualQuiz = () => {
    return (
        <View style={styles.container}>
            <Text>Dual Quiz</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.orange,
        alignItems: 'center',
        justifyContent: 'center',
    },
  });