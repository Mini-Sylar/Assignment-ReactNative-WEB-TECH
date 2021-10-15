import React from "react";
import { View, Text, Image } from "react-native";
import {
  Ionicons,
  AntDesign,
  FontAwesome5,
  FontAwesome,
} from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Cart(params) {
  // Card Image
  const navigation = params.navigation;
  const Checkout = (props) => {
    return (
      <View
        style={{
          flex: 3,
          width: "100%",
          height: "100%",
          flexDirection: "row",
          marginVertical: 5,
          backgroundColor: "rgba(0,0,0,0.1)",
          borderRadius: 10,
          padding: 9,
        }}
      >
        <View
          style={{
            flex: 0.5,
            width: "10%",
            height: "100%",

            borderRadius: 20,
          }}
        >
          <Image
            source={require("../assets/images/bike4.png")}
            style={{
              flex: 1,
              width: "100%",
              height: "100%",
              resizeMode: "center",
              borderRadius: 50,
            }}
          />
        </View>
        <View
          style={{
            flex: 1,
            width: "100%",
            height: "100%",
          }}
        >
          <View
            style={{
              flex: 1,
              width: "100%",
              height: "100%",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                flex: 1,
                width: "100%",
                fontSize: 20,
                color: "rgba(0,0,0,0.5)",
                fontWeight: "600",
              }}
            >
              {props.bikename}
            </Text>
            <FontAwesome name="trash-o" size={24} color="black" />
          </View>
          <View
            style={{
              flex: 2,
              width: "100%",
              height: 100,
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: 14,
                color: "rgba(0,0,0,0.5)",
              }}
            >
              {props.subname}
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              width: "100%",
              height: "100%",

              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                flex: 1,
                width: "100%",
                fontSize: 20,
                color: "rgba(0,0,0,0.5)",
              }}
            >
              <Text style={{color:"orange",fontSize:16}}>$</Text>{props.amount}
            </Text>
            <AntDesign name="minuscircleo" size={24} color="black" />
            <Text style={{ marginHorizontal: 10 }}>1</Text>
            <AntDesign name="pluscircle" size={24} color="orange" />
          </View>
        </View>
      </View>
    );
  };
  // Main Component Starts Here
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 30,
        }}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
        <View style={{ flexDirection: "column" }}>
          <Text style={{ fontSize: 24, fontWeight: "bold" }}>Cart Items</Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
              textAlign: "center",
              color: "rgba(0,0,0,0.4)",
            }}
          >
            (3 Items)
          </Text>
        </View>
        <View style={{ flexDirection: "row" }}></View>
      </View>
      {/* NEWI  */}
      <View style={{ flex: 9, flexDirection: "column", margin: 20 }}>
        <Checkout
          bikename="Pinarello Bike"
          subname="Mountain Bike"
          amount="1,700.00"
        />
        <Checkout
          bikename="Brompton Bike"
          subname="Road Bike"
          amount="1,500.00"
        />
        <Checkout
          bikename="Pinarello Bike"
          subname="Urban Bike"
          amount="3,400.00"
        />
      </View>

      <View
        style={{
          flex: 1,
          flexDirection: "row",
          marginTop: 30,
          borderRadius: 30,
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            backgroundColor: "white",
            borderRadius: 30,
            marginTop: 20,
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
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
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 60,
          }}
        >
          <View
            style={{
              backgroundColor: "orange",
              padding: 10,
              paddingHorizontal: 60,
              marginTop: 20,
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 20,
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
          marginTop: 20,
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
