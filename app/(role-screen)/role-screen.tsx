
import { View } from "react-native"

import { Header } from "@/components/common"
import { Button } from "@/components/elements"
import { TextInputBox } from "@/components/form-elements"

export default function RoleScreen() {
    return (
        <Header>
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
        </Header>
    )
}