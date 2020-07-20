import * as React from 'react'
import { View, StyleSheet, Text, SafeAreaView, FlatList } from 'react-native'
import modules from '../../modules'
import { FontGSansBold } from '../../../functions/customFont'
import LinearGradient from 'react-native-linear-gradient'
import CartNews from '../../components/CartNews'
import { promotionList, NewsDM } from '../../dummy'

export interface Props {}

export interface State {}

export default class Component extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {}
  }

  public render() {
    return (
      <View style={styles.container}>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={['#4c669f', '#3b5998', '#192f6a']}
          style={styles.Header}>
          <Text style={styles.title}>News</Text>
        </LinearGradient>
        <View style={styles.MainContainer}>
          <FlatList
            data={NewsDM}
            renderItem={(item: any) => {
              return <CartNews data={item.item} />
            }}
          />
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    paddingHorizontal: modules.BODY_HORIZONTAL_12,
  },
  title: {
    fontSize: modules.FONT_H4,
    ...FontGSansBold,
    color: modules.WHITE,
  },
  container: {
    flex: 1,
  },
  Header: {
    paddingHorizontal: modules.BODY_HORIZONTAL_18,
    paddingTop: modules.BODY_HORIZONTAL_24 * 2 - 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: modules.BODY_HORIZONTAL_12 / 2,
    alignItems: 'center',
    backgroundColor: modules.RED,
  },
})
