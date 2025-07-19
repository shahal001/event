
import { useState } from "react"
import { View } from "react-native"

import { ScreenLayout } from "@/components/layout"
import { Button, TabBar } from "@/components/elements"
import { TextInputBox } from "@/components/form-elements"

export default function RoleScreen() {
    const [activeValue, setActiveValue] = useState("email")

    const tabBarItems = [
        { id: 1, label: "Email", value: "email" },
        { id: 2, label: "Phone", value: "phone" }
    ]

    return (
        <ScreenLayout showBackIcon={false}>
            <View className="flex flex-col gap-6">
                <TextInputBox
                    value={""}
                    placeholderText={"Email"}
                    onChangeValue={(value) => console.log(value)}
                />
                <TabBar
                    items={tabBarItems}
                    activeValue={activeValue}
                    onValueChange={(value: string) => setActiveValue(value)}
                />
                <Button
                    text={"Sign In"}
                    onPress={() => console.log("clicked..")}
                />
            </View>
        </ScreenLayout>
    )
}