import React from "react";
import { View, Text, Image } from "react-native";
import {
  FontAwesome,
  AntDesign,
} from "@expo/vector-icons";

export default function Checkout(props) {
  return (
    // Main View
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        width: 450,
        backgroundColor: "rgba(255,255,255,0.2)",
        borderRadius: 10,
        padding: 5,
      }}
    >
      {/* Sub View  */}
      <View
        style={{
          flexDirection: "row",
          width: "100%",
        }}
      >
        <View style={{ width: 100, marginRight: 10 }}>
          <Image
            source={props.imageUri}
            style={{
              width: "100%",
              height: 120,
              resizeMode: "contain",
              borderRadius: 10,
              backgroundColor: "rgba(255,255,255,0.2)",
            }}
          />
        </View>
        <View
          style={{
            flexDirection: "column",
            width: "100%",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              width: 300,
              height: "30%",
            }}
          >
            <View style={{ width: "100%" }}>
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: 500,
                  color: "rgba(0,0,0,0.5)",
                }}
              >
                {props.bikename}
              </Text>
            </View>
            <View style={{ width: "", height: 50 }}>
              <FontAwesome name="trash-o" size={24} color="black" />
            </View>
          </View>
          {/* SUb name starts */}
          <View style={{ height: "40%" }}>
            <Text style={{ color: "gray" }}>{props.subname}</Text>
          </View>
          {/* Sub name ends */}
          {/* amount starts here */}
          <View
            style={{
              flexDirection: "row",
              width: 245,
              height: "30%",
            }}
          >
            <View style={{ width: "100%", height: "100%" }}>
              <Text style={{ fontSize: 24, fontWeight: "bold" }}>
                <Text
                  style={{ fontSize: 20, fontWeight: "bold", color: "orange" }}
                >
                  $
                </Text>
                {props.amount}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <AntDesign name="minuscircleo" size={24} color="black" />
              <Text style={{ marginHorizontal: 10 }}>1</Text>
              <AntDesign name="pluscircle" size={24} color="orange" />
            </View>
          </View>
          {/* Amount Ends here */}
        </View>
      </View>
    </View>
  );
}
