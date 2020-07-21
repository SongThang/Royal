import * as React from 'react';
import { View, StyleSheet, Text, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';
import modules from '../../../modules';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { FontGSansBold, fontGSans } from '../../../../functions/customFont';


interface Props {
}

export default ({ }: Props) => {
  const navigation = useNavigation()
  return (
    <View style={styles.containerFluid}>
      <SafeAreaView />
      <TouchableOpacity style={styles.head} activeOpacity={0.7} onPress={() => navigation.goBack()}>
        <Icon style={styles.headIcon} name="chevron-left" />
      </TouchableOpacity>
      <View style={styles.container}>
        <View style={{ flex: 1, paddingHorizontal: modules.PADDING, }}>
          <Text style={styles.title}>Personal Info</Text>
          <View style={styles.group}>
            <Text style={styles.text}>FirstName</Text>
            <TextInput
              placeholder="User"
              style={styles.Input}
            />
          </View>
          <View style={styles.group}>
            <Text style={styles.text}>LastName</Text>
            <TextInput
              placeholder="Name"
              style={styles.Input}
            />
          </View>
          <View style={styles.group}>
            <Text style={styles.text}>Email</Text>
            <TextInput
              placeholder="email@gmail.com"
              style={styles.Input}
            />
          </View>
        </View>
        <View style={{ flex: 1, paddingHorizontal: modules.PADDING, }}>
          <TouchableOpacity activeOpacity={0.8} style={styles.button}>
            <Text style={styles.textButton}>UPDATE</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  group: {
    paddingTop: modules.PADDING,
  },
  text:{
    fontSize: modules.FONT,
    color: modules.TEXT,
    ...fontGSans,
  },
  Input: {
    marginTop: modules.BIG_SPACE,
    borderWidth: 1,
    borderColor: modules.SUB_TITLE,
    paddingHorizontal: modules.PADDING,
    paddingVertical: modules.BIG_SPACE + 4,
    fontSize: modules.FONT_H4,
    ...fontGSans,
    color: modules.SUB_TITLE,
    borderRadius: modules.BIG_SPACE,
  },
  containerFluid: {
    flex: 1,
    backgroundColor: modules.WHITE,
  },
  container: {
    flex: 1,
    backgroundColor: modules.BORDER_COLOR,
  },
  head: {
    paddingHorizontal: modules.PADDING,
    // paddingBottom: modules.BODY_HORIZONTAL_12,
  },
  headIcon: {
    fontSize: modules.FONT_H2,
    color: modules.TEXT,
  },
  button: {
    backgroundColor: modules.MAIN_COLOR,
    paddingVertical: modules.PADDING,
    borderRadius: modules.BIG_SPACE,
  },
  textButton: {
    ...FontGSansBold,
    fontSize: modules.FONT_H6,
    color: modules.WHITE,
    textAlign: "center",
  },
  title: {
    fontSize: modules.FONT_H2 - 2,
    paddingTop: modules.PADDING,
    ...FontGSansBold,
    color: modules.TEXT,
  },
});
