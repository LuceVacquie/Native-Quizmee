import React, {useContext} from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { AuthContext } from '../context';

const Profile = () => {

    const { signOut } = useContext(AuthContext) 

    return (
        <View style={styles.container}>
            <Text>My profile</Text>
            <Button title='Sign out' onPress={() => signOut()} />
        </View>
    )
}

export default Profile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3B27BA',
        alignItems: 'center',
        justifyContent: 'center',
    },
  });