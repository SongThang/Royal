import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import OrderHistoryScreen from './OrderHistoryScreen';

interface Props {
}

interface State {
}

export default class OrderHistoryContainer extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
        };
    }

    public render() {
        return (
            <OrderHistoryScreen />
        );
    }
}
