import { Image, TouchableOpacity, View } from "react-native";
import Logo from "../components/logo";
import Header from "../components/header";
import NavBar from "../components/navBar";
import { DrawerContext } from "../context/context";
import { useState } from "react";
import Navigation from "../components/navigation";
import Actions from "../components/actions";

function Home() {
    const [showDrawer, setShowDrawer] = useState(false);
    return (
        <DrawerContext.Provider value={{showDrawer, setShowDrawer}}>
            <View className="w-full h-full bg-gray-400">
                <Header/>
                <NavBar />
                {showDrawer && <Actions />}
                <Navigation className={`${showDrawer ? "hidden lg:flex" : ""}`} />
            </View>
        </DrawerContext.Provider>
    );
}

export default Home;