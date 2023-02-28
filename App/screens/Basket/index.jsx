import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { useState, useMemo } from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import Currency from "react-currency-formatter";

import { selectRestaurant } from "../../../redux/features/restaurantSlice";
import {
  selectBasketItems,
  selectBasketTotal,
  removeFromBasket,
} from "../../../redux/features/basketSlice";
import { XCircleIcon } from "react-native-heroicons/solid";
import { urlFor } from "../../../sanity";

const BasketScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);
  const items = useSelector(selectBasketItems);
  const basketTotal = useSelector(selectBasketTotal);
  const dispatch = useDispatch();
  const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([]);

  useMemo(() => {
    const groupItems = items.reduce((total, item) => {
      (total[item.id] = total[item.id] || []).push(item);
      return total;
    }, {});

    setGroupedItemsInBasket(groupItems);

    if (!items.length > 0) navigation.goBack();
  }, [items]);

  const goToPreparingOrder = () => navigation.navigate("Preparing", {});

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 bg-gray-100">
        <View className="p-5 border-b border-[#00CCBB] bg-white shadow-sm">
          {/* Basket title */}
          <View>
            <Text className="text-lg font-bold text-center pt-1">Giỏ hàng</Text>
            <Text className="text-center text-gray-400">
              {restaurant.title}
            </Text>
          </View>

          {/* close modal */}
          <TouchableOpacity
            onPress={navigation.goBack}
            className="rounded-full bg-gray-100 absolute top-3 right-5"
            activeOpacity={0.5}
          >
            <XCircleIcon color="#00CCBB" height={50} width={50} />
          </TouchableOpacity>
        </View>

        {/* Deliver time */}
        <View className="flex-row items-center space-x-4 px-4 py-3 bg-white my-5">
          <Image
            source={{ uri: "http://links.papareact.com/wru" }}
            className="w-7 h7 bg-gray-300 p-4 rounded-full"
          />
          <Text className="flex-1">Giao hàng trong 15-25 phút</Text>
          <TouchableOpacity
            // onPress={}
            activeOpacity={0.4}
          >
            <Text className="text-[#00CCBB]">Thay đổi</Text>
          </TouchableOpacity>
        </View>

        {/* List of dishes */}
        <ScrollView className=" divide-y divide-gray-200">
          {Object.entries(groupedItemsInBasket).map(([key, items]) => (
            <View
              key={key}
              className="flex-row items-center space-x-3 bg-white py-2 px-4"
            >
              <Text className="text-[#00CCBB] font-semibold">
                {items.length} x
              </Text>
              <Image
                source={{ uri: urlFor(items[0]?.image).url() }}
                className="bg-gray-300 w-12 h-12 rounded-full"
              />
              <Text className="flex-1">{items[0]?.name}</Text>

              <Text className="text-gray-600">
                <Currency
                  quantity={items[0]?.price}
                  currency="VND"
                  pattern="##,### !"
                />
              </Text>

              <TouchableOpacity
                onPress={() => dispatch(removeFromBasket({ id: key }))}
                disabled={!items.length > 0 ? true : false}
              >
                <Text className="text-[#00CCBB] text-sm">Xoá</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>

        {/* Payment & Order */}
        <View className="px-5 pt-5 pb-1 bg-white mt-5 space-y-4">
          <View className="flex-row justify-between">
            <Text className="text-gray-500">Thanh toán</Text>
            <Text className="text-gray-500">
              <Currency
                quantity={basketTotal}
                currency="VND"
                pattern="##,### !"
              />
            </Text>
          </View>

          {/* Ship Fee */}
          <View className="flex-row justify-between">
            <Text className="text-gray-500">Phí giao hàng</Text>
            <Text className="text-gray-500">
              <Currency quantity={15000} currency="VND" pattern="##,### !" />
            </Text>
          </View>

          {/* Total */}
          <View className="flex-row justify-between">
            <Text className="text-gray-500 font-extrabold text-md">
              Tổng thanh toán
            </Text>
            <Text className="text-gray-500 font-extrabold text-md">
              <Currency
                quantity={basketTotal + 15000}
                currency="VND"
                pattern="##,### !"
              />
            </Text>
          </View>

          {/* Place order */}
          <TouchableOpacity
            className="rounded-lg bg-[#00CCBB] p-4"
            activeOpacity={0.4}
            onPress={goToPreparingOrder}
          >
            <Text className="font-bold text-center text-white text-lg">
              Đặt Hàng
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BasketScreen;
