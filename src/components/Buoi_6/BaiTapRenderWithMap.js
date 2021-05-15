import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, ScrollView } from 'react-native'
import gameData from '../../Data/gameData'

export default class BaiTapRenderWithMap extends Component {
    renderData = () => {
        return gameData.map(item => (       
            <View key={item.id}
                    style={[styles.Block,{backgroundColor: item.backgroundColor}]}>
                <Image style={styles.Image} source={item.icon}/>
                <View style={styles.Content}>
                    <Text style={styles.Title}>{item.title}</Text>
                    <Text style={styles.SubTitle}>{item.subTitle}</Text>
                </View>                       
            </View>
        ))
    }
    render() {
        return (
            <View style={styles.screenContainer}>
                <ScrollView>
                    {this.renderData()}
                    {this.renderData()}
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        backgroundColor: '#525659',
        justifyContent: 'center',
        alignItems: 'center'
    },
    Image: {
        width: 50,
        height: 50,
        borderRadius: 8,
    },
    Block: {
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'space-between',
        margin: 8,
        borderRadius: 16,
        borderColor: 'white',
        borderWidth: 1,
        height: 100,
        width: '90%',
        paddingHorizontal: 10
    },
    Content: {
        flexBasis: '80%'
    },
    Title: {
        color: 'white',
        fontSize: 15,
        fontWeight:'bold'
    },
    SubTitle: {
        color: 'white',
        opacity: 0.5,
        fontSize: 12
    }
})
