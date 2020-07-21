import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import UpdateInformationScreen from './UpdateInformationScreen';

interface Props {
}

interface State {
}

export default class UpdateInformationContainer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
    };
  }

  public render() {
    return (
      <UpdateInformationScreen/>
    );
  }
}
