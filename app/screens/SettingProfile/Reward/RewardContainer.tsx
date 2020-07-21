import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import RewardScreen from './RewardScreen';

interface Props {
}

interface State {
}

export default class RewardContainer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
    };
  }

  public render() {
    return (
      <RewardScreen/>
    );
  }
}
