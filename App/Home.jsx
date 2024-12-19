import { useNavigation } from "@react-navigation/native"
import { FlatList, Image, Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native"
import Animated, { FadeInDown, SharedTransition, withSpring } from "react-native-reanimated"


const DataLoop = [
    { name: "Biryani", rollNo: 1, description: "preffered Biryani", image: require("./ASSETS/PNG/biryani.jpg"), },
    { name: "Burger", rollNo: 2, description: "spicey ham Burger", image: require("./ASSETS/PNG/burger.png") },
    { name: "Himalayan", rollNo: 3, description: "beautifuly cenary", image: require("./ASSETS/PNG/himalayan.png") },
    { name: "Himalayan Mountain", rollNo: 4, description: "beautifuly cenary MountEverest", image: require("./ASSETS/PNG/himalayanMountained.png") },
    { name: "Leg Piece", rollNo: 5, description: "Leg Piece Plate", image: require("./ASSETS/PNG/legPiece.jpg") },
    { name: "Lunch", rollNo: 6, description: "Lunch Box plate", image: require("./ASSETS/PNG/lunch.jpg") },
    { name: "meatDishwithvegetables", rollNo: 7, description: "Dish work help You good taste", image: require("./ASSETS/PNG/meatDishwithvegetables.jpg") },
]
const Home = ({ navigation }) => {

    return (
        <SafeAreaView style={Style.Container}>
            <Text style={Style.headingArrangement}>Popular Single Page Animation  </Text>
            <FlatList
                data={DataLoop}
                renderItem={({ item, index }) => {
                    return (
                        <Animated.View entering={FadeInDown.delay(300 * index)} key={index} >
                            <Pressable onPress={() => navigation.navigate('Single', { item: item })} style={Style.cardSContainer}>
                                <Animated.Image
                                    sharedTransitionTag={item.name}
                                    source={item.image}
                                    onPress={() => navigation.navigate('Single', { item: item })}
                                    style={Style.imageSCard}
                                />
                                <Text style={{ fontSize: 15, fontWeight: "500", }}>{item.name}</Text>
                            </Pressable>
                        </Animated.View>
                    )
                }}
                keyExtractor={item => item.rollNo}
            />
        </SafeAreaView>
    )
}
export default Home

const Style = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: "white",

    },
    headingArrangement: {
        marginLeft: 10,
        fontSize: 20,
        fontWeight: "600",
        marginBottom: 20
    },
    cardSContainer: {
        flexDirection: "row",
        backgroundColor: "#fff",
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 10,
        width: "95%",
        alignSelf: "center",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 10,
    },
    imageSCard: {
        width: 100,
        height: 100,
        marginRight: 30,
        borderRadius: 10,
    },

})