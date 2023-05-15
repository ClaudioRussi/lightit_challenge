import { View, Text, TouchableOpacity, Image, ScrollView, ActivityIndicator, TouchableWithoutFeedback, FlatList, StyleSheet } from "react-native";
import DrawerButton from "./drawerButton";
import { useContext } from "react";
import { TabContext } from "../context/context";
import Actions from "./actions";

function Drawer({isVisible, loading, close}) {
    const {data, tab, selectedCategory, setSelectedCategory} = useContext(TabContext);
    const onPress = () => {
        if (selectedCategory) {
            setSelectedCategory();
        }
    }

    const renderItem = ({item}) => {
        return (
            <View key={item.name} className="flex flex-col w-20 lg:w-28 justify-center">
                <Image className="w-20 lg:w-28 justify-center h-20 lg:h-28" source={{uri: item.img}} />
                <Text className="w-full text-center text-xs lg:text-sm pt-2">{item.name}</Text>
            </View>
        )
    }

    return (
        <View className={`${!isVisible ? "hidden" : ""} h-full bg-drawer p-0 m-0 w-[80%] lg:w-[40%]`}>
            <View className="w-[90%] flex flex-col self-center">
                {tab && <TouchableOpacity onPress={onPress} className="w-full pb-2 pt-2"><Text className={`${selectedCategory ? "text-sm text-grayText" : "text-xl text-text"} -tracking-[0.2px] font-bold`}>{selectedCategory && "< "}{tab.text}</Text></TouchableOpacity>}
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
                    <Text className="text-xl font-bold mb-3 -tracking-[0.2px] text-text">{selectedCategory.name}</Text>
                    <FlatList
                        className="w-full"
                        data={selectedCategory.items}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.name}
                        contentContainerStyle={styles.listContainer}
                    />
                </View>
            )}
            <View className="h-full hidden lg:flex justify-center items-center absolute -right-[30]">
                <TouchableOpacity activeOpacity={1} onPress={close} className=" bg-drawer justify-center rounded-r-3xl items-center h-[70px] w-[30px]"><Image className="w-4 h-4" source={require("../assets/activo.png")} /></TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    listContainer: {
      flexDirection: 'row',
      width: '100%',
      margin: 0,
      justifyContent: 'space-between',
      alignItems: 'flex-start'
    },
  });
  

export default Drawer;