import { Text, TouchableOpacity } from "react-native"

import { FeatherIcon } from "../common"
import { theme_secondary_color } from "@/constants"

interface ButtonType {
    text: React.ReactNode;
    onPress?: () => void;
    bgColor?: string | undefined;
    textColor?: string | undefined;
    buttonLoader?: boolean | undefined;
}

const Button = ({
    text,
    onPress,
    bgColor = "bg-primary-color",
    textColor = "text-secondary-color",
    buttonLoader = false,
}: ButtonType) => {
    return (
        <TouchableOpacity
            className={`h-[52px] rounded-3xl flex flex-row justify-center items-center gap-2 ${bgColor}`}
            onPress={onPress}
            activeOpacity={0.9}
            disabled={buttonLoader}
        >
            <Text className={`font-cormorant-semibold text-base leading-5 tracking-base ${textColor}`}>
                {text}
            </Text>
            {buttonLoader && <FeatherIcon
                icon={"theme-loader"}
                iconWidth={20}
                iconHeight={20}
                iconStrokeColor={theme_secondary_color}
            />}
        </TouchableOpacity>
    )
}

export default Button