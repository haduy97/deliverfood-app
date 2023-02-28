import { useCallback } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { StarIcon, MapPinIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";

const DefaultImg = require("../../../assets/favicon.png");

const BigCard = (props) => {
  const { id, img, title, rating, address } = props;

  const navigation = useNavigation();
  const limitTitle =
    title && title.length > 23 ? title.substring(0, 23) + ".." : title;

  const goToResturant = useCallback(
    () => navigation.navigate("Restaurant", props),
    [id]
  );

  return (
    <TouchableOpacity
      className="bg-white mr-3 shadow-sm"
      key={id}
      activeOpacity={0.5}
      onPress={goToResturant}
    >
      <Image
        source={img ? { uri: img } : DefaultImg}
        className="h-36 w-full rounded-sm bg-gray-300"
      />

      {/* Overview */}
      <View className="px-3 pb-4">
        <Text className="font-bold text-lg pt-2">
          {title ? limitTitle : ""}
        </Text>
        {/* Rating & Genre */}
        <View className="flex-row items-center space-x-1">
          <StarIcon color="#FFB201" opacity={0.5} size={22} />
          <Text className="text-[#FFB201] text-xs">{rating ? rating : ""}</Text>
        </View>
        {/* Nearby location */}
        <View className="flex-row space-x-1 space-y-1">
          <MapPinIcon color="gray" opacity={0.5} size={22} />
          <Text className="text-xs text-gray-500">
            Nearby . {address ? address : ""}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default BigCard;
