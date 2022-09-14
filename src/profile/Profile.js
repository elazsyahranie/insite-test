import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";

const navigateToProductList = (props) => {
  props.navigation.navigate("ProductList");
};

const Profile = (props) => {
  return (
    <View style={styles.container}>
      <Text>This is a Profile page, bruv</Text>
      <Button
        title="Back to Product List"
        onPress={() => navigateToProductList(props)}
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

export default Profile;
