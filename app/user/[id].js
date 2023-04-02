import { useSearchParams } from "expo-router";
import { Text, FlatList, View } from "react-native";
import users from "../../assets/data/users";
import posts from "../../assets/data/posts";
import { useState } from "react";
import UserProfileHeader from "../../src/components/UserProfileHeader";
import Posts from "../../src/components/Posts";
import { FontAwesome } from "@expo/vector-icons";

export default function ProfilePage() {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { id } = useSearchParams();

  const user = users.find((user) => user.id === id);

  if (!user) {
    return <Text>Opps! User not found.</Text>;
  }

  if (!isSubscribed) {
    return (
      <View>
        <UserProfileHeader
          user={user}
          isSubscribed={isSubscribed}
          setIsSubscribed={setIsSubscribed}
        />

        <View
          style={{
            backgroundColor: "gainsboro",
            alignItems: "center",
            padding: 20,
          }}>
          <FontAwesome name="lock" size={50} color="gray" />

          <Text
            style={{
              padding: 15,
              color: "white",
              backgroundColor: "deepskyblue",
              borderRadius: 25,
              height: 50,
            }}>
            Subscribe to see user's posts
          </Text>
        </View>
      </View>
    );
  }

  return (
    <View>
      <FlatList
        data={posts}
        renderItem={({ item }) => <Posts post={item} />}
        ListHeaderComponent={() => (
          <UserProfileHeader
            user={user}
            isSubscribed={isSubscribed}
            setIsSubscribed={setIsSubscribed}
          />
        )}
      />
    </View>
  );
}
