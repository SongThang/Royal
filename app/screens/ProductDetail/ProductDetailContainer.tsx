import * as React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import ProductDetailScreen from './ProductDetailScreen'

interface Props {
  navigation:any
}

interface State {}

export default class ProductDetailContainer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {}
  }
  _onRelatedProduct=()=>{
    this.props.navigation.push('ProductDetail')
  }
  public render() {
    return <ProductDetailScreen onRelated={this._onRelatedProduct}/>
  }
}
