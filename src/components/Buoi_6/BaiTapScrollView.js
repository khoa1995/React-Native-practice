import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView } from 'react-native'

export default class BaiTapScrollView extends Component {
    array = [1,2,3,4,5,6,7,8,9,10]
    renderItem = () => {
        return this.array.map(item => (
            <View key={item} style={styles.item}>           
                <Text>Item {item}</Text>                         
            </View>
        ))
    }
    render() {
        return (
            <ScrollView style={styles.scrollContainer}>
                {this.renderItem()}
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    scrollContainer: {
        flex: 1,
        paddingVertical: 50,
        paddingHorizontal: 20,
    },
    item: {
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor: 'red',
        marginVertical: 10,
        height: 100,
        borderRadius: 10,
    }
})
