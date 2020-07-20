import * as React from 'react'
import ProfileScreen from './ProfileScreen'

interface Props {}

interface State {}

export default class ProfileContainer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {}
  }

  render() {
    return <ProfileScreen />
  }
}
