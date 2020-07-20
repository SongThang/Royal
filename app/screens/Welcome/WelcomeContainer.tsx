import * as React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import MODULE from '../../modules'
interface Props {
  navigation: any
}

interface State {}

export default class WelcomeContainer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {}
  }
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate('Home')
    }, 2000)
  }

  public render() {
    return (
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={['#4c669f', '#3b5998', '#192f6a']}
        style={styles.linearGradient}>
        <Image
          style={styles.Image}
          source={require('../../Images/whiteLogo.png')}
        />
      </LinearGradient>
    )
  }
}
const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Image: {
    width: MODULE.VIEW_PORT_WIDTH / 2,
    height: MODULE.VIEW_PORT_WIDTH / 2,
  },
})
