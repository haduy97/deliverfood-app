import { FlatList } from "react-native";
import { useEffect, useState, memo } from "react";

import Card from "../Card";
import { CallAPIv2 } from "../../configs/CallAPI";
import { urlFor } from "../../../sanity";
const Params = require("../../configs/Params");

const Categories = (props) => {
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    const data = await CallAPIv2(Params.categories);
    setCategories(data);
  };

  useEffect(() => {
    if (props.dataFetchedRef.current) return;
    getCategories();
  }, []);

  return (
    // List of category
    <FlatList
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal={true}
      nestedScrollEnabled={true}
      showsHorizontalScrollIndicator={false}
      data={categories}
      renderItem={RenderCard}
      keyExtractor={(item) => item._id}
    />
  );
};

export default memo(Categories);

const RenderCard = ({ item }) => (
  <Card
    img={item && urlFor(item.image).url()}
    title={item.name}
    keyItem={item._id}
  />
);
