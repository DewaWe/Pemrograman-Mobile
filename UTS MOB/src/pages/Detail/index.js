import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Carousel from '../component/Carousel'
import { dummyData } from '../Detaildata/index'

const Detail = ({ navigation }) => {
    return (
        <View>
            <Carousel data={dummyData} />
        </View>
    )
}

export default Detail

const styles = StyleSheet.create({})
