import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={{ backgroundColor: 'cyan' }}>
                <Text> HomeScreen </Text>
            </View>
        );
    }
}
