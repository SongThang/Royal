import * as React from 'react';
import { View, StyleSheet, Text, StatusBar } from 'react-native';
import ConfirmCodeScreen from './ConfirmCodeScreen';

interface Props {
}
interface State {
}

export default class ConfirmCodeContainer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
    };
  }
  componentDidMount(){
    StatusBar.setBarStyle('dark-content');
}

  public render() {
    return (
      <ConfirmCodeScreen/>
    );
  }
}
