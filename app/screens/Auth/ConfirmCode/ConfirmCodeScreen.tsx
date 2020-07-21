import React, { useState } from 'react';
import { View, StyleSheet, Text, SafeAreaView, TouchableOpacity, Image, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import modules from '../../../modules';
import { FontGSansBold, fontGSans } from '../../../../functions/customFont';
import { useNavigation } from '@react-navigation/native';
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';

interface Props {
}

export default ({ }: Props) => {
    const navigation = useNavigation()
    // const App = () => {
    const [value, setValue] = useState('');
    const CELL_COUNT = 6;
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });
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
                    <Text style={styles.title}>Enter your phone code</Text>
                    <Text style={styles.text}>We will sent you 6 digits verification code</Text>
                    <View style={{paddingTop: modules.PADDING,}}>
                        <CodeField
                            ref={ref}
                            {...props}
                            value={value}
                            onChangeText={setValue}
                            cellCount={CELL_COUNT}
                            rootStyle={styles.codeFieldRoot}
                            keyboardType="number-pad"
                            textContentType="oneTimeCode"
                            renderCell={({ index, symbol, isFocused }) => (
                                <Text
                                    key={index}
                                    style={[styles.cell, isFocused && styles.focusCell]}
                                    onLayout={getCellOnLayoutHandler(index)}>
                                    {symbol || (isFocused ? <Cursor /> : null)}
                                </Text>
                            )}
                        />
                    </View>
                </View>
                <View style={{ flex: 1, }}>
                    <TouchableOpacity activeOpacity={0.8} style={styles.button} onPress={()=>navigation.navigate('Home')}>
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

    root: { flex: 1, padding: 20 },
    codeFieldRoot: { marginTop: 20 },
    cell: {
        width: 45,
        height: 50,
        lineHeight: 38,
        fontSize: 24,
        borderWidth: 2,
        borderColor: '#00000030',
        textAlign: 'center',
    },
    focusCell: {
        borderColor: modules.TEXT,
    },
});
