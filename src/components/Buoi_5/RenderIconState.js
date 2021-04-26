import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'
// import angry from './../../assests/images/angry.png'
// import sad from './../../assests/images/sad.png'
// import care from './../../assests/images/care.png'
// import haha from './../../assests/images/haha.png'
// import like from './../../assests/images/like.png'
// import love from './../../assests/images/love.png'

import {image} from '../../assests/images'
import IconButtons from './IconButtons'

export default class RenderIconState extends Component {
    state = {
        icon: image.haha
    }   
    handleIcon = (icon) => {
        this.setState({icon})
    }
    // renderActions = () => {
    //     return(
    //         <View style={styles.EmotionGroup}>
    //             <TouchableOpacity onPress={()=>this.handleIcon(image.sad)}>
    //                 <Image style={styles.SmallIcon} source= {image.sad}  />
    //             </TouchableOpacity>
    //             <TouchableOpacity onPress={()=>this.handleIcon(image.love)}>
    //                 <Image style={styles.SmallIcon} source= {image.love}/>
    //             </TouchableOpacity>
    //             <TouchableOpacity onPress={()=>this.handleIcon(image.care)}>
    //                 <Image style={styles.SmallIcon} source= {image.care}/>
    //             </TouchableOpacity>
    //             <TouchableOpacity onPress={()=>this.handleIcon(image.like)}>
    //                 <Image style={styles.SmallIcon} source= {image.like}/>
    //             </TouchableOpacity>
    //             <TouchableOpacity onPress={()=>this.handleIcon(image.angry)}>
    //                 <Image style={styles.SmallIcon} source= {image.angry}/>
    //             </TouchableOpacity>
    //             <TouchableOpacity onPress={()=>this.handleIcon(image.haha)}>
    //                 <Image style={styles.SmallIcon} source= {image.haha}/>
    //             </TouchableOpacity>
    //         </View>
    //     )
    // }

    render() {
        return (
            <View style ={styles.Container}>
                <Image style={styles.BigIcon} source={this.state.icon}/>
                <View style={styles.EmotionGroup}>
                    <IconButtons icon = {image.sad}/>
                    <IconButtons icon = {image.angry}/>
                    <IconButtons icon = {image.haha}/>
                    <IconButtons icon = {image.like}/>
                    <IconButtons icon = {image.love}/>
                    <IconButtons icon = {image.care} />
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
