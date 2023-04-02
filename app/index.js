import { StyleSheet, View, FlatList } from "react-native";
import users from "../assets/data/users";
import UserCard from "../src/components/UserCard";
import { Link } from "expo-router";
const user = users;
export default function Page() {
  return (
    <View style={styles.container}>
      <Link href={"/newPost"}>New Link</Link>
      <FlatList
        data={users}
        renderItem={({ item }) => <UserCard user={item}></UserCard>}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingTop: 50,
  },
});
