import { View, Text, Image  } from "react-native";
import NavBarButton from "./navBarButton";
import { useState, useContext } from "react";
import Drawer from "./drawer";
import { DrawerContext, TabContext } from "../context/context";

const tabs = [
    {
        imgUrl: require("../assets/Aberturas.png"),
        text: "Aberturas",
        url: "https://us-central1-prueba-front-280718.cloudfunctions.net/aberturas"
    },
    {
        imgUrl: require("../assets/Equipamiento.png"),
        text: "Equipamiento",
        url: "https://us-central1-prueba-front-280718.cloudfunctions.net/equipamiento"
    },
    {
        imgUrl: require("../assets/Terminaciones.png"),
        text: "Terminaciones",
        url: "https://us-central1-prueba-front-280718.cloudfunctions.net/terminaciones"
    }
]

function NavBar() {
    const [selectedTab, setSelectedTab] = useState();
    const [selectedCategory, setSelectedCategory] = useState();
    const [data, setData] = useState();
    const [loading, setLoading] = useState(false);
    const {showDrawer, setShowDrawer} = useContext(DrawerContext); 

    const onPress = (index) => {
        setSelectedCategory();
        setLoading(true);
        if (index === selectedTab) {
            setSelectedTab();
            setShowDrawer(false);
            return;
        }
        else {
            setSelectedTab(index);
            setShowDrawer(true);
        }

        fetch(tabs[index].url)
        .then(response => response.json())
        .then(json => {
            setData(json);
            setLoading(false);
        })
        .catch(error => {
            setLoading(false);
            console.error(error);
        });

    }

    const closeDrawer = () => {
        setShowDrawer(false);
        setSelectedTab();
    }
    return ( 
        <View className="z-10 h-[90%] flex flex-row">
            <View className="h-full w-[20%] lg:w-[7%] justify-center bg-navbar flex flex-col">
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
            <TabContext.Provider value={{data, tab: tabs[selectedTab], selectedCategory, setSelectedCategory}}>
                <Drawer isVisible={showDrawer} loading={loading} close={closeDrawer}/>
            </TabContext.Provider>
        </View>
    );
}

export default NavBar;