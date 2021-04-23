import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default class ItemTop extends Component {
    render() {
        return (
            <View style={styles.blockChildYellow}>
                <Text> itemTop1 </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    blockChildYellow: {
        flex: 1 ,
        backgroundColor: '#ffffc2',
        marginVertical: 30,
        marginHorizontal: 20,
        borderRadius: 20,
        justifyContent:'center',
        alignItems: 'center'
    },
})
