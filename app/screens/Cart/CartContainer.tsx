import * as React from 'react'
import CartScreen from './CartScreen'

interface Props {}

interface State {}

export default class CartContainer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {}
  }

  render() {
    return <CartScreen />
  }
}
