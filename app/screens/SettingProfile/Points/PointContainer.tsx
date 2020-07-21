import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import PointScreen from './PointScreen';

interface Props {
}

interface State {
}

export default class PointContainer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
    };
  }

  public render() {
    return (
      <PointScreen/>
    );
  }
}
