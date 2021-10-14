import React from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  Ionicons,
  FontAwesome,
  AntDesign,
  FontAwesome5,
} from "@expo/vector-icons";

export default function Home() {
  const bubbles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 22,
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 42,
      alignSelf: "flex-start",
      borderRadius: 10,
      backgroundColor: "rgba(0,0,0,0.1)",
      marginTop: 10,
      marginHorizontal: 10,
      marginBottom: 30,
    },
  });

  // Card Image
  const Cards = (props) => {
    return (
      <View
        style={{
          width: 150,
          height: 250,
          backgroundColor: "rgba(0,0,0,0.2)",
          borderRadius: 10,
          marginHorizontal: 20,
        }}
      >
        <Ionicons name="heart" size={24} color="red" />
        <Image
          source={props.imageUri}
          style={{
            width: "100%",
            height: 150,
            backgroundColor: "blue",
            alignSelf: "flex-start",
            flex: 5,
          }}
        />
        <Text
          style={{
            display: "flex",
            fontSize: 16,
            color: "rgba(0,0,0,0.5)",
            justifyContent: "center",
            alignItems: "center",
            fontWeight: "600",
          }}
        >
          {props.name}
        </Text>
        <Text
          style={{
            display: "flex",
            fontSize: 20,
            justifyContent: "center",
            alignItems: "center",
            fontWeight: "600",
          }}
        >
          <Text style={{ color: "orange", fontSize: 12 }}>$</Text>
          {props.amount}
        </Text>
      </View>
    );
  };

  return (
    <View
      style={{
        backgroundColor: "white",
        flex: 1,
        paddingTop: 55,
        paddingHorizontal: 20,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Ionicons name="ios-menu-outline" size={24} color="black" />
        <FontAwesome name="motorcycle" size={24} color="black" />
        <View style={{ flexDirection: "row" }}>
          <AntDesign name="search1" size={20} color="black" />
          <Ionicons name="notifications-outline" size={20} color="black" />
        </View>
      </View>
      <View style={{ marginTop: 20, marginBottom: 20 }}>
        <Text style={{ fontSize: 24, color: "rgba(0,0,0,0.8)" }}>
          The World's{" "}
          <Text style={{ fontSize: 28, color: "orange", fontWeight: "bold" }}>
            Best Bike
          </Text>
        </Text>
      </View>
      <View>
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>Categories</Text>
      </View>
      <View>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={[
            { key: "All" },
            { key: "Roadbike" },
            { key: "Mountain" },
            { key: "Urban" },
            { key: "Olympics" },
            { key: "Something" },
            { key: "Something2" },
          ]}
          renderItem={({ item }) => (
            <Text style={bubbles.item}>{item.key}</Text>
          )}
        />
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={[
          {
            key: (
              <Cards
                name="Pinarello Bike"
                amount="1,700.00"
                imageUri={require("../assets/images/bike2.png")}
              />
            ),
          },
          {
            key: (
              <Cards
                name="Brompton Bike"
                amount="1,500.00"
                imageUri={require("../assets/images/bike2.png")}
              />
            ),
          },
          {
            key: (
              <Cards
                name="Scwhinn Bike"
                amount="1,200.00"
                imageUri={require("../assets/images/bike2.png")}
              />
            ),
          },
          {
            key: (
              <Cards
                name="Norco Bike"
                amount="9,80.00"
                imageUri={require("../assets/images/bike2.png")}
              />
            ),
          },
        ]}
        renderItem={({ item }) => (
          <View style={{ flex: 1, flexDirection: "row", marginTop: 30 }}>
            {item.key}
          </View>
        )}
      />
      <View
        style={{
          marginTop: 20,
          marginBottom: 10,
          backgroundColor: "rgba(0,0,0,0.1)",
          height: 50,
          margin: 0,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginHorizontal: 20,
            margin: 0,
          }}
        >
          <Ionicons name="home" size={24} color="black" />
          <FontAwesome5 name="microphone" size={24} color="black" />
          <View style={{ flexDirection: "row" }}>
            <FontAwesome5 name="shopping-bag" size={24} color="black" />
          </View>
        </View>
      </View>
    </View>
  );
}
