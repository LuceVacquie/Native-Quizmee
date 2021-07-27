import React from 'react'
import { StyleSheet, Text, View, Linking, Button} from 'react-native'


const TopBar = ({goBack, isHomePage}) => {

    return(
        <View style={styles.container}>
            {isHomePage && 
                <Button title='Back' onPress={() => goBack}/>
            }
            <Text 
                onPress={() => Linking.openURL('/')} 
                style={styles.text}>
                    Quizmee
            </Text>
        </View>
    )
}

export default TopBar;

const styles = StyleSheet.create({
    container: {
        height: '10%',
        width: '100%',
        flexDirection: 'row',
        backgroundColor: '#E847AE',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: 'whitesmoke',
        fontFamily: 'Comfortaa_700Bold',
        fontSize: 24,
    }
});