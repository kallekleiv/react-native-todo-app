import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.container}>
                <Text style={styles.heading}>TODO LIST</Text>
            </View>
            <View style={styles.container}>
                <Text>Box 1</Text>
                <Text>Box 2</Text>
                <Text>Box 3</Text>
                <Text>Box 4</Text>
                <Text>Box 5</Text>
                <StatusBar style="auto" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "red",
        alignItems: "center",
        justifyContent: "center",
    },
    heading: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "600",
        marginTop: 30,
        marginBottom: 10,
        marginLeft: 20,
    },
});
