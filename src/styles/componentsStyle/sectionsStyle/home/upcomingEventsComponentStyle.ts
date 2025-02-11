import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZE } from "../../../../constants";


export const upcomingEventsComponentStyles = StyleSheet.create({
    container: {
        marginRight: 15,
    },
    upcomingEventsContentContainer: {
        flexDirection: 'row',
        paddingVertical: 8,
        paddingRight: 8,
        paddingLeft: 14,
        borderRadius: 5,
        gap: 7,
    },
    upcomingImageContainer: {
        flexDirection: 'column',
    },
    upcomingImageItem: {
        height: 55,
        borderRadius: 5
    },
    upcomingTextCardContainer: {
        flexDirection: 'column',
        flex: 1,
        gap: 2,
    },
    upcomingTextCardTitle: {
        color: COLORS.white,
        fontSize: SIZE.sm,
        fontFamily: FONT.plusJakartaBold,
    },
    upcomingTextCardNormal: {
        color: COLORS.white,
        fontSize: SIZE.s,
        fontFamily: FONT.plusJakartaExtraLight,
        opacity: 0.8
    },
    upcomingTextCard: {
        color: COLORS.white,
        fontSize: SIZE.xs,
        fontFamily: FONT.plusJakartaExtraLight,
        opacity: 0.5
    },
});
