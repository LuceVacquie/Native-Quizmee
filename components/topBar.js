import React from 'React'
import { StyleSheet, Text, View, Pressable } from 'react-native'


const TopBar = ({handleOnPress}) => {
    return(
        <View>
            <Pressable onPress={handleOnPress}>
                <Text>QuizzME</Text>
            </Pressable>
        </View>
    )
}

export default TopBar;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});