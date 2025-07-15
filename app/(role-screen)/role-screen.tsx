
import { View } from "react-native"

import { Button } from "@/components/elements"
import { ScreenLayout } from "@/components/layout"
import { TextInputBox } from "@/components/form-elements"

export default function RoleScreen() {
    return (
        <ScreenLayout showBackIcon={false}>
            <View className="flex flex-col gap-6">
                <TextInputBox
                    value={""}
                    placeholderText={"Email"}
                    onChangeValue={(value) => console.log(value)}
                />
                <Button
                    text={"Sign In"}
                    onPress={() => console.log("clicked..")}
                />
            </View>
        </ScreenLayout>
    )
}