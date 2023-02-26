import React from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";

import { urlFor } from "../../../sanity";
import { ArrowLeftIcon } from "react-native-heroicons/outline";
const DefaultImg = require("../../../assets/favicon.png");

const RestaurantScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { id, img, title, rating, genre, address, descr, dishes, long, lat } =
    route.params;

  return (
    <ScrollView>
      <View className="relative">
        <Image
          source={img ? { uri: urlFor(img).url() } : DefaultImg}
          className=" w-full h-56 bg-gray-300 pb-4"
        />
        <TouchableOpacity
          className="absolute top-14 left-5 p-2 bg-gray-200 rounded-full"
          activeOpacity={0.6}
          onPress={navigation.goBack}
        >
          <ArrowLeftIcon color="#00CCBB" size={20} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default RestaurantScreen;
