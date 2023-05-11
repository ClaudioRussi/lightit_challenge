import { View, Text, TouchableOpacity, Image } from "react-native";

function DrawerButton({text, onPress, style}) {
    return (  
        <TouchableOpacity onPress={onPress} className="flex-row h-[50px] pl-4 bg-white rounded-lg justify-around" style={style}>
            <View className="w-[80%] h-full justify-around">
                <Text className="text-lg">
                    {text}
                </Text>
            </View>
            <View className="w-[20] h-full justify-around">
                <Image className="w-4 h-4 rotate-180" source={require("../assets/activo.png")} />
            </View>
        </TouchableOpacity>
    );
}

export default DrawerButton;