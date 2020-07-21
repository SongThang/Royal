import * as React from 'react'
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native'
import modules from '../../modules'
import FastImage from 'react-native-fast-image'
import {
  fontGSans,
  FontGSansBold,
  FontGSansSemiBold,
} from '../../../functions/customFont'
import Icon from 'react-native-vector-icons/FontAwesome'
import MenuProfile from '../../components/MenuProfile'
import LinearGradient from 'react-native-linear-gradient'
import { useNavigation } from '@react-navigation/native'

interface Props { }

export default ({ }: Props) => {
  const navigation = useNavigation()
  return (
    <View style={styles.Container}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={['#4c669f', '#3b5998', '#192f6a']}
        style={styles.Header}>
        <Text style={styles.title}>Profile</Text>
      </LinearGradient>
      <SafeAreaView />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.profile}>
          <View style={styles.Row}>
            <FastImage
              style={styles.Profile}
              source={{
                uri:
                  'https://images.unsplash.com/photo-1590048531478-ca4710ec1195?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60',
              }}
            />
            <View style={styles.info}>
              <View style={{ alignItems: 'flex-end' }}>
                <Text style={styles.name}>SONG YTHANG</Text>
                <View style={{ alignItems: 'center', flexDirection: 'row' }}>
                  <Icon
                    style={[styles.phone, { color: modules.PRIMARY }]}
                    name="certificate"
                  />
                  <Text style={styles.type}>Premium Member</Text>
                </View>
              </View>
              <View style={{ alignItems: 'flex-end' }}>
                <Text style={styles.phoneNumber}>0965159910</Text>
                <Text style={styles.type}>ID:803713</Text>
              </View>
            </View>
          </View>
        </View>
        <MenuProfile onStories={()=>navigation.navigate('OrderHistory')} onOrder={()=>navigation.navigate('Order')} onStore={()=>navigation.navigate('Point')} onPromotion={()=>navigation.navigate('Reward')} />
        <TouchableOpacity activeOpacity={0.7} style={styles.Setting} onPress={() => navigation.navigate('UpdateInformation')}>
          <View style={styles.card}>
            <View style={styles.card}>
              <View style={styles.IconContainer}>
                <Icon style={styles.Icon} name="info" />
              </View>
              <View style={{ paddingHorizontal: modules.BODY_HORIZONTAL_12 }}>
                <Text style={styles.text}>Update Information</Text>
                <Text style={styles.phoneNumber}>
                  Make update your information
                </Text>
              </View>
            </View>
            <Icon style={styles.Icon} name="angle-right" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} style={styles.Setting}>
          <View style={styles.card}>
            <View style={styles.card}>
              <View style={styles.IconContainer}>
                <Icon style={styles.Icon} name="truck" />
              </View>
              <View style={{ paddingHorizontal: modules.BODY_HORIZONTAL_12 }}>
                <Text style={styles.text}>Delivery</Text>
                <Text style={styles.phoneNumber}>
                  Make update your current address
                </Text>
              </View>
            </View>
            <Icon style={styles.Icon} name="angle-right" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} style={styles.Setting}>
          <View style={styles.card}>
            <View style={styles.card}>
              <View style={styles.IconContainer}>
                <Icon style={styles.Icon} name="language" />
              </View>
              <View style={{ paddingHorizontal: modules.BODY_HORIZONTAL_12 }}>
                <Text style={styles.text}>Language</Text>
                <Text style={styles.phoneNumber}>
                  Change your current language
                </Text>
              </View>
            </View>
            <Icon style={styles.Icon} name="angle-right" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate('Login')} >
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={['#4c669f', '#3b5998', '#192f6a']}
            style={styles.Button}>
            <Text style={styles.btnLabel}>SING IN</Text>
          </LinearGradient>
        </TouchableOpacity>
      </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
  title: {
    fontSize: modules.FONT_H4,
    ...FontGSansBold,
    color: modules.WHITE,
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
  btnLabel: {
    fontSize: modules.FONT_H5,
    color: modules.WHITE,
    ...fontGSans,
  },
  Button: {
    backgroundColor: modules.MAIN_COLOR,
    alignItems: 'center',
    paddingVertical: modules.BODY_HORIZONTAL_12,
    marginHorizontal: modules.BODY_HORIZONTAL_12,
    marginTop: modules.BODY_HORIZONTAL_12,
    borderRadius: modules.SPACE5 * 2,
  },
  text: {
    ...fontGSans,
    fontSize: modules.FONT_H5,
  },
  IconContainer: {
    backgroundColor: modules.BACKGROUND_PRIMARY,
    borderRadius: modules.BODY_HORIZONTAL_12,
    width: modules.BODY_HORIZONTAL_24 * 2,
    height: modules.BODY_HORIZONTAL_24 * 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Icon: {
    fontSize: modules.FONT_H4,
    padding: modules.BODY_HORIZONTAL_12,
    color: modules.MAIN_COLOR,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  Setting: {
    backgroundColor: modules.WHITE,
    marginTop: modules.BODY_HORIZONTAL_12 / 2,
    marginHorizontal: modules.BODY_HORIZONTAL_12,
    borderRadius: modules.BODY_HORIZONTAL_12,
    padding: modules.BODY_HORIZONTAL_12,
  },
  phoneNumber: {
    fontSize: modules.FONT_H5 - 4,
    ...fontGSans,
    color: modules.SUB_TITLE,
  },
  phone: {
    fontSize: modules.FONT_H5,
    ...fontGSans,
    color: modules.SUB_TITLE,
    paddingHorizontal: modules.SPACE,
  },
  info: {
    paddingHorizontal: modules.BODY_HORIZONTAL_12,
    justifyContent: 'space-between',
  },
  number: {
    fontSize: modules.FONT_H6,
    ...fontGSans,
    color: modules.SUB_TEXT,
    paddingBottom: modules.BODY_HORIZONTAL_12 / 2,
  },
  score: {
    fontSize: modules.FONT_P,
    ...fontGSans,
    color: modules.SUB_TEXT,
  },
  center: {
    alignItems: 'center',
    padding: modules.BODY_HORIZONTAL_18,
  },
  Container: {
    flex: 1,
  },
  Profile: {
    width: modules.VIEW_PORT_WIDTH / 4,
    height: modules.VIEW_PORT_WIDTH / 4,
    borderRadius: modules.VIEW_PORT_WIDTH / 4,
  },
  Row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  border: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: modules.BODY_HORIZONTAL_12,
    borderTopWidth: 0.3,
    paddingTop: modules.BODY_HORIZONTAL_12 / 2,
  },
  profile: {
    backgroundColor: modules.WHITE,
    marginHorizontal: modules.BODY_HORIZONTAL_12,
    paddingHorizontal: modules.BODY_HORIZONTAL_12,
    paddingVertical: modules.BODY_HORIZONTAL_12,
    borderRadius: modules.RADIUS * 2,
    marginTop: modules.BODY_HORIZONTAL_12,
  },
  name: {
    ...FontGSansBold,
    fontSize: modules.FONT_H4,
    textTransform: 'uppercase',
  },
  type: {
    ...fontGSans,
    fontSize: modules.FONT_P,
    color: modules.SUB_TEXT,
  },
})
