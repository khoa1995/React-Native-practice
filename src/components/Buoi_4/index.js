import React, { Component } from 'react'
import {View, StyleSheet, Image, Text } from 'react-native';
import BoxBottom from './BoxBottom';
import ItemTop from './ItemTop'

export default class Buoi04 extends Component {
    render() {
        const textAvatar = 'react native 02 cao thắng';
        const isShowHide = true;
        return (
            <>
                <View style={styles.blockOne}>
                    {/* <ItemTop/>
                    <ItemTop/> */}
                    {/* Lấy hình từ api hoặc network  */}
                    {/* <Image style={styles.image} source={{
                        uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJcAAAAtCAYAAACjzvlqAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjk2MDk3QTAxRUZERTExRTc5OTE3Q0ZBRTUyQzFFQjA5IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjk2MDk3QTAyRUZERTExRTc5OTE3Q0ZBRTUyQzFFQjA5Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OTYwOTc5RkZFRkRFMTFFNzk5MTdDRkFFNTJDMUVCMDkiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OTYwOTdBMDBFRkRFMTFFNzk5MTdDRkFFNTJDMUVCMDkiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4pC4pbAAARn0lEQVR42uxdCXhN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'
                        }}/> */}
                    {isShowHide ? 
                    <Image style={styles.image} source={require('./google_btn.png')} /> : <Text style={styles.title}>{textAvatar}</Text>
                    }
                    
                </View>
                <View style={styles.blockTwo}>
                    <BoxBottom/>
                    <BoxBottom/>
                </View>
            </>
        )
    }
}
const styles = StyleSheet.create({
    blockOne:{
      flex: 1,
      backgroundColor: '#a1c99a',
      borderBottomEndRadius: 20,
      borderBottomStartRadius: 20,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent:'center'
    },
    blockTwo: {
      flex: 1,
      backgroundColor: '#c8c8fa',
      marginTop: 20,
      borderTopStartRadius: 20,
      borderTopEndRadius: 20,
    },
    image: {
        borderRadius: 999,
        borderWidth: 2,
        borderColor: 'white'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white'
    }
  })