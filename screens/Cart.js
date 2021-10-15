import React from "react";
import { View, Text, Image } from "react-native";
import { Ionicons, AntDesign, FontAwesome5,FontAwesome } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import Checkout from "./utilities/Checkout.js";

export default function Cart(params) {
  // Card Image
  const navigation = params.navigation;
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
      <View
        style={{
          flex: 1,
          width: "100%",
          height: "100%",
          backgroundColor: "gold",
          flexDirection: "row",
        }}
      >
        <View
          style={{
            flex: 0.5,
            width: "10%",
            height: "100%",
            backgroundColor: "teal",
          }}
        >
          <Image
            source={require("../assets/images/bike4.png")}
            style={{
              flex: 1,
              width: "100%",
              height: "100%",
              resizeMode: "center",
              backgroundColor: "gold",
              borderRadius: 50,
            }}
          />
        </View>
        <View
          style={{
            flex: 1,
            width: "100%",
            height: "100%",
            backgroundColor: "brown",
          }}
        >
          <View
            style={{
              flex: 1,
              width: "100%",
              height: "100%",
              backgroundColor: "white",
              flexDirection: "row",
            }}
          >
            <Text style={{ flex: 1, width: "100%" }}>IPSUM LOREM</Text>
            <FontAwesome name="trash-o" size={24} color="black" />
          </View>
          <View
            style={{
              flex: 1,
              width: "100%",
              height: "100%",
              backgroundColor: "purple",
            }}
          >
            <Text>IPSUM LOREM</Text>
          </View>
          <View
            style={{
              flex: 1,
              width: "100%",
              height: "100%",
              backgroundColor: "teal",
              flexDirection: "row",
            }}
          >
            <Text style={{ flex: 1, width: "100%" }}>IPSUM LOREM</Text>
            <AntDesign name="minuscircleo" size={24} color="black" />
            <Text style={{ marginHorizontal: 10 }}>1</Text>
            <AntDesign name="pluscircle" size={24} color="orange" />
          </View>
        </View>
      </View>
      {/* <View style={{ marginBottom: 30 }}>
        <Checkout
          bikename="Pinarello Bike"
          subname="Mountain bike"
          amount="1,700.00"
          imageUri={require("../assets/images/bike3.png")}
        />
      </View>
      <View style={{ marginBottom: 30 }}>
        <Checkout
          bikename="Brompton Bike"
          subname="Road bike"
          amount="1,500.00"
          imageUri={require("../assets/images/bike4.png")}
        />
      </View>
      <View style={{ marginBottom: 30 }}>
        {" "}
        <Checkout
          bikename="Pinarello Bike"
          subname="Urban bike"
          amount="1,200.00"
          imageUri={require("../assets/images/bike5.png")}
        />
      </View> */}

      {/* <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={1}
        data={[
          {
            obj: (
              <Checkout
                bikename="Pinarello Bike"
                subname="Mountain bike"
                amount="1,700.00"
                imageUri={require("../assets/images/bike3.png")}
              />
            ),
            key: 1,
          },
          {
            obj: (
              <Checkout
                bikename="Brompton Bike"
                subname="Road bike"
                amount="1,500.00"
                imageUri={require("../assets/images/bike4.png")}
              />
            ),
            key: 2,
          },
          {
            obj: (
              <Checkout
                bikename="Pinarello Bike"
                subname="Urban bike"
                amount="1,200.00"
                imageUri={require("../assets/images/bike5.png")}
              />
            ),
            key: 3,
          },
        ]}
        renderItem={({ item }) => (
          <View style={{ flex: 1, flexDirection: "row", marginTop: 30 }}>
           {item.obj}
          </View>
        )}
      /> */}
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
