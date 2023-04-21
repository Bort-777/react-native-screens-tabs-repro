"use strict";
exports.__esModule = true;
var native_stack_1 = require("@react-navigation/native-stack");
var ProfileScreen_1 = require("./ProfileScreen");
var Stack = (0, native_stack_1.createNativeStackNavigator)();
function ProfileStack() {
    return (<Stack.Navigator>
			<Stack.Screen name="ProfileScreen" component={ProfileScreen_1["default"]} options={{ headerShown: false }}/>
		</Stack.Navigator>);
}
exports["default"] = ProfileStack;
