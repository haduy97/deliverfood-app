import { View, SafeAreaView, ScrollView, FlatList } from "react-native";
import { useEffect, useState, useRef } from "react";

import { CallAPIv2 } from "../../configs/CallAPI";
import Header from "./header";
import Search from "../../components/Search";
import Categories from "../../components/Categories";
import ListRow from "../../components/ListRow";

const Params = require("../../configs/Params");

const HomeScreen = () => {
  const [rowCategories, setRowCategories] = useState([]);
  const dataFetchedRef = useRef(false);

  const getRowCate = async () => {
    const data = await CallAPIv2(Params.rowCategories);
    setRowCategories(data);
  };

  useEffect(() => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;
    getRowCate();
  }, []);

  const RenderList = ({ item }) => (
    <ListRow
      // id={item._id}
      title={item.name}
      descr={item.description}
      list={item.restaurants}
    />
  );

  return (
    <SafeAreaView className="bg-white">
      {/* Header */}
      <Header />

      {/* Search */}
      <Search />

      {/* Body */}
      <FlatList
        nestedScrollEnabled={true}
        className="bg-gray-100"
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={<Categories dataFetchedRef={dataFetchedRef} />}
        data={rowCategories ? rowCategories : []}
        renderItem={RenderList}
        keyExtractor={(_) => _._id}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
