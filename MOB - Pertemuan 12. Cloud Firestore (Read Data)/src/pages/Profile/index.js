import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import { Profilelogo } from '../../assets'

const Profile = ({ navigation }) => {
    const handleGoTo = (screen) => {
        navigation.navigate(screen)
    }


    return (
        <View style={styles.container}>
                <Image source={Profilelogo} style={styles.logo} />
                <Text style={{ fontSize: 40, fontWeight: "bold", paddingVertical: 20, paddingTop: 30, alignSelf: 'center' }}>Hello!</Text>
                <Text style={{ fontSize: 16, color: 'grey', textAlign: 'center', marginHorizontal: 50 }}>I Dewa Nyoman Gede Pramana Putra - 1801010042</Text>
                <Text style={{ fontSize: 16, color: 'grey', textAlign: 'center' }}>Sistem Informasi 2018</Text>
                <Text style={{ fontSize: 16, color: 'grey', textAlign: 'center', fontWeight: "bold", marginTop: 20 }}>UTS Pemrograman Mobile</Text>

                <TouchableOpacity onPress={() => handleGoTo('HomeLogin')} style={{
                    width: 200, backgroundColor: '#00C2CB', padding: 10,
                    alignSelf: 'center', justifyContent: 'center', borderRadius: 40, marginTop: 30
                }}>
                    <Text style={{ textAlign: 'center', color: '#fff', fontSize: 16 }}>Log Out</Text>
                </TouchableOpacity>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 300,
        height: 300,
        resizeMode: "contain",
        alignSelf: 'center',
    }
})
