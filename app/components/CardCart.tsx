import * as React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import FastImage from 'react-native-fast-image'
import modules from '../modules'
import { FontGSansSemiBold, fontGSans } from '../../functions/customFont'

interface Props {
  data: any
}

export default ({ data }: Props) => {
  return (
    <TouchableOpacity activeOpacity={0.7} style={styles.cartContainer}>
      <FastImage
        style={styles.imgCover}
        source={{
          uri: data.fileUrl,
        }}
      />
      <View style={styles.Container}>
        <Text style={styles.title}>{data.title}</Text>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <View style={{ alignItems: 'center' }}>
            <Text style={styles.price}>${data.fullPrice}</Text>
            <Text style={styles.code}>Price</Text>
          </View>
          <View style={{ alignItems: 'center' }}>
            <Text style={styles.price}>2</Text>
            <Text style={styles.code}>Qty</Text>
          </View>
          <View style={{ alignItems: 'center' }}>
            <Text style={styles.price}>${data.fullPrice * 2}</Text>
            <Text style={styles.code}>Total</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  price: {
    fontSize: modules.FONT_P,
    ...fontGSans,
  },
  store: {
    fontSize: modules.FONT_S,
    ...fontGSans,
  },
  cartContainer: {
    padding: modules.BODY_HORIZONTAL_12,
    backgroundColor: modules.WHITE,
    marginHorizontal: modules.BODY_HORIZONTAL_12,
    marginVertical: modules.SPACE,
    flexDirection: 'row',
    borderRadius: modules.CARD_RADIUS,
  },
  Container: {
    paddingHorizontal: modules.BODY_HORIZONTAL_12,
    justifyContent: 'space-between',
    flex: 1,
  },
  imgCover: {
    width: modules.VIEW_PORT_WIDTH / 3,
    height: modules.VIEW_PORT_WIDTH / 3,
    borderRadius: modules.RADIUS,
  },
  title: {
    fontSize: modules.FONT_H6,
    ...FontGSansSemiBold,
    textTransform: 'capitalize',
    flex: 1,
  },
  code: {
    color: modules.SUB_TITLE,
    fontSize: modules.FONT_S,
    ...fontGSans,
  },
})
