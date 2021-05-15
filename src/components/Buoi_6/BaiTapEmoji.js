import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'

import emoIcon from '../../assests/images'
import IconButtons from './IconButtons'

export default class BaiTapEmoji extends Component {
    state = {
        icon: emoIcon.Haha
    };
    arrayIcon =[emoIcon.Angry, emoIcon.Care, emoIcon.Haha, emoIcon.Like, emoIcon.Love, emoIcon.Sad];  
    handleIcon = (icon) => {
        this.setState({icon})
    }

    render() {
        return (
            <View style ={styles.Container}>
                <Image style={styles.BigIcon} source={this.state.icon}/>
                <View style={styles.EmotionGroup}>
                    <IconButtons icon = {emoIcon.Love} onPress={this.handleIcon}/>
                    <IconButtons icon = {emoIcon.Sad} onPress={this.handleIcon}/>
                    <IconButtons icon = {emoIcon.Angry} onPress={this.handleIcon}/>
                    <IconButtons icon = {emoIcon.Haha} onPress={this.handleIcon}/>
                    <IconButtons icon = {emoIcon.Like} onPress={this.handleIcon}/>
                    <IconButtons icon = {emoIcon.Care} onPress={this.handleIcon}/>                  
                </View>

            </View>
        )
    }
}
const styles = StyleSheet.create({
    Container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    EmotionGroup: {
        flexDirection: 'row',
    },
    BigIcon: {
        marginVertical: 20,
        width: 200,
        height: 200,
    },    
    // SmallIcon: {
    //     marginHorizontal: 10,
    //     marginVertical: 20,
    //     width: 30,
    //     height: 30
    // }
})
