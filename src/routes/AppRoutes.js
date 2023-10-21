import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DashboardPage from "../pages/DashboardPage";

const AppStack = createNativeStackNavigator();

export default function AppRoutes() {
    return (
        <AppStack.Navigator screenOptions={{headerShown: false}}>
            <AppStack.Screen name='Dashboard' component={DashboardPage}/>
        </AppStack.Navigator>
    )
}