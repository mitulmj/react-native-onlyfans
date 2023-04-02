import { useRouter } from "expo-router";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  Pressable,
  StatusBar,
} from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

export default function UserProfileHeader({
  user,
  isSubscribed,
  setIsSubscribed,
}) {
  const router = useRouter();
  return (
    <View>
      <StatusBar barStyle="light-content" />
      <ImageBackground source={{ uri: user.coverImage }} style={style.cover}>
        <View style={style.overlay} />
        <View
          style={{
            marginTop: 50,
            marginLeft: 10,
            flexDirection: "row",
            alignItems: "center",
          }}>
          <Ionicons
            onPress={() => router.back()}
            name="arrow-back"
            size={24}
            color="white"
            style={{ marginRight: 10 }}
          />
          <View style={{ flexDirection: "column" }}>
            <Text
              style={{
                color: "white",
                fontSize: 22,
                fontWeight: "500",
                marginBottom: 5,
              }}>
              {" "}
              {user.name}
            </Text>
            <Text style={{ color: "white" }}>
              {" "}
              1.4k Post · 64.3 Likes · 15.3 Fans
            </Text>
          </View>
        </View>
      </ImageBackground>

      <View style={{ padding: 10 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "flex-end",
            justifyContent: "space-between",
            marginTop: -50,
          }}>
          <Image src={user.avatar} style={style.userImage} />
          <FontAwesome name="share-square-o" size={24} color="deepskyblue" />
        </View>

        <Text style={{ fontSize: 20, fontWeight: "600", marginVertical: 5 }}>
          {user.name}
        </Text>
        <Text style={{ color: "grey", marginBottom: 10 }}>@{user.handle}</Text>
        <Text style={{ lineHeight: 20 }}>{user.bio}</Text>

        <Text style={{ color: "grey", marginTop: 20, fontWeight: "bold" }}>
          SUBSCRIPTION
        </Text>

        <Pressable
          onPress={() => setIsSubscribed(!isSubscribed)}
          style={[
            style.button,
            { backgroundColor: isSubscribed ? "white" : "deepskyblue" },
          ]}>
          <Text
            style={[
              style.buttonText,
              { color: isSubscribed ? "deepskyblue" : "white" },
            ]}>
            {isSubscribed ? "SUBSCRIBED" : "SUBSCRIBE"}
          </Text>
          <Text
            style={[
              style.buttonText,
              { color: isSubscribed ? "deepskyblue" : "white" },
            ]}>
            {user.subscriptionPrice === 0
              ? "FOR FREE"
              : `$${user.subscriptionPrice} / month`}
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  cover: {
    width: "100%",
    height: 200,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  userImage: {
    height: 100,
    width: 100,
    borderRadius: 100,
    borderColor: "white",
    borderWidth: 3,
    marginRight: 20,
  },
  button: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    paddingHorizontal: 20,
    marginVertical: 10,
    borderColor: "gainsboro",
    borderWidth: 1,
    borderRadius: 50,
  },
  buttonText: {
    fontWeight: "600",
  },
});
