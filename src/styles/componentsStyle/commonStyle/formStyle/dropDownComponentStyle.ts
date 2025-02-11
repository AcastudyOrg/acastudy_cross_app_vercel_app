import { StyleSheet } from 'react-native';
import { COLORS, FONT, SIZE } from '../../../../constants';

export const dropDownComponentStyles = StyleSheet.create({
    container: {
        marginVertical: 10
    },
    label: {
        fontSize: SIZE.m,
        marginBottom: 4,
        color: COLORS.white,
    },
    inputContainer: {
        width: '100%',
        height: 43,
    },
    input: {
        flex: 1,
        height: 43,
        borderRadius: 5,
        paddingHorizontal: 10,
        backgroundColor: "rgba(255,255,255,.1)",
    },
    itemContainer: {
        top: 5,
        borderRadius: 10,
        borderColor: COLORS.skyBlue,
        backgroundColor: COLORS.darkBlue,
    },
    itemText: {
        color: COLORS.lightGray,
        fontSize: SIZE.m,
        fontFamily: FONT.plusJakartaRegular,
    },
    selectedText: {
        color: COLORS.white,
        fontSize: SIZE.m,
        fontFamily: FONT.plusJakartaRegular,
    },
    placeholderText: {
        fontSize: SIZE.m,
        fontFamily: FONT.plusJakartaRegular,
        color: COLORS.white50Percent,
    },
    iconStyle: {
        tintColor: COLORS.white
    },
    searchInput: {
        color: 'white',
        margin: 10,
        minHeight: 40,
        borderRadius: 5,
        paddingLeft: 10,
        fontSize: SIZE.sm,
        fontFamily: FONT.plusJakartaMedium,
        backgroundColor: "rgba(255,255,255,.1)",
    },
    errorText: {
        marginTop: 4,
        fontSize: 12,
        color: 'red',
    },
});
