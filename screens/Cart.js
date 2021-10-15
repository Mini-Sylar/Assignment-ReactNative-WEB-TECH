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
          backgroundColor: "white",
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
            source={props.imageuri}
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
                fontWeight: "bold",
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
                fontWeight: "bold",
              }}
            >
              <Text style={{ color: "orange", fontSize: 16 }}>$</Text>
              {props.amount}
            </Text>
            <AntDesign name="minuscircle" size={24} color="black" />
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
          imageuri={require("../assets/images/bike4.png")}
        />
        <Checkout
          bikename="Brompton Bike"
          subname="Road Bike"
          amount="1,500.00"
          imageuri={require("../assets/images/bike5.png")}
        />
        <Checkout
          bikename="Pinarello Bike"
          subname="Urban Bike"
          amount="3,400.00"
          imageuri={require("../assets/images/bike3.png")}
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
            flexDirection: "column",
            backgroundColor: "rgba(0,0,0,0.1)",
            borderRadius: 10,
            top: 20,
            margin: 20,
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            height: 150,
            flex: 1,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              margin: 10,
            }}
          >
            <Text
              style={{
                fontSize: 22,
                color: "rgba(0,0,0,0.5)",
                textAlign: "left",
                width: "100%",
                flex: 1,
                marginHorizontal: 20,
              }}
            >
              Subtotal
            </Text>
            <Text
              style={{
                fontSize: 24,
                fontWeight: "bold",
                marginHorizontal: 20,
                textAlign: "right",
                width: "100%",
                flex: 1,
              }}
            >
              <Text style={{ color: "orange", fontSize: 16 }}>$</Text>3,400.00
            </Text>
          </View>
          {/* Second */}
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              margin: 5,
            }}
          >
            <Text
              style={{
                fontSize: 22,
                color: "rgba(0,0,0,0.5)",
                textAlign: "center",

                textAlign: "left",
                width: "100%",
                flex: 1,
                marginHorizontal: 20,
              }}
            >
              Shipping Fee
            </Text>
            <Text
              style={{
                fontSize: 24,
                fontWeight: "bold",
                textAlign: "center",

                textAlign: "right",
                width: "100%",
                flex: 1,
                marginHorizontal: 20,
              }}
            >
              <Text style={{ color: "orange", fontSize: 16 }}>$</Text>1,00.00
            </Text>
          </View>
          {/* Second End */}
          {/* Line */}
          <View
            style={{
              height: 1,
              width: "100%",
              borderRadius: 1,
              borderWidth: 1,
              borderColor: "black",
              borderStyle: "dashed",
            }}
          ></View>
          {/* Line End */}
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 22,
                color: "rgba(0,0,0,0.5)",
                textAlign: "center",

                textAlign: "left",
                width: "100%",
                flex: 1,
                marginHorizontal: 20,
              }}
            >
              Total
            </Text>
            <Text
              style={{
                fontSize: 24,
                fontWeight: "bold",
                textAlign: "center",

                textAlign: "right",
                width: "100%",
                flex: 1,
                marginHorizontal: 20,
              }}
            >
              <Text style={{ color: "orange", fontSize: 16 }}>$</Text>3,500.00
            </Text>
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
            top: 10,
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
          marginBottom: 10,
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
