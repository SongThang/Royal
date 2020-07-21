import * as React from 'react';
import { View, StyleSheet, Text, SafeAreaView, Platform, TextInput, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import modules from '../../../modules';
import {
    TextField,
    FilledTextField,
    OutlinedTextField,
} from 'react-native-material-textfield';
import { useNavigation } from '@react-navigation/native';
import { fontGSans, FontGSansBold, FontGSansSemiBold } from '../../../../functions/customFont';


interface Props {
}

export default ({ }: Props) => {
    const navigation = useNavigation()
    return (
        <View style={styles.containerFluid}>
            <SafeAreaView />
            <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.goBack()}>
                <Icon style={styles.headIcon} name="chevron-left" />
            </TouchableOpacity>
            <View style={styles.container}>
                <View style={{ flex: 1, }}>
                    <View style={styles.groupImg}>
                        <Image style={styles.logo} source={require('../../../Images/logo.png')} />
                    </View>
                    <Text style={styles.title}>Enter your phone number</Text>
                    <Text style={styles.text}>We will send you 6 digits verification code</Text>
                    <View style={{ paddingTop: modules.PADDING * 2, }}>
                        <OutlinedTextField
                            label='+855 | 012345678'
                            keyboardType='phone-pad'
                            tintColor="#888"
                            autoFocus
                            style={styles.number}
                        />
                    </View>
                </View>
                <View style={{ flex: 1, }}>
                    <TouchableOpacity activeOpacity={0.8} style={styles.button} onPress={()=>navigation.navigate('ConfirmCode')}>
                        <Text style={styles.textButton}>CONTINUE</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    );
}
const styles = StyleSheet.create({
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
    containerFluid: {
        flex: 1,
    },
    container: {
        paddingHorizontal: modules.PADDING,
        flex: 1,
    },
    title: {
        textAlign: "center",
        paddingTop: modules.PADDING,
        fontSize: modules.FONT_H4,
        ...fontGSans,
        color: modules.TEXT,
    },
    text: {
        textAlign: "center",
        ...fontGSans,
        fontSize: modules.FONT_H5,
        color: modules.SUB_TEXT,
    },
    headIcon: {
        fontSize: modules.FONT_H2,
        paddingHorizontal: modules.PADDING,
        paddingTop: Platform.OS === 'ios' ? 0 : modules.PADDING,
    },
    groupImg: {
        width: '100%',
        alignItems: "center",
        marginTop: modules.PADDING * 2.5,
    },
    logo: {
        width: 120,
        height: 120,
        resizeMode: "contain",
    },
    number:{
        ...FontGSansSemiBold,
        fontSize: modules.FONT_H3,
        color: modules.SUB_TEXT,
    },
});
