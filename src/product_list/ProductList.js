import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";

const navigateToProfile = (props) => {
  props.navigation.navigate("Profile");
};

const ProductList = (props) => {
  return (
    <View style={styles.container}>
      <Text>This is a Product List page, bruv!</Text>
      <Button
        title="Back to Product List"
        onPress={() => navigateToProfile(props)}
      />
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ProductList;
