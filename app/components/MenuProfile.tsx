import * as React from 'react'
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native'
import modules from '../modules'
import { FontGSansBold } from '../../functions/customFont'

interface Props {
  onStories?: any
  onOrder?: any
  onStore?: any
  onPromotion?: any
}

export default ({ onStories, onOrder, onStore, onPromotion }: Props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={onStore}
        style={styles.Store}>
        <Image style={styles.Icon} source={require('../Images/bonus.png')} />
        <View style={styles.info}>
          <Text style={styles.point}>170</Text>
          <Text style={styles.Name}>Your Points</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={onPromotion}
        style={styles.Store}>
        <Image
          style={styles.Icon}
          source={require('../Images/surprise-box.png')}
        />
        <View style={styles.info}>
          <Text style={styles.Name}>Reward Exchange</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={onOrder}
        style={styles.Store}>
        <Image style={styles.Icon} source={require('../Images/list.png')} />
        <View style={styles.info}>
          <Text style={styles.Name}>Your Order Product</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={onStories}
        style={styles.Store}>
        <Image style={styles.Icon} source={require('../Images/history.png')} />
        <View style={styles.info}>
          <Text style={styles.Name}>Your Order History</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  info: {
    alignItems: 'center',
    paddingHorizontal: modules.BODY_HORIZONTAL_12 / 2,
    flex: 1,
  },
  sub: {
    fontSize: modules.FONT_S - 2,
    color: modules.SUB_TITLE,
  },
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: modules.BODY_HORIZONTAL_12,
    marginTop: modules.SPACE,
  },
  Icon: {
    width: modules.VIEW_PORT_WIDTH / 7,
    height: modules.VIEW_PORT_WIDTH / 7,
  },
  Store: {
    width: modules.VIEW_PORT_WIDTH / 2 - modules.BODY_HORIZONTAL_12 * 2 + 4,
    backgroundColor: modules.WHITE,
    padding: modules.BODY_HORIZONTAL_12,
    flexDirection: 'row',
    marginVertical: modules.BODY_HORIZONTAL_12 / 2,
    marginHorizontal: modules.SPACE,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  Name: {
    fontSize: modules.FONT_H5,
    ...FontGSansBold,
    color: modules.MAIN_COLOR,

  },
  point: {
    fontSize: modules.FONT_H5,
    ...FontGSansBold,
    color: modules.RED
  },
})
