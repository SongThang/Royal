import * as React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import FastImage from 'react-native-fast-image'
import modules from '../modules'
import { BattambangBold } from '../../functions/customFont'

interface Props {
  data: any
}

interface State {}

export default ({ data }: Props) => {
  return (
    <TouchableOpacity style={styles.container}>
      <FastImage style={styles.imageCover} source={{ uri: data.fileUrl }} />
      <View style={styles.info}>
        <Text style={styles.title}>{data.title}</Text>
      </View>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  title: {
    ...BattambangBold,
    flex:1
  },
  info: {
    padding: modules.BODY_HORIZONTAL_12,
  },
  container: {
    flex: 1,
    marginTop: modules.BODY_HORIZONTAL_12,
    backgroundColor: modules.WHITE,
    borderRadius:modules.CARD_RADIUS,
    overflow:"hidden"
  },
  imageCover: {
    width: modules.VIEW_PORT_WIDTH - modules.BODY_HORIZONTAL_12,
    height: modules.VIEW_PORT_WIDTH / 2,
  },
})
