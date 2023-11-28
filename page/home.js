import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export default class Home extends Component {
    render () {
        const { Navigate } = this.props.navigation;

        return (
            <View style={styles.container}>
                <Text style={styles.pageName}>
                    User manager
                </Text>
                <TouchableOpacity onPress={() => Navigate('Login')} style={styles.bnt1}>
                    <Text style={styles.bntText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Navigate('Register')} style={styles.bnt1}>
                    <Text style={styles.bntText}>Register</Text>
                </TouchableOpacity>
            </View>
        )
    }
};

const styles = StyleSheet.create ({
    container: {
        display: 'flex',
        alignItenms: 'center',
        justifyContent: 'center'
    },
    bnt1: {
        background: 'orange',
        padding: 10,
        marging: 10,
        width: '95%'
    },
    bnt2: {
        background: 'blue',
        padding: 10,
        marging: 10,
        width: '95%'
    },
    pageName: {
        maring: 10,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center'
    },
    btnText: {
        color: 'white',
        fontWeight: 'bold'
    }
});