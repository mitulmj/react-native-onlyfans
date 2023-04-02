import { Link } from "expo-router";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  Pressable,
} from "react-native";

export default function UserCard({ user }) {
  return (
    <Link href={`/user/${user.id}`} style={{ color: "white" }} asChild>
      <Pressable>
        <ImageBackground
          source={{ uri: user.coverImage }}
          style={styles.userCard}>
          <View style={styles.overlay} />

          {/* Image */}
          <Image src={user.avatar} style={styles.userImage} />
          {/* Name */}
          <View>
            <Text
              style={{
                color: "white",
                fontSize: 22,
                fontWeight: "500",
                marginBottom: 5,
              }}>
              {user.name}
            </Text>
            <Text style={{ color: "white" }}>@{user.handle}</Text>
          </View>
        </ImageBackground>
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingTop: 50,
  },
  userCard: {
    backgroundColor: "grey",
    padding: 10,
    flexDirection: "row",
    alignItems: "flex-end",
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 10,
  },
  userImage: {
    height: 100,
    width: 100,
    borderRadius: 100,
    borderColor: "white",
    borderWidth: 3,
    marginRight: 20,
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    // position: "absolute",
    // top: 0,
    // bottom: 0,
    // left: 0,
    // right: 0,
    ...StyleSheet.absoluteFillObject,
  },
});
