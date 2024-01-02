import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import Currency from "react-currency-formatter";
import { useNavigation } from "@react-navigation/native";

import {
  selectBasketItems,
  selectBasketTotal,
} from "../../../redux/features/basketSlice";

const Basket = () => {
  const items = useSelector(selectBasketItems);
  const navigation = useNavigation();
  const basketTotal = useSelector(selectBasketTotal);

  let convertPrice = basketTotal + "";
  convertPrice = convertPrice.slice(0, -3) + "K";

  const goToBasket = () => {
    navigation.navigate("Basket", {});
  };
  console.log("hahaha");
  if (!items.length > 0) return;
  return (
    <View className="absolute bottom-10 w-full z-50">
      <TouchableOpacity
        className="bg-[#00CCBB] mx-4 p-4 rounded-md flex-row items-center space-x-1"
        activeOpacity={0.6}
        onPress={goToBasket}
      >
        <Text className="text-white font-extrabold text-lg bg-[#01A296] py-1 px-2">
          {items.length}
        </Text>
        <Text className="flex-1 text-white font-extrabold text-lg text-center">
          Giỏ Hàng
        </Text>
        <Text className="text-white font-extrabold text-base">
          {/* <Currency quantity={convertPrice} currency="VND" pattern="##,### !" /> */}
          {basketTotal > 0 ? convertPrice : 0}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Basket;
