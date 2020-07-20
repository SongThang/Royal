import * as React from 'react'
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  Platform,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native'
import _styles from '../../_styles'
import MainHeader from '../../components/MainHeader'
import ParallaxScrollView from 'react-native-parallax-scroll-view'
import modules from '../../modules'
import Icon from 'react-native-vector-icons/Feather'
import Slider from '../../components/Slider'
import {
  FontGSansSemiBold,
  fontGSans,
  FontGSansBold,
} from '../../../functions/customFont'
import ProductCard from '../../components/ProductCard'
import { promotionList } from '../../dummy'
import PromotionCard from '../../components/PromotionCard'
import { useNavigation } from '@react-navigation/native'
import FastImage from 'react-native-fast-image'

interface Props {}

export default ({}: Props) => {
  const navigation = useNavigation()
  return (
    <View style={_styles.flx1}>
      <ParallaxScrollView
        backgroundColor="#3b5998"
        contentBackgroundColor="#f0f0f0"
        showsVerticalScrollIndicator={false}
        parallaxHeaderHeight={modules.VIEW_PORT_HEIGHT / 2.95}
        stickyHeaderHeight={Platform.OS === 'ios' ? 90 : 65}
        fadeOutForeground={false}
        renderBackground={() => (
          <FastImage
            style={{ width: '100%', height: '100%' }}
            source={require('../../Images/background.jpg')}
          />
        )}
        renderStickyHeader={() => <MainHeader />}
        renderForeground={() => (
          <SafeAreaView>
            <TouchableOpacity style={styles.HeaderContainer}>
              <View style={styles.Search}>
                <Icon style={styles.icon} name="search" />
                <Text style={styles.textSearch}>Search...</Text>
              </View>
            </TouchableOpacity>
            <View style={styles.swiper}>
              <Slider />
            </View>
          </SafeAreaView>
        )}>
        <View style={styles.productContaier}>
          <FlatList
            data={promotionList}
            numColumns={2}
            ListHeaderComponent={_renderFooter(promotionList, navigation)}
            renderItem={(item) => {
              return (
                <ProductCard
                  click={() => navigation.navigate('ProductDetail')}
                  data={item.item}
                />
              )
            }}
          />
        </View>
      </ParallaxScrollView>
    </View>
  )
}
const _renderFooter = (promotionList: any, navigation: any) => {
  return (
    <View>
      <Text style={styles.title}>Promotion</Text>
      <FlatList
        data={promotionList}
        renderItem={(item) => {
          return (
            <PromotionCard
              onClick={() => navigation.navigate('ProductDetail')}
              data={item.item}
            />
          )
        }}
      />
      <Text style={styles.title}>More Product</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  title: {
    fontSize: modules.FONT_H5,
    ...FontGSansBold,
    paddingVertical: modules.BODY_HORIZONTAL_12,
    paddingHorizontal: modules.BODY_HORIZONTAL_12 / 2,
    color: modules.MAIN_COLOR,
  },
  productContaier: {
    paddingHorizontal: modules.BODY_HORIZONTAL_12,
    paddingBottom: modules.SPACE,
  },
  linearGradient: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: modules.BODY_HORIZONTAL_12,
  },
  seeMore: {
    fontSize: modules.FONT_P,
    ...fontGSans,
    color: modules.SUB_TEXT,
  },
  topSell: {
    fontSize: modules.FONT_H6,
    ...FontGSansSemiBold,
  },
  sellContainer: {
    marginHorizontal: modules.BODY_HORIZONTAL_12 / 2,
    marginVertical: modules.BODY_HORIZONTAL_12 / 2,
  },
  swiper: {
    height: modules.VIEW_PORT_HEIGHT / 5,
    marginVertical: modules.BODY_HORIZONTAL_12,
    marginHorizontal: modules.BODY_HORIZONTAL_12,
    borderRadius: 12,
    overflow: 'hidden',
  },
  HeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: modules.BODY_HORIZONTAL_12,
    justifyContent: 'space-between',
  },
  Search: {
    backgroundColor: modules.WHITE,
    paddingVertical: modules.BODY_HORIZONTAL_12,
    paddingHorizontal: modules.BODY_HORIZONTAL_18,
    borderRadius: modules.RADIUS,
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  icon: {
    fontSize: modules.FONT_H5,
    color: modules.SUB_TEXT,
  },
  textSearch: {
    fontSize: modules.FONT_H5,
    paddingHorizontal: modules.BODY_HORIZONTAL_12,
    color: modules.SUB_TEXT,
  },
})
