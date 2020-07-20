import * as React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import Swiper from 'react-native-swiper'
import FastImage from 'react-native-fast-image'
import modules from '../modules'
interface Props {}

export default ({}: Props) => {
  return (
    <Swiper showsPagination={false} bouncesZoom={true} showsButtons={false}>
      <View style={styles.slide1}>
        <FastImage
          style={styles.Img}
          source={{
            uri:
              'https://scontent.fpnh10-1.fna.fbcdn.net/v/t1.0-9/82154875_1575038502635529_4808971991094657024_o.jpg?_nc_cat=107&_nc_sid=dd9801&_nc_oc=AQnxJGL82EbfC23VFaz9g4SaygoqbTxZSl-wRgWWrErE7aADEezpNRVVyEP_ySkLvq0&_nc_ht=scontent.fpnh10-1.fna&oh=3c756babd43dfe2d547851fd4bbdea76&oe=5F322EBA',
          }}
        />
      </View>
      <View style={styles.slide1}>
        <FastImage
          style={styles.Img}
          source={{
            uri:
              'https://scontent.fpnh10-1.fna.fbcdn.net/v/t1.0-9/39148915_1171070099699040_3802907092059160576_o.jpg?_nc_cat=109&_nc_sid=dd9801&_nc_oc=AQm4t4q3WIYcWAYNyp67F2i_mJ77HVf_GwBx1RY2Jwt1SwFAW3vWStqEBQef2KlRuP8&_nc_ht=scontent.fpnh10-1.fna&oh=dc59670563d53619554eac7fd9a4711a&oe=5F3434B0',
          }}
        />
      </View>
      <View style={styles.slide1}>
        <FastImage
          style={styles.Img}
          source={{
            uri:
              'https://scontent.fpnh10-1.fna.fbcdn.net/v/t1.0-9/42959059_1208174729321910_198101664266190848_o.jpg?_nc_cat=111&_nc_sid=dd9801&_nc_oc=AQnYs6UmetgvcVKWzzDuqYBcy7p0BCoVZi9_KxEytV-3SqyODGst4oBDsfkLd8XhRy4&_nc_ht=scontent.fpnh10-1.fna&oh=39869951f9a23953b153c9dc5db9704f&oe=5F310CD2',
          }}
        />
      </View>
    </Swiper>
  )
}

const styles = StyleSheet.create({
  Img: {
    width: '100%',
    height: '100%',
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
})
