
import { TextInput, View } from "react-native"
import { useFocusColor } from "@/hooks/useFocusColor"

const TextInputBox = ({
    value,
    onChangeValue,
    placeholderText = ``
}: {
    value: string;
    onChangeValue: (value: string) => void;
    placeholderText?: string | undefined;
}) => {
    const {
        borderColor,
        selectionColor,
        handleFocus,
        handleBlur
    } = useFocusColor()

    return (
        <View>
            <TextInput
                className="w-full bg-secondary-color border border-solid rounded-3xl font-cormorant-regular text-sm leading-5 tracking-sm placeholder:text-gray-shade h-[52px] px-5 outline-none"
                style={{
                    borderColor: borderColor
                }}
                value={value}
                onChangeText={onChangeValue}
                placeholder={placeholderText}
                onFocus={handleFocus}
                onBlur={handleBlur}
                selectionColor={selectionColor}
            />
        </View>
    )
}

export default TextInputBox