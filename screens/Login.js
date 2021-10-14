import React from "react";
import { View, Text, StyleSheet,Image } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity } from "react-native-gesture-handler";
import {MaterialCommunityIcons,AntDesign} from "@expo/vector-icons"
import { NavigationContainer } from "@react-navigation/native";

export default function Login(params) {
  const navigation = params.navigation
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        style={{
          width: 150,
          height: 150,
          borderRadius: 20,
          marginBottom: 30,
          transform:[{rotate:'45deg'}]
        }}
        source={{
          uri: "https://images.unsplash.com/photo-1528629297340-d1d466945dc5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=922&q=80",
        }}
      />
      <Text style={{ color: "rgba(0,0,0,0.8)", fontSize: 24 }}>Welcome to</Text>
      <Text style={{ color: "black", fontSize: 30, fontWeight: "600" }}>
        Power Bike Shop
      </Text>
      <TouchableOpacity onPress={()=>{
         navigation.navigate("Home");
      }}
        style={{
          backgroundColor: "#e3e3e3",
          padding: 10,
          paddingHorizontal: 60,
          marginTop: 20,
          borderRadius: 10,
          flexDirection: "row",
        }}
      >
        <AntDesign name="google" size={24} color="black" />
        <Text style={{ fontSize: 20, marginLeft: 5 }}> Login with Gmail</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: "black",
          padding: 10,
          paddingHorizontal: 60,
          marginTop: 20,
          borderRadius: 10,
          flexDirection: "row",
        }}
        onPress={()=>{
         navigation.navigate("Home")}}
      >
        <AntDesign name="apple1" size={24} color="white" />
        <Text style={{ fontSize: 20, color: "white", marginLeft: 5 }}>
          {" "}
          Login with Apple
        </Text>
      </TouchableOpacity>
      <Text style={{ color: "grey" }}>
        not a member? <TouchableOpacity><Text style={{ color: "orange" }}>sign up</Text></TouchableOpacity>
      </Text>
    </View>
  );
}
