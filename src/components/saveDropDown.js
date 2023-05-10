import { TouchableOpacity, Text } from "react-native";

function SaveDropDown() {
    return ( 
        <TouchableOpacity className="bg-white">
            <Text className="text-black text-left ">
                Guardar y salir
            </Text>
        </TouchableOpacity>
    );
}

export default SaveDropDown;