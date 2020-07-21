import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import {
  createBottomTabNavigator,
  BottomTabBar,
} from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from 'react-native-screens/native-stack'
import { enableScreens } from 'react-native-screens'
import FontAwesome from 'react-native-vector-icons/Entypo'
import modules from '../modules'
import { BlurView } from '@react-native-community/blur'
import { View, Text, Platform } from 'react-native'
import WelcomeContainer from '../screens/Welcome/WelcomeContainer'
import HomeContainer from '../screens/Home/HomeContainer'
import CategoryContainer from '../screens/Category/CategoryContainer'
import ProfileContainer from '../screens/SettingProfile/ProfileContainer'
import CartContainer from '../screens/Cart/CartContainer'
import EventContainer from '../screens/Reward/EventContainer'
import ProductDetailContainer from '../screens/ProductDetail/ProductDetailContainer'
import LoginContainer from '../screens/Auth/Login/LoginContainer'
import ConfirmCodeContainer from '../screens/Auth/ConfirmCode/ConfirmCodeContainer'
import UpdateInformationContainer from '../screens/SettingProfile/UpdateInformation/UpdateInformationContainer'
import PointContainer from '../screens/SettingProfile/Points/PointContainer'
import RewardContainer from '../screens/SettingProfile/Reward/RewardContainer'
import OrderContainer from '../screens/SettingProfile/Order/OrderContainer'
import OrderHistoryContainer from '../screens/SettingProfile/OrderHistory/OrderHistoryContainer'

enableScreens()
const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

const APP_TAB = () => {
  const TabBar = (props: any) => (
    <BlurView
      style={{
        bottom: 0,
        left: 0,
        right: 0,
        overflow: 'hidden',
      }}
      blurType="material"
      blurAmount={100}>
      <BottomTabBar {...props} />
    </BlurView>
  )
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = 'home'
          let label = ''
          if (route.name === 'Home') {
            iconName = focused ? 'shop' : 'shop'
            label = 'Home'
          } else if (route.name === 'Category') {
            iconName = focused ? 'archive' : 'archive'
          } else if (route.name === 'Event') {
            iconName = focused ? 'open-book' : 'open-book'
          } else if (route.name === 'Cart') {
            iconName = focused ? 'shopping-cart' : 'shopping-cart'
          } else if (route.name === 'Profile') {
            iconName = focused ? 'user' : 'user'
          }
          return (
            <View>
              <FontAwesome name={iconName} size={25} color={color} />
            </View>
          )
        },
      })}
      tabBar={TabBar}
      tabBarOptions={{
        activeTintColor: modules.ACTIVE,
        inactiveTintColor: modules.SUB_TITLE,
        style: {
          backgroundColor: Platform.OS == 'ios' ? 'transparent' : modules.WHITE,
        },
        showLabel: true,
      }}>
      <Tab.Screen name="Home" component={HomeContainer} />
      <Tab.Screen name="Category" component={CategoryContainer} />
      <Tab.Screen name="Event" component={EventContainer} />
      <Tab.Screen name="Cart" component={CartContainer} />
      <Tab.Screen name="Profile" component={ProfileContainer} />
    </Tab.Navigator>
  )
}

const Tab_Stack = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, gestureEnabled: false }}>
      <Stack.Screen name="Welcome" component={WelcomeContainer} />
      <Stack.Screen name="Home" component={APP_TAB} />
    </Stack.Navigator>
  )
}
export default () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false}}>
        <Stack.Screen name="Home" component={Tab_Stack} />
        <Stack.Screen name="ProductDetail" component={ProductDetailContainer} />
        <Stack.Screen name="Login" component={LoginContainer} />
        <Stack.Screen name="ConfirmCode" component={ConfirmCodeContainer} />
        <Stack.Screen name="UpdateInformation" component={UpdateInformationContainer} />
        <Stack.Screen name={"Point"} component={PointContainer} />
        <Stack.Screen name={"Reward"} component={RewardContainer} />
        <Stack  .Screen name={"Order"} component={OrderContainer} />
        <Stack  .Screen name={"OrderHistory"} component={OrderHistoryContainer} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
