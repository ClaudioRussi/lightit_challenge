import { View, TouchableOpacity, Image } from "react-native";

function Navigation ({style}) {
    return ( 
        <View className="absolute z-10 bottom-5 right-5 flex flex-row gap-5" style={style}>
            <View className="bg-navbar w-[30px] h-[60px] items-center rounded-floatingButton justify-around">
                <TouchableOpacity onPress={() => console.log("Pressed +")}><Image className="w-[20px] h-[20px]" source={require("../assets/+.png")}/></TouchableOpacity>
                <TouchableOpacity onPress={() => console.log("Pressed -")}><Image className="w-[20px] h-[20px]" source={require("../assets/-.png")}/></TouchableOpacity>
            </View>
            <View className="bg-navbar w-[60px] h-[60px] rounded-floatingButton flex flex-col items-center justify-center">
                <TouchableOpacity onPress={() => console.log("Pressed up")}><Image className="w-[20px] h-[20px] -mb-1" source={require("../assets/Flecha.png")}/></TouchableOpacity>
                <View className="flex flex-row w-full justify-between">
                    <TouchableOpacity onPress={() => console.log("Pressed left")}><Image className="w-[20px] -rotate-90 ml-1 h-[20px]" source={require("../assets/Flecha.png")}/></TouchableOpacity>
                    <TouchableOpacity onPress={() => console.log("Pressed right")}><Image className="w-[20px] rotate-90 mr-1 h-[20px]" source={require("../assets/Flecha.png")}/></TouchableOpacity>
                </View>
                <TouchableOpacity onPress={() => console.log("Pressed bottom")}><Image className="w-[20px] h-[20px] -mt-1 rotate-180" source={require("../assets/Flecha.png")}/></TouchableOpacity>
            </View>
        </View>
     );
}

export default Navigation;