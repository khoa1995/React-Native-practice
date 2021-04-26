import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default class Box extends Component {
    render() {
        return (
            <View style={styles.blockChildBlue}>
                <Text>Box</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    blockChildBlue: {
        flex: 1,
        backgroundColor: '#4f82c0',
        borderRadius: 20,
        marginHorizontal: 20,
        alignItems:'center',
        justifyContent: 'center'
    },
})
