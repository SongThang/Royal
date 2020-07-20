import * as React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import EventScreen from './EventScreen'

interface Props {}

interface State {}

export default class EventContainer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {}
  }

  public render() {
    return <EventScreen />
  }
}
