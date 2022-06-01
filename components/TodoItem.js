import React from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import { COLORS } from "../colors";

export default function TodoItem(props) {
    return (
        <View styles={{ height: 80, width: 200, backgroundColor: "white" }}>
            <Text> {props.text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    todoItem: {
        backgroundColor: COLORS.darkBlue,
        height: 80,
        width: 200,
        minWidth: 200,
        minHeight: 80,
        flexShrink: 0,
    },
});
