import { Text, View } from "react-native";
import Logo from "./logo";
import Dropdown from "./Dropdown";

function Header() {
    return ( 
        <View className="w-full h-[10%] px-5 lg:px-40 flex flex-row justify-between bg-header">
            <View className="flex flex-row w-[1/2] items-start">
                <View className="flex flex-col justify-around h-full">
                    <Logo/>
                </View>
            </View>
            <View className="flex flex-row w-[1/2] items-end overflow-hidden">
                <View className="flex flex-col justify-around h-full">
                    <Dropdown/>
                </View>
            </View>
        </View>
    );
}

export default Header;