import { useCallback, useState } from "react"

import { convertColor } from "@/utils/functions"
import { theme_primary_color } from "@/constants"

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

    const BORDER_COLOR = isFocused
        ? convertColor(theme_primary_color, 0.4)
        : convertColor(theme_primary_color, 0.2)

    const SELECTION_COLOR = convertColor("#A0ADA9", 0.5)

    return {
        isFocused,
        handleFocus,
        handleBlur,
        borderColor: BORDER_COLOR,
        selectionColor: SELECTION_COLOR
    }
}