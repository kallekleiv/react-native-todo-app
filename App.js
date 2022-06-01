import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { COLORS } from "./colors";

import TodoItem from "./components/TodoItem";

export default function App() {
    return (
        <View style={styles.background}>
            <View style={styles.headingContainer}>
                <Text style={styles.heading}>TODO LIST</Text>
            </View>
            <View style={styles.todoItemsContainer}>
                <View
                    style={{
                        height: 80,
                        width: 200,
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: COLORS.pink,
                    }}
                >
                    <Text>Item 1</Text>
                </View>
                <TodoItem
                    color={COLORS.darkBlue}
                    text="Item 2"
                    style={{
                        height: 80,
                        width: 200,
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: COLORS.darkBlue,
                    }}
                />
                <View
                    style={{
                        height: 80,
                        width: 200,
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: COLORS.violet,
                    }}
                >
                    <Text>Item 3</Text>
                </View>
                <TodoItem text="Item 3" color={COLORS.violet} />
                <TodoItem text="Item 4" color={COLORS.orange} />
                <TodoItem text="Item 5" color={COLORS.yellow} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    todoItemsContainer: {
        flex: 0.8,
        alignItems: "center",
        flexDirection: "column",
        width: "100%",
        backgroundColor: "grey",
    },
    background: {
        flex: 1,
        backgroundColor: COLORS.offWhite,
    },
    heading: {
        color: COLORS.black,
        fontSize: 20,
        fontWeight: "600",
        marginTop: 30,
        marginBottom: 10,
        marginLeft: 20,
    },
    headingContainer: {
        flex: 0.2,
        justifyContent: "center",
        alignItems: "center",
    },
});
