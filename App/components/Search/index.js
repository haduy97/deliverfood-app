import React from "react";
import { View, TextInput } from "react-native";
import {
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon,
} from "react-native-heroicons/outline";

const Search = () => {
  return (
    <View className="flex-row items-center space-x-3 pb-2 mx-3">
      <View className="flex-row flex-1 space-x-2 bg-[#F2F0F2] p-3 rounded-md ">
        <MagnifyingGlassIcon color="#B7C9B7" size={20} />
        <TextInput placeholder="Nhà hàng và ẩm thực" keyboardType="default" />
      </View>
      <AdjustmentsVerticalIcon color="#00CCBB" size={27} />
    </View>
  );
};

export default Search;
