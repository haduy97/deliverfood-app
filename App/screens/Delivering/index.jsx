import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { useNavigation, StackActions } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { XMarkIcon } from "react-native-heroicons/solid";
import * as Animatable from "react-native-animatable";
import * as Progress from "react-native-progress";
import MapView, { Marker } from "react-native-maps";

import { selectRestaurant } from "../../../redux/features/restaurantSlice";

const DeliveringScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);

  // Go back to TOP screen
  const goBackToHome = () => {
    navigation.dispatch(StackActions.popToTop());
  };

  return (
    <View className="bg-[#00CCBB] flex-1">
      <SafeAreaView className="z-50">
        <View className="flex-row justify-between items-center px-5 py-2">
          <TouchableOpacity activeOpacity={0.5} onPress={goBackToHome}>
            <XMarkIcon color="white" size={35} />
          </TouchableOpacity>
          <Text className="font-light text-white text-lg">Hỗ trợ đặt hàng</Text>
        </View>

        {/* Order Card */}
        <View className="bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md">
          <View className="flex-row justify-between">
            <View>
              <Text className=" text-gray-400 text-lg">
                Đơn sẽ được giao trong
              </Text>
              <Text className="text-4xl font-bold">15-25 Phút</Text>
            </View>
            <Animatable.Image
              source={require("../../../assets/delivery-man.gif")}
              animation="bounceIn"
              iterationCount={1}
              className=" w-20 h-20"
            />
          </View>

          <Progress.Bar size={30} indeterminate={true} color="#00CCBB" />

          <Text className=" text-gray-500 mt-3 text-xs">
            Đơn của bạn tại {restaurant.title} đang được chuẫn bị
          </Text>
        </View>
      </SafeAreaView>

      {/* Location  */}
      <MapView
        initialRegion={{
          latidude: restaurant.lat,
          longitude: restaurant.long,
          latidudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        className="flex-1 -mt-10 z-0"
        mapType="mutedStandard"
      >
        <Marker
          coordinate={{
            latidude: restaurant.lat,
            longitude: restaurant.long,
          }}
          title={restaurant.title}
          description={restaurant.descr}
          identifier="origin"
          pinColor="#00CCBB"
        />
      </MapView>

      {/* Driver Info */}
      <SafeAreaView className="bg-white flex-row items-center space-x-5 h-28">
        <Image
          source={{ uri: "http://links.papareact.com/wru" }}
          className=" h-12 w-12 bg-gray-300 p-4 rounded-full ml-5"
        />
        <View className="flex-1">
          <Text className="text-lg">Bùi Xuân Huấn</Text>
          <Text className="text-gray-400">Tài xế của bạn</Text>
        </View>

        <Text className="text-[#00CCBB] text-lg mr-5 font-bold">CALL</Text>
      </SafeAreaView>
    </View>
  );
};

export default DeliveringScreen;
