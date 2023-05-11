import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import DrawerButton from "./drawerButton";
import { useState } from "react";

const data = {
    "Puertas": [
        {
            "name": "Puerta A",
            "imageUrl": "https://placehold.co/400x400.png"
        },
        {
            "name": "Puerta B",
            "imageUrl": "https://placehold.co/400x400.png"
        },
        {
            "name": "Puerta B",
            "imageUrl": "https://placehold.co/400x400.png"
        },
    ],
    "Ventanas": [
        {
            "name": "Ventana A",
            "imageUrl": "https://placehold.co/400x400.png"
        },
        {
            "name": "Ventana B",
            "imageUrl": "https://placehold.co/400x400.png"
        },
        {
            "name": "Ventana C",
            "imageUrl": "https://placehold.co/400x400.png"
        },
    ]
};

function Drawer({isVisible, tab}) {
    const [selectedCategory, setSelectedCategory] = useState("");
    const onPress = () => {
        if (selectedCategory !== "") {
            setSelectedCategory("");
        }
    }
    if (!isVisible) {
        return <></>
    }
    return (
        <View className={"h-full bg-drawer p-0 m-0 w-[80%]"}>
            <View className="w-[90%] flex flex-col self-center">
                {tab && <TouchableOpacity onPress={onPress} className="w-full pb-2 pt-2"><Text className={`${selectedCategory !== "" ? "text-sm" : "text-2xl font-bold -tracking-[0.2px]"} text-text`}>{selectedCategory !== "" && "< "}{tab.text}</Text></TouchableOpacity>}
                {selectedCategory === "" && (<View>
                    {
                        Object.keys(data).map((key, index) => {
                            return(
                                <DrawerButton onPress={() => {setSelectedCategory(key)}} key={key} text={key} className={`${index === 0 && "mb-4"}`}/>
                            );
                        })
                    }
                </View>)}
            </View>
            {selectedCategory !== "" && (
                <View className="w-[90%] h-full flex flex-col p-0 m-0 self-center items-around">
                    <Text className="text-lg font-bold -tracking-[0.2px] text-text">{selectedCategory}</Text>
                    <View className="flex-row w-full m-0 flex justify-between">
                        {
                            data[selectedCategory].map((val, index) => {
                                return (
                                    <View key={index} className="flex flex-col w-20 justify-center">
                                        <Image className="w-20 justify-center h-20" source={{uri: val.imageUrl}} />
                                        <Text className="w-full text-center">{val.name}</Text>
                                    </View>
                                )
                            })
                        } 
                    </View>
                </View>
            )}
        </View>
    );
}

export default Drawer;