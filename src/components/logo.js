import { TouchableOpacity, Text } from "react-native";

function Logo() {
    return ( 
        <TouchableOpacity className={`bg-white justify-center w-[50px] ml-3 text-blue`}>
            <Text className="text-black text-center text-lg ">
                Logo
            </Text>
        </TouchableOpacity>
    );
}

export default Logo;