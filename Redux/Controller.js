import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import { connect } from 'react-redux';
import ChangeColor from './ChangeColor';

class Controller extends Component {
    onDownKey() {
        this.props.dispatch({ type: 'DOWN' });
    }
    onUpKey() {
        this.props.dispatch({ type: 'UP' });
    }
    render() {
        return (
            <View style={styleController.controller}>
                <Text style={styleController.controllName}>CONTROLLER COMPONENT</Text>
                <ChangeColor />
                <View style={styleController.buttonContainer}>
                    <TouchableOpacity style={styleController.button} onPress={this.onUpKey.bind(this)}>                 }>
                        <Text style={styleController.buttonText}>+</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styleController.button} onPress={this.onDownKey.bind(this)}>
                        <Text style={styleController.buttonText}>-</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default connect()(Controller);

const styleController = StyleSheet.create({
    controller: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: 'yellow',
        alignSelf: 'stretch',
        margin: 20
    },
    controllName: {
        fontSize: 20,
        marginBottom: 10
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    button: {
        backgroundColor: 'black',
        paddingHorizontal: 50,
        paddingVertical: 25,
        margin: 10,
        borderRadius: 5
    },
    buttonText: {
        color: 'white',
        fontSize: 40
    }
});