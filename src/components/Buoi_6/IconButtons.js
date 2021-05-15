import React, { Component } from 'react'
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native'


export default class IconButtons extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View>
                <TouchableOpacity onPress={()=>this.props.onPress(this.props.icon)}>
                    <Image style={styles.SmallIcon} source= {this.props.icon}  />
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    SmallIcon: {
        marginHorizontal: 10,
        marginVertical: 20,
        width: 30,
        height: 30
    }
})
