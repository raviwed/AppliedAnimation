import { useNavigation } from "@react-navigation/native";
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, useWindowDimensions, View } from "react-native"
import Animated, { FadeIn, FadeInDown, FadeInUp, SharedTransition, withSpring } from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Single = ({ navigation, route }) => {
    const { item } = route.params;
    const { width } = useWindowDimensions()
    return (
        <View style={Style.container}>
            <View style={{ position: "relative" }} >
                <Animated.View entering={FadeInDown.delay(500)} style={Style.headerContainer} >
                    <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.goBack()} >
                        <Image source={require('./ASSETS/PNG/backbutton.png')} style={{ height: 40, width: 40 }} />
                    </TouchableOpacity>
                    <Image source={require('./ASSETS/PNG/app.png')} style={{ height: 50, width: 50 }} />
                </Animated.View>
                <Animated.Image
                    sharedTransitionTag={item.name}
                    source={item.image}
                    resizeMode="cover"
                    style={{ height: width, width: width }}
                />
                <Animated.View style={Style.imageTranStion} entering={FadeInDown.delay(500)} >
                    <Text style={Style.boardTet} >{item.name}</Text>
                    <Text style={Style.boardTet}>{item.description}</Text>
                </Animated.View>
            </View>
            <View>
              
            </View>
        </View >
    )
}
export default Single

const Style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    imageTranStion: {
        width: "95%",
        alignSelf: "center",
        marginTop: 30,
        borderRadius: 10,
        position: "absolute",
        bottom: 5,
        padding: 15,
        backgroundColor: 'rgba(0,0,0,0.6)'
    },
    boardTet: {
        fontSize: 15,
        fontWeight: "700",
        textAlign: "center",
        color: "#fff"
    },
    headerContainer: {
        position: "absolute",
        top: 3,
        width: "95%",
        alignSelf: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        zIndex: 1,
    }
})