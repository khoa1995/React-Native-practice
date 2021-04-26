import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

export default class RenderWithState extends Component {
    //Cách 1:sử dụng constructor để khai báo
    constructor(props) {
        super(props);
        this.state = {
            isLogIn: false
        }
    }

    //Cách 2: Khai báo rút gọn
    // state = {
    //     isLogIn: false
    // }
    handleLogin = () => {
        this.setState({
            isLogIn: true
        })
    }
    handleLogout = () => {
        this.setState({
            isLogIn: false
        })
    }
    renderLogin = () => {
        if(this.state.isLogIn) {
            return(
                <>
                    <Text>Hello React Native</Text>
                    <TouchableOpacity style={styles.Button} onPress={this.handleLogout}>
                        <Text style={styles.TextButton}>Log out</Text>
                    </TouchableOpacity>
                </>
            )
        }
        return(
            <TouchableOpacity style={styles.Button} onPress={this.handleLogin}>
                <Text style={styles.TextButton}>Log in</Text>
            </TouchableOpacity>
        )
    }
    render() {
        return (
            <View style={styles.Container}>
                <Text> render with state </Text>
                {this.renderLogin()}              
            </View>
        )
    }
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    Button: {
        backgroundColor: '#bbf',
        paddingVertical: 15,
        paddingHorizontal: 25,
        borderRadius: 8,
        marginVertical: 10
    },
    TextButton: {
        fontWeight: 'bold',
        fontSize: 20
    }
})