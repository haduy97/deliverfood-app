import { View } from "react-native";
import { useEffect } from "react";
import * as Animatable from "react-native-animatable";
import * as Progress from "react-native-progress";
import { useNavigation, StackActions } from "@react-navigation/native";

const PreparingScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.dispatch(StackActions.replace("Delivering", {}));
    }, 5500);
  }, []);

  return (
    <View className="bg-[#00CCBB] flex-1 justify-center items-center pb-10">
      <Animatable.Image
        source={require("../../../assets/orderLoading.gif")}
        animation="slideInDown"
        iterationCount={1}
        className="w-full h-full flex-1"
      />

      <View className="flex-2 items-center">
        <Animatable.Text
          animation="slideInUp"
          iterationCount={1}
          className="text-lg my-5 text-white font-bold"
        >
          Nhà hàng đang chuẩn bị đơn của bạn!
        </Animatable.Text>

        <Animatable.Text
          animation="slideInUp"
          iterationCount={1}
          className="text-lg mb-5 text-white font-bold"
        >
          Xin vui lòng chờ !
        </Animatable.Text>

        <Progress.Bar size={60} indeterminate={true} color="white" />
      </View>
    </View>
  );
};

export default PreparingScreen;
