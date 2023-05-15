import { TouchableOpacity, Text, Image } from "react-native";

function Logo() {
    return ( 
        <TouchableOpacity onPress={() => {console.log("Pressed logo");}} className={`justify-center w-[50px] h-[50px] text-blue`}>
            <Image className="inset-0 w-full h-full -ml-[6px]" source={require("../assets/Logo.png")}/>
        </TouchableOpacity>
    );
}



export default Logo;