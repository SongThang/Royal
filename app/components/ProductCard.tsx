import * as React from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Modal } from 'react-native'
import FastImage from 'react-native-fast-image'
import modules from '../modules'
import StarRating from 'react-native-star-rating'

import {
  FontGSansBold,
  fontGSans,
  Battambang,
} from '../../functions/customFont'

export interface AppProps {
  click: any
  data: any
}

export default ({ data, click }: AppProps) => {
  return (
    <TouchableOpacity
      onPress={click}
      activeOpacity={0.7}
      style={styles.cardContainer}>
      <FastImage style={styles.ProductImg} source={{ uri: data.fileUrl }} />
      <View style={styles.info}>
        <Text numberOfLines={2} style={styles.productName}>
          {data.title}
        </Text>
        <View style={styles.rowB}>
          <Text style={[styles.Price, { color: modules.TEXT }]}>USD</Text>
          <Text numberOfLines={2} style={styles.Price}>
            ${data.fullPrice}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  Price: {
    ...FontGSansBold,
    color: modules.ACTIVE,
    fontSize: modules.FONT_H5,
  },
  ProductImg: {
    width: modules.VIEW_PORT_WIDTH / 2 - modules.BODY_HORIZONTAL_12 * 2 + 6,
    height: modules.VIEW_PORT_WIDTH / 2.3,
    alignItems: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: modules.BODY_HORIZONTAL_12 / 2,
  },
  cardContainer: {
    width: modules.VIEW_PORT_WIDTH / 2 - modules.BODY_HORIZONTAL_12 * 2 + 6,
    backgroundColor: modules.WHITE,
    borderRadius: modules.SPACE,
    overflow: 'hidden',
    marginHorizontal: modules.SPACE,
    marginTop: modules.SPACE,
  },
  rowB: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  info: {
    paddingVertical: modules.BODY_HORIZONTAL_12 / 2,
    paddingHorizontal: modules.BODY_HORIZONTAL_12,
    justifyContent: 'space-between',
    flex: 1,
  },
  code: {
    color: modules.RED,
    ...fontGSans,
    fontSize: modules.FONT_S,
  },
  stock: {
    ...fontGSans,
    fontSize: modules.FONT_S,
  },
  productCode: {
    ...fontGSans,
    fontSize: modules.FONT_P,
    color: modules.SUB_TITLE,
  },
  productName: {
    ...Battambang,
    fontSize: modules.FONT_S,
    flex: 1,
    lineHeight: 18,
  },
})
