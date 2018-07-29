import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Controller from './Controller';
import { connect } from 'react-redux';

class AppRedux extends Component {
    render() {
        const color = this.props.myHighlight ? 'yellow' : 'white';
        const size = this.props.titlesize ? '14' : '20';
        return (
            <View style={styleApp.container}>
                <View style={styleApp.header}>
                    <View>
                        <Text style={styleApp.appName}>EXAM 1: {'\n'}APP COMPONENT</Text>
                    </View>
                    <View>
                        <Text style={{size, color }}>{ this.props.myValue }</Text>
                    </View>
                </View>
                <Controller />                
            </View>
        );
    }
}

function mapStateToProps(state) {
    return { 
        myValue: state.value,
        myHighlight: state.highlight,
        mySize: state.titlesize 
    };
}

export default connect(mapStateToProps)(AppRedux);

const styleApp = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        paddingTop: 30
    },
    header: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    appName: {
        color: 'white',
        fontSize: 30,
        textAlign: 'center'
    },
    value: {
        color: 'yellow',
        fontSize: 40
    }
});

