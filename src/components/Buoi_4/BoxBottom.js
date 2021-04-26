import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Box from './Box'

export default class BoxBottom extends Component {
    render() {
        return (
            <View style={styles.row}>
                <Box/>
                <Box/>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    row: {
        flex: 1,
        flexDirection: 'row',
        marginVertical: 20
    },
})