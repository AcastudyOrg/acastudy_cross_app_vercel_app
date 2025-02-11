import { StyleSheet } from 'react-native';
import { SIZE, COLORS, FONT } from '../../../constants';

export const tutorProfileStyles = StyleSheet.create({
    tutorProfileContainer: {
        paddingBottom: 50,
    },
    availabilitySection: {
        top: 20,
        padding: 20,
    },
    availability: {
        fontSize: SIZE.l,
        fontFamily: FONT.plusJakartaBold,
        color: COLORS.white,
        bottom: 20,
    },
})
