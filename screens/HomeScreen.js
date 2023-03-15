import { Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { View } from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView className="">
      <ScrollView>
        <Image
          source={{ uri: "https://i.imgur.com/e14NE49.png" }}
          className="w-full h-64 rounded-full "
        />
        <View className="space-y-5 px-5">
          <View className="flex-row justify-between">
            <TouchableOpacity className="p-5 items-center bg-[#E5962D] w-44 rounded-md" onPress={() => navigation.navigate("Demo")}>
              <Ionicons name="fitness" size={24} color="white" />
              <Text className="text-white font-bold">Track Workout</Text>
            </TouchableOpacity>

            <TouchableOpacity className="p-5 items-center bg-[#1982C4] w-44 rounded-md">
              <Ionicons name="library" size={24} color="white" />
              <Text className="text-white font-bold">Browse Workout</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity className="flex flex-1 flex-row justify-center space-x-3 p-5 items-center bg-[#F44174] w-full rounded-md">
            <Ionicons name="share-social" size={24} color="white" />
            <Text className="text-white font-bold">Connect with Friends</Text>
          </TouchableOpacity>

          <TouchableOpacity className="flex flex-1 flex-row justify-center space-x-3 p-5 items-center bg-[#8AC926] w-full rounded-md">
            <Ionicons name="add-circle" size={24} color="white" />
            <Text className="text-white font-bold">Add an Excersize</Text>
          </TouchableOpacity>

          <TouchableOpacity className="flex flex-1 flex-row justify-center space-x-3 p-5 items-center bg-[#C03221] w-full rounded-md">
            <Ionicons name="md-time" size={24} color="white" />
            <Text className="text-white font-bold">Create a routine</Text>
          </TouchableOpacity>

          <TouchableOpacity className="flex flex-1 flex-row justify-center space-x-3 p-5 items-center bg-[#23967F] w-full rounded-md">
            <AntDesign name="Trophy" size={24} color="white" />
            <Text className="text-white font-bold">Join Challenges</Text>
          </TouchableOpacity>
        </View>

        {/* <Image source={"/Taheri_logo.png"} className="w-full h-64"/> */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
