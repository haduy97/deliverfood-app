import { View, Text, FlatList } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";

import { urlFor } from "../../../sanity";
import BigCard from "../BigCard";

const ListRow = (props) => {
  const { title, description, list } = props;
  const RenderCard = ({ item }) => (
    <BigCard
      id={item?._id}
      img={item && urlFor(item.image).url()}
      title={item?.name}
      rating={item?.rating}
      genre={item?.type.name}
      address={item?.address}
      descr={item?.description}
      dishes={item?.dishes}
      long={item?.long}
      lat={item?.lat}
    />
  );

  return (
    <View>
      {/* Head */}
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title ? title : ""}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>
      <Text className="text-xs text-gray-500 px-4">
        {description ? description : ""}
      </Text>

      {/* Restaurant Cards */}
      <FlatList
        horizontal
        nestedScrollEnable={true}
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
        data={list ? list : []}
        renderItem={RenderCard}
        keyExtractor={(_) => _?._id}
      />
    </View>
  );
};

export default ListRow;
