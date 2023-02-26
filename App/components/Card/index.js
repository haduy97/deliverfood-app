import { TouchableOpacity, Text, Image, View } from "react-native";
import React from "react";

const DefaultImg = require("../../../assets/favicon.png");

const Card = (props) => {
  const { img, title, keyItem } = props;
  const limitTitle = title.length > 10 ? title.substring(0, 10) + ".." : title;
  return (
    <TouchableOpacity
      key={keyItem}
      activeOpacity={0.4}
      className="relative mr-2"
    >
      <Image
        source={img ? { uri: img } : DefaultImg}
        className="h-20 w-20 rounded bg-gray-300"
      />
      <View className="absolute bottom-1 px-1 bg-[#00CCBB] rounded-sm ">
        <Text className="text-white font-bold text-xs ">
          {title ? limitTitle : ""}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
