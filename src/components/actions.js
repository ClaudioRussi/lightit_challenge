import { TouchableOpacity, Text, View } from "react-native";

function Actions({style}) {
    return ( 
        <View className="hidden absolute z-10 pt-5 top-[10%] right-5 h-20 w-20 lg:flex justify-end items-center flex-row gap-5" style={style}>
            <TouchableOpacity onPress={() => {console.log("Pressed fijar")}} activeOpacity={1} className="rounded-floatingButton justify-center items-center bg-navbar flex flex-col w-24 h-12" >
                <Text className="text-center text-lg">Fijar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {console.log("Pressed borrar")}} activeOpacity={1} className="rounded-floatingButton justify-center items-center bg-navbar flex flex-col w-24 h-12" >
                <Text className="text-center text-lg">Borrar</Text>
            </TouchableOpacity>
        </View>
     );
}

export default Actions;