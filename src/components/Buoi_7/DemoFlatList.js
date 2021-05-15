import React, { Component } from 'react'
import { Text, StyleSheet, View, FlatList } from 'react-native'

export default class DemoFlatList extends Component {
    // array = [1,2,3,4,5,6,7,8,9,10]
    // array = [...Array(65).keys()]
    array = [{id : 1},{id : 2},{id : 2},{id : 2},{id : 2},{id : 2}]
    renderItem = ({item}) => (
        <View style={[styles.item, {backgroundColor:`#${Math.floor(Math.random()*16777497).toString(16)}`}]}>
            <Text>Item {item.id}</Text>
        </View>
    )
    render() {
        return (
            <FlatList
                horizontal 
                refreshing={true}
                onRefresh={()=> console.log('Refresh call')}
                data={this.array} 
                keyExtractor={(item)=>{
                    return item.id.toString()
                }}
                renderItem={this.renderItem} 
            >
                
            </FlatList>
        )
    }
}

const styles = StyleSheet.create({
    item: {
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor: 'red',
        marginVertical: 10,
        height: 100,
        borderRadius: 10,
        marginHorizontal: 20
    }
})
