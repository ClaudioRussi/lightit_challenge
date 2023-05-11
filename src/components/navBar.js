import { View, Text, Image  } from "react-native";
import NavBarButton from "./navBarButton";
import { useState, useContext } from "react";
import Drawer from "./drawer";
import { DrawerContext } from "../context/context";

const tabs = [
    {
        imgUrl: require("../assets/Aberturas.png"),
        text: "Aberturas"
    },
    {
        imgUrl: require("../assets/Equipamiento.png"),
        text: "Equipamiento"
    },
    {
        imgUrl: require("../assets/Terminaciones.png"),
        text: "Terminaciones"
    }
]

function NavBar() {
    const [selectedTab, setSelectedTab] = useState();
    const {showDrawer, setShowDrawer} = useContext(DrawerContext); 

    const onPress = (index) => {
        if (index === selectedTab) {
            setSelectedTab(undefined);
            setShowDrawer(false);
        }
        else {
            setSelectedTab(index);
            setShowDrawer(true);
        }
    }
    return ( 
        <View className="z-10 h-[90%] w-full flex flex-row">
            <View className="h-full w-[20%] justify-center bg-navbar flex flex-col">
                <View className={`h-16 bg-drawer`}>
                    <NavBarButton isPrevious={selectedTab === 0}/>
                </View>
                {tabs.map( (tab, index) => {
                    const isSelected = selectedTab === index;
                    const isPrevious = selectedTab === index + 1;
                    const isNext = selectedTab === index - 1;
                    return (
                        <View key={index} className={`h-16 ${isSelected ? "bg-navbar" : "bg-drawer"}`}>
                            <NavBarButton onPress={() => onPress(index)} isNext={isNext} isPrevious={isPrevious} isSelected={isSelected}>
                                <Image className="w-10 h-10 flex self-center" source={tab.imgUrl}/>
                                <Text className="text-text text-center text-xs ">
                                    {tab.text}
                                </Text>
                            </NavBarButton>
                        </View>
                    );
                })}
                <View className={`h-16 bg-drawer`}>
                    <NavBarButton isNext={selectedTab === tabs.length - 1}/>
                </View>
            </View>
            <Drawer isVisible={showDrawer} tab={tabs[selectedTab]}/>
        </View>
    );
}

export default NavBar;