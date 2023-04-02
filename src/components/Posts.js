import { View, Text, Image } from "react-native";
import React from "react";
import { Entypo, AntDesign, FontAwesome } from "@expo/vector-icons";

const Posts = ({ post }) => {
  return (
    <View style={{ marginVertical: 15 }}>
      <View style={{ flexDirection: "row", alignItems: "center", padding: 10 }}>
        <Image
          src={post.User.avatar}
          style={{
            width: 50,
            aspectRatio: 1,
            borderRadius: 50,
            marginRight: 10,
          }}
        />

        <View>
          <Text style={{ fontWeight: "600", fontSize: 16, marginBottom: 3 }}>
            {post.User.name}
          </Text>
          <Text>@{post.User.handle}</Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            marginLeft: "auto",
            alignItems: "center",
          }}>
          <Text style={{ marginRight: 5, color: "grey" }}>3 hours ago</Text>
          <Entypo name="dots-three-horizontal" size={16} color="grey" />
        </View>
      </View>
      <Image src={post.image} style={{ width: "100%", aspectRatio: 1 }} />

      <View style={{ margin: 10, flexDirection: "row" }}>
        <AntDesign
          name="hearto"
          style={{ marginRight: 15 }}
          size={20}
          color="grey"
        />
        <FontAwesome
          name="dollar"
          size={11}
          color="grey"
          style={{
            borderWidth: 1.5,
            borderRadius: 50,
            height: 20,
            width: 20,
            lineHeight: 10,
            textAlign: "center",
            paddingTop: 5,
            borderColor: "grey",
            marginRight: 15,
          }}
        />
      </View>
      <Text style={{ fontWeight: "500", marginHorizontal: 10 }}>
        {post.likes} Likes
      </Text>
    </View>
  );
};

export default Posts;
