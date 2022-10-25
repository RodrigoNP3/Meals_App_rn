import { View, Pressable, Text, StyleSheet, Platform } from "react-native";
// import { useNavigation } from "@react-navigation/native";

function CategoryGridTile({ title, color, onPress }) {
  //   const navigation = useNavigation();
  return (
    <View style={[styles.gridItem, { backgroundColor: color }]}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          styles.buttonStyle,
          pressed && Platform.OS != "android" ? styles.buttonPressed : null,
        ]}
        onPress={onPress}
      >
        <View style={styles.innerContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 10,
    elevation: 5,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    overflow: Platform.OS == "android" ? "hidden" : "visible",
  },
  buttonStyle: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    flex: 1,
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default CategoryGridTile;
