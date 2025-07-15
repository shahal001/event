import { Text, TouchableOpacity, View } from "react-native";

import { FeatherIcon } from "@/components/common";
import { theme_primary_color } from "@/constants";

const ScreenLayout = ({
    children,
    showBackIcon = true,
    skipText = ``,
    onSkipPress,
    onBackPress,
}: {
    children: React.ReactNode;
    showBackIcon?: boolean | undefined;
    skipText?: string | undefined;
    onSkipPress?: () => void;
    onBackPress?: () => void;
}) => {
    return (
        <View className="flex flex-col gap-9 flex-1">
            {(showBackIcon || skipText) && (
                <View className="flex flex-row items-center justify-between pr-5">
                    {showBackIcon && (
                        <TouchableOpacity
                            className="pl-[10px] pr-5 mt-[50px]"
                            onPress={onBackPress}>
                            <FeatherIcon
                                icon={"chevron-left"}
                                iconWidth={36}
                                iconHeight={36}
                                iconFillColor={theme_primary_color}
                            />
                        </TouchableOpacity>
                    )}
                    {skipText !== "" && (
                        <TouchableOpacity onPress={onSkipPress}>
                            <Text className="font-cormorant-regular text-sm leading-5 tracking-sm text-primary-color mt-[50px]">
                                {skipText}
                            </Text>
                        </TouchableOpacity>
                    )}
                </View>
            )}
            <View className={`px-5 ${!showBackIcon && !skipText && "mt-[122px]"}`}>
                {children}
            </View>
        </View>
    )
}

export default ScreenLayout