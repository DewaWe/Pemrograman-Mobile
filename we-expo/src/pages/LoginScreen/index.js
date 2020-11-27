import React from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

const LoginScreen = ({ navigation }) => {
    const handleGoTo = (screen) => {
        navigation.navigate(screen)
    }
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 25, marginTop: 20 }}>Welcome Back!</Text>
            <Text style={{ fontSize: 16, color: 'gray', marginTop: 20 }}>Sign In to continue</Text>

            <TextInput
                style={{
                    marginTop: 40, borderBottomColor: '#ddd',
                    borderBottomWidth: 1, paddingBottom: 20
                }}
                placeholder="username"
            />

            <TextInput
                style={{
                    marginTop: 40, borderBottomColor: '#ddd',
                    borderBottomWidth: 1, paddingBottom: 20
                }}
                placeholder="password"
                secureTextEntry={true}
            />

            <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 40 }}>
                <TouchableOpacity onPress={() => handleGoTo('MainApp')} style={{
                    width: 200, backgroundColor: '#00C2CB', padding: 10,
                    alignItems: 'center', justifyContent: 'center', borderRadius: 40, marginTop: 30
                }}>
                    <Text style={{ textAlign: 'center', color: '#fff', fontSize: 16 }}>Login Now</Text>
                </TouchableOpacity>

                <Text style={{ marginTop: 20 }}>Forgot Password ?</Text>

                <View style={{ flexDirection: 'row', marginTop: 60 }}>

                    <View style={{ height: 40, width: 40, borderRadius: 40 / 2, backgroundColor: '#3f51b5', alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#FFF' }}>f</Text>
                    </View>

                    <View style={{ height: 40, width: 40, borderRadius: 40 / 2, backgroundColor: '#f44366', marginHorizontal: 10, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#FFF' }}>G</Text>
                    </View>

                    <View style={{ height: 40, width: 40, borderRadius: 40 / 2, backgroundColor: '#1565c0', alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#FFF' }}>in</Text>
                    </View>

                </View>

                <View style={{ flexDirection: 'row', marginTop: 40 }}>
                    <Text style={{ color: 'gray' }}>Don't have an account?</Text>
                    <Text style={{ fontWeight: 'bold' }}> Sign Up</Text>
                </View>

            </View>
        </View>
    )
}


export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
        marginTop: 20
    }
})
