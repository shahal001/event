import { useEffect, useState } from "react"

import { convertColor } from "@/utils/functions"

import { Keyboard, TextInput, View } from "react-native"

const TextInputBox = ({
    value,
    onChangeValue,
    placeholderText = ``
}: {
    value: string;
    onChangeValue: (value: string) => void;
    placeholderText?: string | undefined;
}) => {
    const [isFocused, setIsFocused] = useState(false)

    useEffect(() => {
        const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
            setIsFocused(true)
        })

        const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
            setIsFocused(false)
        })

        return () => {
            showSubscription.remove()
            hideSubscription.remove()
        }
    }, [])

    const BORDER_COLOR = isFocused ? convertColor("#1C3935", 0.4) : convertColor("#1C3935", 0.2)
    const SELECTION_COLOR = convertColor("#A0ADA9", 0.5)

    return (
        <View>
            <TextInput
                className="w-full bg-secondary-color border border-solid rounded-3xl font-cormorant-regular text-sm leading-5 tracking-sm placeholder:text-gray-shade h-[52px] px-5 outline-none"
                style={{
                    borderColor: BORDER_COLOR
                }}
                value={value}
                onChangeText={onChangeValue}
                placeholder={placeholderText}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                selectionColor={SELECTION_COLOR}
            />
        </View>
    )
}

export default TextInputBox