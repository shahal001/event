import { Keyboard } from "react-native"
import { useCallback, useEffect, useState } from "react"

import { convertColor } from "@/utils/functions"

interface UseFocusColorReturn {
    isFocused: boolean;
    handleFocus: () => void;
    handleBlur: () => void;
    borderColor: string;
    selectionColor: string;
}

export const useFocusColor = (): UseFocusColorReturn => {
    const [isFocused, setIsFocused] = useState(false)

    const handleFocus = useCallback(() => setIsFocused(true), [])
    const handleBlur = useCallback(() => setIsFocused(false), [])

    useEffect(() => {
        const showSubscription = Keyboard.addListener("keyboardDidShow", handleFocus)
        const hideSubscription = Keyboard.addListener("keyboardDidHide", handleBlur)

        return () => {
            showSubscription.remove()
            hideSubscription.remove()
        }
    }, [handleFocus, handleBlur])

    const BORDER_COLOR = isFocused
        ? convertColor("#1C3935", 0.4)
        : convertColor("#1C3935", 0.2)

    const SELECTION_COLOR = convertColor("#A0ADA9", 0.5)

    return {
        isFocused,
        handleFocus,
        handleBlur,
        borderColor: BORDER_COLOR,
        selectionColor: SELECTION_COLOR
    }
}