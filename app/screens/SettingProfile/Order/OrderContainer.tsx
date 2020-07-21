import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import OrderScreen from './OrderScreen';

interface Props {
}

interface State {
}

export default class OrderContainer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
    };
  }

  public render() {
    return (
      <OrderScreen/>
    );
  }
}
