import { Text, View } from "react-native";

const HomeScreen = () => {
  return (
    <View style={tw`flex w-full h-full items-center justify-center`}>
      <Text style={tw`font-bold text-3xl`}>React Native Template</Text>
    </View>
  );
};

export default HomeScreen;
