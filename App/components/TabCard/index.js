import { useState, useCallback } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import Currency from "react-currency-formatter";
import { MinusCircleIcon, PlusCircleIcon } from "react-native-heroicons/solid";
import { useDispatch, useSelector } from "react-redux";

import { urlFor } from "../../../sanity";
import {
  addToBasket,
  removeFromBasket,
  selectBasketItemWithId,
} from "../../../redux/features/basketSlice";
const DefaultImg = require("../../../assets/favicon.png");

const TabCard = (props) => {
  const { id, name, description, price, image } = props;
  const [isPressed, setIsPressed] = useState(false);
  const dispatch = useDispatch();
  const items = useSelector((state) => selectBasketItemWithId(state, id));

  const disablePress = !items.length > 0 ? true : false;

  const addItemToBasket = () => {
    dispatch(addToBasket({ id, name, description, price, image }));
  };

  const removeItemFromBasket = () => {
    dispatch(removeFromBasket({ id }));
  };

  const pressedTab = useCallback(() => {
    setIsPressed(!isPressed);
  }, [isPressed]);

  return (
    <>
      <TouchableOpacity
        key={id}
        className={`bg-white border p-4 border-gray-200 ${
          isPressed && "border-b-0"
        }`}
        activeOpacity={0.6}
        onPress={pressedTab}
      >
        <View className="flex-row">
          <View className="flex-1">
            <Text className="text-lg mb-1">{name ? name : ""}</Text>
            <Text className="text-gray-400">
              {description ? description : ""}
            </Text>
            <Text className="text-gray-500 mt-2">
              <Currency
                quantity={price ? price : 0}
                currency="VND"
                pattern="##,### !"
              />
            </Text>
          </View>

          <View>
            <Image
              source={image ? { uri: urlFor(image).url() } : DefaultImg}
              className="h-20 w-20 bg-gray-300 p-4 border border-[#F3F3F4]"
            />
          </View>
        </View>
      </TouchableOpacity>

      {isPressed && (
        <View className="bg-white px-4">
          <View className="flex-row items-center space-x-2 pb-3">
            <TouchableOpacity
              onPress={removeItemFromBasket}
              activeOpacity={0.5}
              disabled={disablePress}
            >
              <MinusCircleIcon
                color={`${disablePress ? "#B6B6B4" : "#00CCBB"}`}
                size={40}
              />
            </TouchableOpacity>

            <Text>{items.length}</Text>

            <TouchableOpacity onPress={addItemToBasket} activeOpacity={0.5}>
              <PlusCircleIcon color={"#00CCBB"} size={40} />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

export default TabCard;
