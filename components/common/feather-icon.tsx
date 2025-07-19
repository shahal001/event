import React from 'react'
import { StyleProp, View, ViewStyle } from 'react-native'

import Animated, {
    Easing,
    useAnimatedProps,
    useSharedValue,
    withRepeat,
    withTiming
} from 'react-native-reanimated'
import Svg, { Circle, Path } from 'react-native-svg'

interface FeatherIconProps {
    icon: string;
    iconFillColor?: string;
    iconStrokeColor?: string;
    iconStrokeWidth?: number;
    iconWidth?: number;
    iconHeight?: number;
    parentClass?: string | undefined;
    parentStyles?: StyleProp<ViewStyle>;
}

interface FeatherIconData {
    contents: string;
    name: string;
    tags: string[];
    attrs: {
        [key: string]: string | number;
    };
}

type FeatherIconsCollection = Record<string, FeatherIconData>

const featherIcons = require('react-native-feather').icons as FeatherIconsCollection
const AnimatedSvg = Animated.createAnimatedComponent(Svg)

const FeatherIcon = ({
    icon = "",
    iconFillColor = "none",
    iconStrokeColor = "currentColor",
    iconStrokeWidth = 2,
    iconWidth = 24,
    iconHeight = 24,
    parentClass = "",
    parentStyles = {},
}: FeatherIconProps) => {
    const rotation = useSharedValue(0)

    React.useEffect(() => {
        rotation.value = withRepeat(
            withTiming(360, {
                duration: 1000,
                easing: Easing.linear,
            }),
            -1
        )
    }, [])

    const animatedProps = useAnimatedProps(() => ({
        transform: [{ rotate: `${rotation.value}deg` }]
    }))

    switch (icon) {
        case "chevron-left":
            return (
                <View className={parentClass} style={parentStyles}>
                    <Svg
                        width={iconWidth}
                        height={iconHeight}
                        viewBox="0 0 36 36"
                        fill={iconFillColor}
                    >
                        <Path
                            d="M10.382 18.75l8.158 8.159a.75.75 0 01.23.515q.008.297-.24.545-.247.24-.53.244-.282.003-.531-.244l-9.12-9.12a1.2 1.2 0 01-.276-.402 1.2 1.2 0 01-.08-.447q0-.243.08-.447t.276-.4l9.12-9.122q.21-.21.511-.225a.72.72 0 01.551.225q.248.248.248.534t-.248.536L10.38 17.25h17.37q.32 0 .535.215A.73.73 0 0128.5 18a.73.73 0 01-.215.535.73.73 0 01-.535.215z"
                            fill={iconFillColor}
                        />
                    </Svg>
                </View>
            );

        case "google":
            return (
                <View className={parentClass} style={parentStyles}>
                    <Svg width={iconWidth} height={iconHeight} viewBox="0 0 16 16" fill="none">
                        <Path d="M15.992 8.15c0-.656-.054-1.134-.172-1.63H8.16v2.958h4.496c-.09.736-.58 1.843-1.668 2.587l-.015.1 2.422 1.833.168.016c1.54-1.39 2.43-3.437 2.43-5.864" fill="#4285F4" />
                        <Path d="M8.16 15.945c2.202 0 4.052-.709 5.403-1.931l-2.575-1.949c-.69.47-1.614.797-2.829.797A4.9 4.9 0 0 1 3.518 9.55l-.096.008-2.519 1.905-.033.09c1.342 2.604 4.098 4.393 7.29 4.393" fill="#34A853" />
                        <Path d="M3.518 9.55a4.8 4.8 0 0 1-.272-1.577c0-.55.1-1.081.263-1.577l-.005-.106-2.55-1.935-.084.039A7.8 7.8 0 0 0 0 7.973a7.8 7.8 0 0 0 .87 3.578z" fill="#FBBC05" />
                        <Path d="M8.16 3.083c1.531 0 2.565.646 3.154 1.187l2.303-2.197C12.203.788 10.362 0 8.16 0 4.97 0 2.212 1.79.87 4.394l2.638 2.002A4.92 4.92 0 0 1 8.16 3.083" fill="#EB4335" />
                    </Svg>
                </View>
            );

        case "theme-loader":
            return (
                <View className={parentClass} style={[{ width: iconWidth, height: iconHeight }, parentStyles]}>
                    <AnimatedSvg
                        width="100%"
                        height="100%"
                        viewBox="0 0 100 100"
                        animatedProps={animatedProps}
                    >
                        <Circle
                            cx="50"
                            cy="50"
                            r="35"
                            fill="none"
                            stroke={iconStrokeColor}
                            strokeWidth="10"
                            strokeDasharray="164.93361431346415 56.97787143782138"
                        />
                    </AnimatedSvg>
                </View>
            )

        default:
            if (!featherIcons || !featherIcons[icon]) {
                return null
            }

            return (
                <View style={parentStyles}>
                    <Svg
                        width={iconWidth}
                        height={iconHeight}
                        viewBox="0 0 24 24"
                        fill={iconFillColor}
                    >
                        <Path
                            d={featherIcons[icon].contents}
                            fill={iconFillColor}
                            stroke={iconStrokeColor}
                            strokeWidth={iconStrokeWidth}
                        />
                    </Svg>
                </View>
            )
    }
}

export default FeatherIcon