import React from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  Ionicons,
  FontAwesome,
  AntDesign,
  FontAwesome5,
} from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Cart() {
  // Card Image
  const Checkout = (props) => {
    return (
      <View style={{ width: "100%" }}>
        <View style={{ flexDirection: "row" }}>
          <Image
            style={{
              backgroundColor: "blue",
              width: 100,
              height: 100,
            }}
            source={props.imageUri}
          />
          <View style={{flexDirection:"column"}}>
            <View style={{width: "100%", flexDirection: "row" }}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  width: "200px",
                }}
              >
                <Text style={{ fontSize: 24, color: "gray" }}>
                  {props.bikename}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "flex-end",
                  width: "100%",
                }}
              >
                <FontAwesome name="trash-o" size={24} color="black" />
              </View>
            </View>
            {/* subname */}
            <View><Text style={{ fontSize: 24, color: "gray" }}>{props.subname}</Text></View>
            {/* Subname ends */}
            {/* Ammount starts here */}
            <View style={{ width: "100%", flexDirection: "row" }}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",

                  width: "200px",
                }}
              >
                <Text style={{ fontSize: 24, color: "gray" }}>{props.amount}</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "flex-end",
                  width: "100%",
                }}
              >
                <AntDesign name="minuscircleo" size={24} color="black" />
                <Text style={{marginHorizontal:10}}>1</Text>
                <AntDesign name="pluscircle" size={24} color="orange" />
              </View>
            </View>
            {/* Amount Ends Here */}
          </View>
        </View>
      </View>
    );
  };

  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 30,
        }}
      >
        <AntDesign name="arrowleft" size={24} color="black" />
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>Cart Items</Text>
        <View style={{ flexDirection: "row" }}></View>
      </View>
      {/* Probem exists only here */}
      <View>
        {/* List Here */}
        <FlatList
          showsVerticalScrollIndicator={false}
          numColumns={1}
          data={[
            {
              key: (
                <Checkout
                  bikename="Pinarello Bike"
                  subname="Mountain Bike"
                  amount="1,700.00"
                  imageUri={require("../assets/images/bike2.png")}
                />
              ),
            },
            {
              key: (
                <Checkout
                  bikename="Brompton Bike"
                  subname="Road"
                  amount="1,500.00"
                  imageUri={require("../assets/images/bike2.png")}
                />
              ),
            },
            {
              key: (
                <Checkout
                  bikename="Scwhinn Bike"
                  subname="Urban"
                  amount="1,200.00"
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
      </View>
      {/* ENd */}
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          marginTop: 30,
          borderRadius: 30,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            backgroundColor: "white",
            borderRadius: 30,
            marginTop: 20,
          }}
        >
          <View style={{ marginHorizontal: 30 }}>
            <Text style={{ fontSize: 24 }}>Subtotal</Text>
            <Text style={{ fontSize: 24 }}>Shipping Fee</Text>
            <Text style={{ fontSize: 24 }}>----------------</Text>
            <Text style={{ fontSize: 24 }}>Total</Text>
          </View>
          <View style={{ marginHorizontal: 30 }}>
            <Text style={{ fontSize: 24 }}>$100000</Text>
            <Text style={{ fontSize: 24 }}>$1,00</Text>
            <Text style={{ fontSize: 24, marginHorizontal: 0 }}>--------</Text>
            <Text style={{ fontSize: 24 }}>$3,500</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity>
        <View>
          <View
            style={{
              backgroundColor: "orange",
              alignSelf: "flex-start",
              padding: 10,
              paddingHorizontal: 60,
              marginTop: 20,
              borderRadius: 10,
            }}
          >
            <Text style={{ fontSize: 24, color: "white" }}>
              Proceed to Checkout
            </Text>
          </View>
        </View>
      </TouchableOpacity>
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
  );
}
