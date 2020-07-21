import * as React from 'react';
import { View, StyleSheet, Text, StatusBar } from 'react-native';
import LoginScreen from './LoginScreen';

 interface Props {
}

interface State {
}

export default class LoginContainer extends React.Component<Props, State> {
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
      <LoginScreen/>
    );
  }
}
