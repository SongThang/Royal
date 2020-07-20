import React, { useState } from 'react'
import {
  View,
  StyleSheet,
  Text,
  Platform,
  SafeAreaView,
  TouchableOpacity,
  Alert,
  TextInput,
  FlatList,
  Image,
} from 'react-native'
import FastImage from 'react-native-fast-image'
import modules from '../../modules'
import ParallaxScrollView from 'react-native-parallax-scroll-view'
import DetailHeader from '../../components/DetailHeader'
import Icon from 'react-native-vector-icons/Entypo'
import LinearGradient from 'react-native-linear-gradient'
import {
  FontGSansSemiBold,
  FontGSansBold,
  Battambang,
} from '../../../functions/customFont'
import { umDm, promotionList } from '../../dummy'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Modal from 'react-native-modal'
import RelateProduct from '../../components/RelateProduct'
import { useNavigation } from '@react-navigation/native'

interface Props {
  onRelated: () => void
}

export default ({ onRelated }: Props) => {
  const navigation = useNavigation()
  const [unit, setUnit] = useState()
  const [qty, setQty] = useState(1)
  const [input, setInput] = useState(false)
  const onSetQuantity = (addQty: number) => {
    if (qty > 1 || (qty > 0 && addQty > 0)) setQty(qty + addQty)
    if (qty == 1 && addQty == -1) {
      Alert.alert(`Product can't smaller than 1`)
    }
  }
  return (
    <View style={styles.container}>
      <ParallaxScrollView
        backgroundColor="blue"
        contentBackgroundColor="#f8f9fa"
        parallaxHeaderHeight={300}
        stickyHeaderHeight={Platform.OS === 'ios' ? 85 : 65}
        renderStickyHeader={() => <DetailHeader />}
        renderBackground={() => (
          <FastImage
            style={{
              width: '100%',
              height: '100%',
              justifyContent: 'flex-end',
            }}
            source={{
              uri:
                'https://www.takaski.com/wp-content/uploads/2018/05/WAKODO-Baby-Milk-Haihai-Powder-Formula-Made-in-Japan.jpg',
            }}>
            <LinearGradient
              start={{ x: 1, y: 0 }}
              end={{ x: 1, y: 1 }}
              colors={[
                'rgba(248, 249, 250,0.01)',
                'rgba(248, 249, 250,0.8)',
                'rgba(248, 249, 250,1)',
              ]}
              style={styles.Header}
            />
          </FastImage>
        )}
        renderForeground={() => (
          <View
            style={{
              position: 'absolute',
              height: 300,
              flex: 1,
            }}></View>
        )}>
        <View style={styles.Container}>
          <View
            style={{
              alignItems: 'center',
              paddingTop: modules.BODY_HORIZONTAL_12,
            }}>
            <Text style={styles.title}>Lebens Milk Haihai Powder</Text>
            <View style={styles.row}>
              <Text style={styles.price}>USD $38.00</Text>
              <Text style={styles.onSale}>SALE</Text>
            </View>
          </View>
          <View style={styles.information}>
            <Text style={styles.label}>Unit Measurement</Text>
            <View style={styles.unitContainer}>
              {umDm.map((i: any) => {
                return (
                  <TouchableOpacity
                    onPress={() => setUnit(i)}
                    style={[
                      styles.ColorContainer,
                      i == unit ? styles.selectedSize : null,
                    ]}>
                    <Text style={styles.sizeText}>{i.um}</Text>
                  </TouchableOpacity>
                )
              })}
            </View>
            <View style={styles.information}>
              <Text style={styles.label}>Quantity</Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingTop: modules.BODY_HORIZONTAL_12,
                  borderRadius: modules.RADIUS_BUTTON,
                }}>
                <TouchableOpacity
                  style={styles.qtybtn}
                  onPress={() => onSetQuantity(-1)}>
                  <AntDesign style={styles.minusIcon} name="minus" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setInput(!input)}>
                  <Text style={styles.qty}>{qty}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.qtybtn}
                  onPress={() => onSetQuantity(+1)}>
                  <AntDesign style={styles.minusIcon} name="plus" />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.information}>
              <Text style={styles.label}>About Product</Text>
              <Text style={styles.detail}>
                ការលេងល្បែងកំសាន្ត ជាមួយបុត្រធីតាលោកអ្នក
                ជាផ្នែកមួយដ៏មានសារៈសំខាន់សម្រាប់ការលូតលាស់របស់ពួកគេ។
                លោកអ្នកប្រាកដជាឆ្ងល់ថា តើទារកអាយុពី ៤ ទៅ
                ៦ខែអាចលេងល្បែងកំសាន្តអ្វីខ្លះ
                ហើយល្បែងកំសាន្តនោះអាចឱ្យកុមារលេងបានដោយវិធីណា
                បើកុមារមានអាយុត្រឹមតែ ៤ ឬ ៦ ខែ ហើយអាចត្រឹមតែញញឹម សើច
                កាន់ឧបករណ៍លេង និងក្រឡាប់តែប៉ុណ្ណ៉ោះ។ កុំឱ្យខាតពេលវេលាយូរ
                យើងចូលទៅមើល ល្បែងកំសាន្តទាំងនោះជាមួយគ្នា
              </Text>
            </View>
            <View style={styles.information}>
              <Text style={styles.label}>More to Love</Text>
              <FlatList
                style={{ paddingTop: modules.BODY_HORIZONTAL_12 }}
                data={promotionList}
                numColumns={2}
                renderItem={(item) => {
                  return (
                    <RelateProduct click={() => onRelated()} data={item.item} />
                  )
                }}
              />
            </View>
          </View>
        </View>
      </ParallaxScrollView>
      <View style={styles.FixButton}>
        <TouchableOpacity style={styles.addTo}>
          <Text style={styles.labeladd}>Add to cart</Text>
        </TouchableOpacity>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={['#4c669f', '#3b5998', '#192f6a']}
          style={styles.buttonBuy}>
          <TouchableOpacity>
            <Text style={styles.labelBuy}>Buy Now</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
      <View
        style={{
          position: 'absolute',
          paddingHorizontal: modules.BODY_HORIZONTAL_18,
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: modules.VIEW_PORT_WIDTH,
          top: 46,
        }}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.goBack()}>
          <Icon style={styles.iconBack} name="chevron-thin-left" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('chart')}>
          <Icon style={styles.iconBack} name="shopping-cart" />
        </TouchableOpacity>
      </View>
      <Modal
        style={{ alignItems: 'center' }}
        backdropOpacity={0.2}
        isVisible={input}
        onBackdropPress={() => setInput(!input)}>
        <View
          style={{
            width: modules.VIEW_PORT_WIDTH / 1.5,
            height: modules.VIEW_PORT_WIDTH / 3,
            backgroundColor: modules.WHITE,
            borderRadius: 12,
            alignItems: 'center',
            justifyContent: 'space-around',
          }}>
          <TextInput
            keyboardType={'numeric'}
            value={String(qty)}
            onChangeText={(val) => setQty(Number(val))}
            style={styles.qty}
            autoFocus={true}
          />
          <TouchableOpacity onPress={() => setInput(!input)} style={styles.ok}>
            <Text style={styles.labelOk}>OK</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  backhome: {
    width: modules.VIEW_PORT_WIDTH / 10,
    height: modules.VIEW_PORT_WIDTH / 10,
  },
  home: {
    paddingLeft: modules.BODY_HORIZONTAL_18,
  },
  labeladd: {
    fontSize: modules.FONT_H3,
    color: modules.MAIN_COLOR,
    ...FontGSansBold,
  },
  labelBuy: {
    fontSize: modules.FONT_H4,
    color: modules.WHITE,
    ...FontGSansBold,
  },
  addTo: {
    paddingVertical: modules.BODY_HORIZONTAL_12,
    flex: 1,
    alignItems: 'center',
  },
  buttonBuy: {
    paddingVertical: modules.BODY_HORIZONTAL_12,
    flex: 1,
    alignItems: 'center',
    borderTopLeftRadius: 32,
  },
  FixButton: {
    paddingBottom: modules.BODY_HORIZONTAL_24,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  detail: {
    padding: modules.BODY_HORIZONTAL_12,
    marginVertical: modules.BODY_HORIZONTAL_12 / 2,
    marginTop: modules.BODY_HORIZONTAL_12,
    backgroundColor: modules.WHITE,
    ...Battambang,
    shadowColor: '#333',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.3,
    shadowRadius: 1.5,
    elevation: 1,
  },
  labelOk: {
    fontSize: modules.FONT_H5,
    color: modules.WHITE,
  },
  ok: {
    paddingVertical: modules.SPACE,
    paddingHorizontal: modules.BODY_HORIZONTAL_18 * 3,
    backgroundColor: modules.MAIN_COLOR,
  },
  qtybtn: {
    backgroundColor: modules.WHITE,
    marginRight: modules.BODY_HORIZONTAL_12,
    shadowColor: '#333',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.3,
    shadowRadius: 1.5,
    elevation: 1,
  },
  qty: {
    color: modules.ACTIVE,
    fontSize: modules.FONT_H2,
    paddingHorizontal: modules.BODY_HORIZONTAL_12,
    marginRight: modules.BODY_HORIZONTAL_12,
  },
  minusIcon: {
    color: modules.TEXT,
    fontSize: modules.FONT_H5,
    paddingHorizontal: modules.BODY_HORIZONTAL_12 / 2,
  },
  sizeText: {
    fontSize: modules.FONT_H5 - 2,
    color: '#444',
    fontWeight: '500',
  },
  selectedSize: {
    borderWidth: 2,
    borderColor: modules.ACTIVE,
  },
  ColorContainer: {
    width: (modules.VIEW_PORT_WIDTH - modules.BODY_HORIZONTAL * 7) / 3,
    height: (modules.VIEW_PORT_WIDTH - modules.BODY_HORIZONTAL * 7) / 7,
    marginRight: modules.BODY_HORIZONTAL / 2,
    marginTop: modules.BODY_HORIZONTAL,
    backgroundColor: modules.WHITE,
    borderRadius: modules.SPACE5,
    justifyContent: 'center',
    alignItems: 'center',

    shadowColor: '#333',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.3,
    shadowRadius: 1.5,
    elevation: 1,
  },
  unitContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginTop: modules.BODY_HORIZONTAL_12,
  },
  unit: {
    paddingHorizontal: modules.BODY_HORIZONTAL_12,
    backgroundColor: modules.WHITE,
  },
  label: {
    fontSize: modules.FONT_H5,
    color: modules.SUB_TEXT,
    ...FontGSansSemiBold,
  },
  information: {
    marginTop: modules.BODY_HORIZONTAL_18,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  onSale: {
    backgroundColor: modules.RED,
    color: modules.WHITE,
    fontSize: modules.FONT_P,
    paddingHorizontal: modules.SPACE,
    ...FontGSansBold,
    borderRadius: modules.SPACE5,
    overflow: 'hidden',
  },
  button: {
    backgroundColor: '(rgba(59, 89, 152,0.3))',
    width: modules.BODY_HORIZONTAL_24 * 1.5,
    height: modules.BODY_HORIZONTAL_24 * 1.5,
    borderRadius: modules.BODY_HORIZONTAL_24 * 1.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  price: {
    fontSize: modules.FONT_H3,
    paddingHorizontal: modules.BODY_HORIZONTAL_18,
    textAlign: 'center',
    ...FontGSansBold,
    color: modules.MAIN_COLOR,
  },
  title: {
    fontSize: modules.FONT_H4,
    textAlign: 'center',
    ...FontGSansSemiBold,
  },
  Container: {
    flex: 1,
    paddingHorizontal: modules.BODY_HORIZONTAL_18,
  },
  Header: {
    paddingBottom: modules.BODY_HORIZONTAL_12 / 2,
    width: modules.VIEW_PORT_WIDTH,
    height: modules.VIEW_PORT_WIDTH / 5,
  },
  iconBack: {
    fontSize: modules.FONT_H3,
    color: modules.WHITE,
  },
  flexHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: modules.BODY_HORIZONTAL_12,
  },
  container: {
    flex: 1,
  },
  coverImg: {
    width: modules.VIEW_PORT_WIDTH,
    height: modules.VIEW_PORT_WIDTH,
  },
})
