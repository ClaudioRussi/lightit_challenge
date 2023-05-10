import { Text, View } from "react-native";
import Logo from "./logo";
import SaveDropDown from "./saveDropDown";

function Header() {
    return ( 
        <View className="w-full h-[50px] flex flex-row bg-black">
            <View className="flex flex-row items-start">
                <View className="flex flex-col justify-around h-full">
                    <Logo/>
                </View>
                <View className="flex flex-col h-full ml-5 justify-around w-[100px]">
                    <Text className="text-white">Editar medidas</Text>
                </View>
            </View>
            <View className="flex flex-row justify-end">
                <View className="flex flex-col h-full ml-5 justify-around w-[100px]">
                    <Text className="text-white">Nuevo proyecto</Text>
                </View>
                <View className="flex flex-col justify-around h-full">
                    <SaveDropDown/>
                </View>
            </View>
        </View>
    );
}

export default Header;