import * as React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import modules from '../modules'
import FastImage from 'react-native-fast-image'
import {
  fontSemiBold,
  FontGSansBold,
  fontGSans,
} from '../../functions/customFont'

export interface Props {
  data: any
  onClick:any
}

export default ({ data,onClick }: Props) => {
  return (
    <TouchableOpacity onPress={onClick} activeOpacity={0.8} style={styles.cardContainer}>
      <FastImage style={styles.imageCover} source={{ uri: data.fileUrl }}>
        <Text style={styles.text}>10% Discount</Text>
        <Text style={styles.endDate}>30 Day left</Text>
      </FastImage>
      <View style={styles.productInfo}>
        <Text style={styles.title}>{data.title}</Text>
        <View style={styles.flxRow}>
          <Text style={styles.disPrice}>SALE</Text>
          <Text style={styles.price}> ${Math.round(100 * (1 - 30 / 100) * data.fullPrice) / 100}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  disPrice: {
    fontSize: modules.FONT_H5,
    ...FontGSansBold,
    backgroundColor: modules.RED,
    color: modules.WHITE,
    paddingHorizontal: modules.SPACE,
  },
  flxRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  price: {
    fontSize: modules.FONT_H4,
    ...FontGSansBold,
  },
  text: {
    fontSize: modules.FONT_H5,
    color: modules.WHITE,
    ...fontGSans,
    backgroundColor: modules.MAIN_COLOR,
    paddingHorizontal: modules.BODY_HORIZONTAL_12,
    paddingVertical: modules.SPACE,
    marginTop: modules.BODY_HORIZONTAL_12,
    width: 135,
  },
  endDate: {
    fontSize: modules.FONT_H6,
    color: modules.WHITE,
    ...fontGSans,
    backgroundColor: modules.MAIN_COLOR,
    paddingHorizontal: modules.BODY_HORIZONTAL_12,
    paddingVertical: modules.SPACE,
    marginTop: modules.BODY_HORIZONTAL_12 / 2,
    width: 105,
  },
  productInfo: {
    padding: modules.BODY_HORIZONTAL_12,
  },
  title: {
    fontSize: modules.FONT_H5,
    ...fontSemiBold,
  },
  cardContainer: {
    marginTop: modules.SPACE,
    backgroundColor: modules.WHITE,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  imageCover: {
    width: modules.VIEW_PORT_WIDTH,
    height: modules.VIEW_PORT_WIDTH / 1.5,
  },
})
