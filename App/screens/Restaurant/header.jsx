import { View, Image, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ArrowLeftIcon } from "react-native-heroicons/outline";
import {
  StarIcon,
  MapPinIcon,
  QuestionMarkCircleIcon,
  ChevronRightIcon,
} from "react-native-heroicons/solid";

import { urlFor } from "../../../sanity";
const DefaultImg = require("../../../assets/favicon.png");

const Header = (props) => {
  const { title, img, rating, address, description } = props;
  const navigation = useNavigation();

  return (
    <View>
      {/* Image of res */}
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

      {/* Info */}
      <View className="bg-white">
        <View className="px-4 pt-4">
          <Text className="text-3xl font-bold">{title ? title : ""}</Text>

          {/* Star & Address */}
          <View className="flex-row space-x-2 my-1">
            <View className="flex-row items-center space-x-1">
              <StarIcon color="#FFB201" opacity={0.5} size={22} />
              <Text className="text-[#FFB201] text-xs">
                {rating ? rating : ""}
              </Text>
            </View>
            <View className="flex-row items-center space-x-1">
              <MapPinIcon color="gray" opacity={0.4} size={22} />
              <Text className="text-xs text-gray-500">
                Nearby . {address ? address : ""}
              </Text>
            </View>
          </View>

          {/* Description */}
          <Text className="text-gray-500 mt-2 pb-4">{description}</Text>
        </View>

        <TouchableOpacity
          className="flex-row items-center space-x-1 p-3 border-y border-gray-200"
          activeOpacity={0.4}
        >
          <QuestionMarkCircleIcon color="gray" opacity={0.4} size={22} />
          <Text className="flex-1 pl-2 text-sm font-bold">
            Bạn bị dị ứng thực phẩm?
          </Text>
          <ChevronRightIcon color="#00CCBB" />
        </TouchableOpacity>
      </View>
      <Text className="px-4 pt-4 mb-3 text-xl font-bold">Menu</Text>
    </View>
  );
};

export default Header;
