import {createNativeStackNavigator} from "@react-navigation/native-stack";

import ProfileScreen from './ProfileScreen';
const Stack = createNativeStackNavigator();

export default function ProfileStack() {
  return (
    <Stack.Navigator>
			<Stack.Screen
				name="ProfileScreen"
				component={ProfileScreen}
				options={{headerShown: false}}
			/>
		</Stack.Navigator>
  );
}