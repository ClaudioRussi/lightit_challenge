import { TouchableOpacity} from "react-native";

function NavBarButton({isSelected, children, onPress, isNext, isPrevious}) {
    let classes;
    if (isSelected) {
        classes = "bg-drawer";
    }
    else if (isPrevious) {
        classes = "bg-navbar rounded-br-3xl";
    }
    else if (isNext) {
        classes = "bg-navbar rounded-tr-3xl";
    }
    else {
        classes = "bg-navbar";
    }
    return (
        <TouchableOpacity activeOpacity={1} onPress={onPress} className={`${classes} justify-center flex flex-col w-full h-16`}>
            {children}
        </TouchableOpacity>
    );
}

export default NavBarButton;