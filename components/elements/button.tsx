import { Text, TouchableOpacity } from "react-native"

import { FeatherIcon } from "@/components/common"
import { activeButtonOpacity, theme_secondary_color } from "@/constants"

interface ButtonProps {
    text: React.ReactNode;
    onPress?: () => void;
    bgColor?: string | undefined;
    textColor?: string | undefined;
    buttonLoader?: boolean | undefined;
    prefixIcon?: boolean | undefined;
    prefixIconName?: string | undefined;
    prefixIconWidth?: number | undefined;
    prefixIconHeight?: number | undefined;
}

const Button = ({
    text,
    onPress,
    bgColor = "bg-primary-color",
    textColor = "text-secondary-color",
    buttonLoader = false,
    prefixIcon = false,
    prefixIconName = "google",
    prefixIconWidth = 16,
    prefixIconHeight = 16,
}: ButtonProps) => {

    return (
        <TouchableOpacity
            className={`h-[52px] rounded-3xl flex flex-row justify-center items-center gap-2 ${bgColor}`}
            onPress={onPress}
            activeOpacity={activeButtonOpacity}
            disabled={buttonLoader}
        >
            {prefixIcon && (
                <FeatherIcon
                    icon={prefixIconName}
                    iconWidth={prefixIconWidth}
                    iconHeight={prefixIconHeight}
                    iconStrokeColor={theme_secondary_color}
                />
            )}
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