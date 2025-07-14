import { TouchableOpacity, View } from "react-native"

import { theme_primary_color } from "@/constants"

import FeatherIcon from "./feather-icon"

const Header = ({
    children
}: {
    children: React.ReactNode
}) => {
    return (
        <View className="flex flex-col gap-9 flex-1">
            <TouchableOpacity className="pl-[10px] pr-5 mt-[70px]">
                <FeatherIcon
                    icon={"chevron-left"}
                    iconWidth={36}
                    iconHeight={36}
                    iconFillColor={theme_primary_color}
                />
            </TouchableOpacity>
            <View className="px-5">
                {children}
            </View>
        </View>
    )
}

export default Header