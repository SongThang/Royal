import React, { useState } from 'react'
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import modules from '../../modules'
import { FontGSansBold } from '../../../functions/customFont'
import CardCart from '../../components/CardCart'
import { promotionList } from '../../dummy'
import Modal from 'react-native-modal'
import Icon from 'react-native-vector-icons/AntDesign'

interface Props {}

export default ({}: Props) => {
  const [summary, setSummary] = useState(false)
  return (
    <View style={styles.container}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={['#4c669f', '#3b5998', '#192f6a']}
        style={styles.Header}>
        <Text style={styles.title}>Cart</Text>
      </LinearGradient>
      <View style={styles.MainContainer}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={promotionList}
          renderItem={(item: any) => {
            return <CardCart data={item.item} />
          }}
        />
      </View>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={['#4c669f', '#3b5998', '#192f6a']}
        style={styles.CheckOut}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={styles.price}>USD $264</Text>
          {summary ? (
            <TouchableOpacity onPress={() => setSummary(!summary)}>
              <Icon style={styles.icon} name="down" />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={() => setSummary(!summary)}>
              <Icon style={styles.icon} name="up" />
            </TouchableOpacity>
          )}
        </View>

        <TouchableOpacity activeOpacity={0.5} style={styles.btn}>
          <Text style={styles.label}>Check Out</Text>
        </TouchableOpacity>
      </LinearGradient>
      <Modal
        isVisible={summary}
        backdropOpacity={0.1}
        onBackdropPress={() => setSummary(!summary)}
        style={{ margin: 0 }}
        animationInTiming={500}
        animationOutTiming={500}>
        <View
          style={{
            width: modules.VIEW_PORT_WIDTH,
            backgroundColor: modules.WHITE,
            height: modules.VIEW_PORT_WIDTH / 3,
            marginTop: modules.VIEW_PORT_WIDTH + 22,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.2,
            shadowRadius: 1.41,

            elevation: 2,
          }}>
          <TouchableOpacity
            onPress={() => setSummary(!summary)}
            style={styles.close}>
            <Icon style={styles.closemodal} name="circledown" />
          </TouchableOpacity>
          <View style={{ paddingHorizontal: modules.BODY_HORIZONTAL_18 }}>
            <View style={styles.row}>
              <Text style={styles.titleLabel}>Total Item: </Text>
              <Text style={styles.price1}>Unit 12 </Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.titleLabel}>Sub Total: </Text>
              <Text style={styles.price1}>US $287 </Text>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  )
}
const styles = StyleSheet.create({
  price1: {
    fontSize: modules.FONT_H5,
  },
  titleLabel: {
    fontSize: modules.FONT_H5,
    color:modules.SUB_TITLE
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: modules.SPACE5,
  },
  closemodal: {
    fontSize: modules.FONT_H3,
  },
  close: {
    padding: modules.BODY_HORIZONTAL_12,
  },
  icon: {
    fontSize: modules.FONT_H3,
    fontWeight: '700',
    paddingHorizontal: modules.SPACE5,
    paddingTop: modules.SPACE,
    color: modules.WHITE,
  },
  btn: {
    backgroundColor: modules.WHITE,
    paddingHorizontal: modules.BODY_HORIZONTAL_12,
    paddingVertical: modules.BODY_HORIZONTAL_12 / 1.5,
    borderRadius: modules.RADIUS,
  },
  CheckOut: {
    position: 'absolute',
    bottom: 0,
    height: modules.BODY_HORIZONTAL_24 * 2.5,
    width: modules.VIEW_PORT_WIDTH,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: modules.BODY_HORIZONTAL_12,
    flexDirection: 'row',
  },
  MainContainer: {
    marginBottom: modules.BODY_HORIZONTAL_24 * 5.7,
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
  title: {
    fontSize: modules.FONT_H4,
    ...FontGSansBold,
    color: modules.WHITE,
  },
  label: {
    fontSize: modules.FONT_H4,
    ...FontGSansBold,
    color: modules.MAIN_COLOR,
  },
  price: {
    fontSize: modules.FONT_H3,
    ...FontGSansBold,
    color: modules.WHITE,
  },
})
