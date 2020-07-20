import * as React from 'react'
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native'
import modules from '../modules'
import { fontSemiBold, FontGSansBold } from '../../functions/customFont'
import Icon from 'react-native-vector-icons/Feather'
import LinearGradient from 'react-native-linear-gradient'

interface Props {}

export default ({}: Props) => {
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      colors={['#4c669f', '#3b5998', '#192f6a']}
      style={styles.Header}>
      <Image style={styles.logo} source={require('../Images/123.png')} />
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TouchableOpacity>
          <Icon style={styles.Bell} name="bell" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon style={styles.Bell} name="shopping-cart" />
        </TouchableOpacity>
      </View>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  Bell: {
    fontSize: modules.FONT_H2,
    color: modules.WHITE,
    paddingLeft: modules.BODY_HORIZONTAL_12,
    paddingTop: modules.SPACE5,
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
  logo: {
    width: modules.VIEW_PORT_WIDTH / 10,
    height: modules.VIEW_PORT_WIDTH / 10,
  },
  name: {
    fontSize: modules.FONT_H4,
    color: modules.WHITE,
    ...FontGSansBold,
  },
})
