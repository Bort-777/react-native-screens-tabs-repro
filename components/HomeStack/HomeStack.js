"use strict";
exports.__esModule = true;
var native_stack_1 = require("@react-navigation/native-stack");
var HomeScreen_1 = require("./HomeScreen");
var Stack = (0, native_stack_1.createNativeStackNavigator)();
function HomeStack() {
    return (<Stack.Navigator>
			<Stack.Screen name="HomeScreen" component={HomeScreen_1["default"]} options={{ headerShown: false }}/>
		</Stack.Navigator>);
}
exports["default"] = HomeStack;
