import { View, FlatList } from "react-native";
import { useEffect, useRef } from "react";
import { useRoute } from "@react-navigation/native";
import { useDispatch } from "react-redux";

import Header from "./header";
import TabCard from "../../components/TabCard";
import Basket from "../../components/Basket";
import { setRestaurant } from "../../../redux/features/restaurantSlice";

const RestaurantScreen = () => {
  const route = useRoute();
  const { id, img, title, rating, address, descr, dishes, long, lat } =
    route.params;
  const dispatch = useDispatch();
  const dataRef = useRef(false);

  useEffect(() => {
    if (dataRef.current) return;
    dataRef.current = true;
    dispatch(setRestaurant(route.params));
  }, []);

  return (
    <View key={id}>
      {/* Basket modal */}
      <Basket />

      {/* Dishes row */}
      <FlatList
        contentContainerStyle={{ paddingBottom: 120 }}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <Header
            img={img}
            title={title}
            rating={rating}
            address={address}
            description={descr}
          />
        }
        data={dishes ? dishes : []}
        renderItem={RenderDishes}
        keyExtractor={(_) => _?._id}
      />
    </View>
  );
};

export default RestaurantScreen;

// Item of list
const RenderDishes = ({ item }) =>
  item && (
    <TabCard
      id={item._id}
      name={item.name}
      descr={item.description}
      price={item.price}
      image={item.image}
    />
  );
