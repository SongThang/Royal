import * as React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import FastImage from 'react-native-fast-image'
import modules from '../modules'
import { fontGSans } from '../../functions/customFont'
import { normalizeUnits } from 'moment'

interface Props {
  data: any
}

export default ({ data }: Props) => {
  return (
    <TouchableOpacity style={styles.container}>
      <FastImage
        style={styles.img}
        source={{
          uri: data.fileUrl,
        }}>
        <View style={styles.info}>
          <Text style={styles.name}>{data.title}</Text>
        </View>
      </FastImage>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  info: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,.3)',
    width: modules.VIEW_PORT_WIDTH / 2 - modules.BODY_HORIZONTAL_24,
    flex: 1,
    paddingHorizontal: modules.SPACE5,
  },
  name: {
    fontSize: modules.FONT_H4,
    ...fontGSans,
    textAlign: 'center',
    color: modules.WHITE,
  },
  container: {
    marginHorizontal: modules.BODY_HORIZONTAL_12 / 2,
    marginTop: modules.BODY_HORIZONTAL_12,
    flexDirection: 'row',
    width: modules.VIEW_PORT_WIDTH / 2 - 24,
  },
  img: {
    width: modules.VIEW_PORT_WIDTH / 2 - 24,
    height: modules.VIEW_PORT_WIDTH / 2 - 24,
    borderRadius: modules.RADIUS * 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
