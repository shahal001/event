import { useFocusColor } from "@/hooks/useFocusColor"
import { Text, TouchableOpacity, View } from "react-native"

import { activeButtonOpacity } from "@/constants"

interface TabItem {
    id: number;
    label: string;
    value: string;
}

interface TabBarProps {
    items: TabItem[];
    activeValue: string;
    onValueChange: (value: string) => void;
}

const TabBar = ({
    items,
    activeValue,
    onValueChange,
}: TabBarProps) => {
    const { borderColor } = useFocusColor()

    return (
        <View className="flex flex-row w-full h-[52px] rounded-3xl bg-secondary-color border border-solid p-2"
            style={{
                borderColor: borderColor
            }}>
            {items.map((data: TabItem) => (
                <TouchableOpacity
                    key={data.id}
                    className={`flex-1 flex-row justify-center items-center rounded-3xl ${data.value === activeValue ? "bg-light-gray" : "bg-secondary-color"}`}
                    onPress={() => onValueChange(data.value)}
                    activeOpacity={activeButtonOpacity}
                >
                    <Text
                        className="font-cormorant-semibold text-primary-color text-sm leading-5 tracking-sm"
                    >
                        {data.label}
                    </Text>
                </TouchableOpacity>
            ))}
        </View>
    )
}

export default TabBar