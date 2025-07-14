import React from 'react'

import Svg, { Path } from 'react-native-svg'
import { StyleProp, View, ViewStyle } from 'react-native'

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

        case "theme-loader":
            return (
                <View className={parentClass} style={parentStyles}>
                    <svg xmlns="http://www.w3.org/2000/svg" width={iconWidth} height={iconHeight} viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" style={{ margin: "auto", display: "block" }}>
                        <circle cx="50" cy="50" fill="none" stroke={iconStrokeColor} strokeWidth="10" r="35" strokeDasharray="164.93361431346415 56.97787143782138">
                            <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;360 50 50" keyTimes="0;1"></animateTransform>
                        </circle>
                    </svg>
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