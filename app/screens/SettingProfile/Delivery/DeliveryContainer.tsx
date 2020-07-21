import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import DeliveryScreen from './DeliveryScreen';

interface Props {
}

interface State {
}

export default class DeliveryContainer extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
        };
    }

    public render() {
        return (
            <DeliveryScreen />
        );
    }
}
