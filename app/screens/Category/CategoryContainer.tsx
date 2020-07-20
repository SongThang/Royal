import * as React from 'react'
import CategoryScreen from './CategoryScreen'

interface Props {}

interface State {}

export default class CategoryContainer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {}
  }

  render() {
    return <CategoryScreen />
  }
}
