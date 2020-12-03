import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { IconHome, IconHomeAktif, IconDetail, IconDetailAktif, IconProfile, IconProfileAktif } from '../../assets'

const TabItem = ({ isFocused, onPress, onLongPress, label }) => {
    // const Icon = () => {
    //     if (label === "Home") return isFocused ? <IconHomeAktif/> : <IconHome/>

    //     if (label === "Detail") return isFocused ? <IconDetailAktif/> : <IconDetail/>

    //     if (label === "Profile") return isFocused ? <IconProfileAktif/> : <IconProfile/>

    //     return <IconHome/>
    // }
    return (
        <TouchableOpacity
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.container}
        >
            {/* <Icon/> */}
            <Text style={styles.text}>
                {label}
            </Text>
        </TouchableOpacity>
    )
}

export default TabItem

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    text: {
        fontSize: 13,
        color: '#000000'
    }

}
)
