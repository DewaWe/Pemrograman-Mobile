import React, {useState} from 'react'
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity} from 'react-native'

const Post = ({navigation}) => {
const image = { uri: 'https://sujeitoprogramador.com/wp-content/uploads/2019/03/como.png'}

    return (
        <View style={styles.container}>
            <View style={styles.postHeader}>   
                <Image
                    style={styles.imgPerfil}
                    source={image}
                />
                <Text style={styles.username}>
                    Henrique Dias
                </Text>
            </View>

            <ImageBackground
                source={image}
                style={styles.image}
                imageStyle={{width: '100%', height: 300}}>

                <TouchableOpacity style={{width: 125, backgroundColor: '#00C2CB', padding: 10,  borderRadius: 40, position: 'absolute', right: 12, top: 310}}>
                    <Text style={{ textAlign: 'center', color: '#fff', fontSize: 16 }}>Download</Text>
                </TouchableOpacity>
            </ImageBackground>
            
        </View>
    )
}

export default Post

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#fff',
        marginTop: 25
    },
    image: {
        height: 380,
        justifyContent: 'flex-end',
    },
    imgPerfil: {
        width: 40,
        height: 40,
        borderRadius: 25,
        marginLeft: 10
    },
    username: {
        color: '#000',
        fontWeight: 'bold',
        marginLeft: 10
    },
    postHeader: {
        width: '100%',
        height: 55,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 150
    },
})
