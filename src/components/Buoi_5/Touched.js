import React, { Component } from 'react'
import { Button, StyleSheet, Text, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'

export default class Touched extends Component {
    handleOnPress= (params) =>{
        console.log(params)
    }
    render() {
        return (
            <View style={styles.Container}>
                <TouchableOpacity activeOpacity={0} style={styles.Button} 
                    onPress={()=>this.handleOnPress('hello')}>
                    <Text style={styles.TextButton}>Button</Text>
                </TouchableOpacity>
                <TouchableHighlight style={styles.Button} underlayColor="blue" 
                    onPress={()=>this.handleOnPress('goodbye')}>
                    <Text style={styles.TextButton}>Button Highlight</Text>
                </TouchableHighlight>
                <TouchableWithoutFeedback style={styles.Button}>
                    <Text style={styles.TextButton}>sfasfd</Text>
                </TouchableWithoutFeedback>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    Container: {
        flex: 1,
        justifyContent:'center',
        alignItems: 'center'
    },
    Button: {
        backgroundColor: 'red',
        paddingVertical: 10,
        paddingHorizontal: 12,
        borderRadius: 5,
        margin: 10
    },
    TextButton: {
        color: '#fff',
        fontSize: 12
    }
})