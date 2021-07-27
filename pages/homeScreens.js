import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { theme } from '../theme'
import Box from '../components/box'

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
            <Box backgroundColor={theme.colors.purple} title='Sciences'/>
            <Box backgroundColor={theme.colors.pink} title='History'/>
            <Box backgroundColor={theme.colors.green} title='Geography'/>
            <Box backgroundColor={theme.colors.yellow} title='Culture'/>
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
        justifyContent: 'space-evenly',
    },
  });