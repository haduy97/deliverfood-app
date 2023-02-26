import React from "react";
import { Text, View, Image } from "react-native";
import { UserIcon, ChevronDownIcon } from "react-native-heroicons/outline";

const Header = () => {
  return (
    <View className=" flex-row pb-3 items-center mx-3 space-x-2 ">
      <Image
        source={{ uri: "http://links.papareact.com/wru" }}
        className="w-[9%] h-[76%] bg-gray-200 rounded-full"
      />

      <View className=" flex-1">
        <Text className=" font-bold text-gray-400 text-xs">Giao nhanh!</Text>
        <Text className=" font-bold text-xl">
          Vị trí hiện tại
          <ChevronDownIcon size={20} color="#00CCBB" />
        </Text>
      </View>

      <UserIcon size={35} color="#00CCBB" className="flex-2" />
    </View>
  );
};

export default Header;
