import React, { useRef, useState } from 'react';
import {
  FlatList,
  Text,
  TouchableOpacity,
  Modal,
  Image,
  View,
} from 'react-native';

const options = [
    {
        label: "Guardar y salir",
        value: 0
    },
    {
        label:"Salir sin guardar",
        value: 1
    },
    {
        label: "Guardar y continuar",
        value: 2
    }
];

const Dropdown = () => {
  const DropdownButton = useRef();
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState(options[0]);
  const [dropdownTop, setDropdownTop] = useState(0);

  const toggleDropdown = () => {
    visible ? setVisible(false) : openDropdown();
  };

  const openDropdown = () => {
    DropdownButton.current.measure((_fx, _fy, _w, h, _px, py) => {
      setDropdownTop(py + h);
    });
    setVisible(true);
  };

  const onItemPress = (item) => {
    setSelected(item);
    setVisible(false);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity className={` border-gray-200 p-[10px] ${item.value < 2 ? "border-b-[1px]": ""}`} onPress={() => onItemPress(item)}>
      <Text className="text-lg">{item.label}</Text>
    </TouchableOpacity>
  );

  const renderDropdown = () => {
    return (
      <Modal visible={visible} transparent animationType="none">
        <TouchableOpacity
            className="relative w-full h-full justify-end items-end"
          onPress={() => setVisible(false)}
        >
          <View className="absolute w-[210px] right-5 lg:right-40 rounded-md bg-white shadow-black shadow-sm drop-shadow-md" style={{ top: dropdownTop }}>
            <FlatList
              data={options}
              renderItem={renderItem}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    );
  };

  return (
    <TouchableOpacity
      ref={DropdownButton}
      className="relative flex-row justify-between items-center w-[210px] rounded-md bg-white my-[10px] z-[1]"
      onPress={toggleDropdown}
    >
      {renderDropdown()}
      
        <Text className="text-center text-lg py-1 pl-2 w-50">
            {selected.label}
        </Text>
      <View className="h-full justify-center border-l-[1px] border-gray-200 pl-3 ">
        <Image className="-rotate-90 w-6 h-6 mt-3 mb-2 mr-3" source={require("../assets/activo.png")}/>
      </View>
    </TouchableOpacity>
  );
};

export default Dropdown;