import { View, Text, TouchableOpacity, Image, ScrollView, ActivityIndicator } from "react-native";
import DrawerButton from "./drawerButton";
import { useContext, useState } from "react";
import { TabContext } from "../context/context";

function Drawer({isVisible, loading}) {
    const {data, tab, selectedCategory, setSelectedCategory} = useContext(TabContext);
    const onPress = () => {
        if (selectedCategory) {
            setSelectedCategory();
        }
    }
    if (!isVisible) {
        return <></>
    }
    return (
        <View className={"h-full bg-drawer p-0 m-0 w-[80%]"}>
            <View className="w-[90%] flex flex-col self-center">
                {tab && <TouchableOpacity onPress={onPress} className="w-full pb-2 pt-2"><Text className={`${selectedCategory ? "text-sm text-grayText" : "text-lg text-text"} -tracking-[0.2px] font-bold`}>{selectedCategory && "< "}{tab.text}</Text></TouchableOpacity>}
                {
                    (!selectedCategory && data && !loading) && (<View>
                        {
                            data.map((val, index) => {
                                return(
                                    <DrawerButton onPress={() => {setSelectedCategory(val)}} key={val.name} text={val.name} className={`${index === 0 && "mb-4"}`}/>
                                );
                            })
                        }
                    </View>)
                }
                {
                    (loading) && (
                        <View className="w-full p-20 items-center justify-around">
                            <ActivityIndicator size="large"/>
                        </View>
                    )
                }
            </View>
            {selectedCategory && (
                <View className="w-[90%] h-full flex flex-col p-0 m-0 self-center items-around">
                    <Text className="text-lg font-bold mb-3 -tracking-[0.2px] text-text">{selectedCategory.name}</Text>
                    <View className="flex-row w-full m-0 flex justify-between items-start">
                        {
                            selectedCategory.items.map((item, index) => {
                                return (
                                    <View key={index} className="flex flex-col w-20 justify-center">
                                        <Image className="w-20 justify-center h-20" source={{uri: item.img}} />
                                        <Text className="w-full text-center text-xs pt-2">{item.name}</Text>
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