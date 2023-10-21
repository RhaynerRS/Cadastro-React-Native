import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainPage from "../pages/MainPage";
import SignInPage from "../pages/SignInPage";
import SignUpPage from "../pages/SignUpPage";
import ForgotPasswordPage from "../pages/ForgotPasswordPage";
import VerificationCode from "../pages/VerificationCode";

const AuthStack = createNativeStackNavigator();

export default function AuthRoutes() {
    return (
        <AuthStack.Navigator screenOptions={{headerShown: false}}>
            <AuthStack.Screen name='Main' component={MainPage}/>
            <AuthStack.Screen name='SignIn' component={SignInPage}/>
            <AuthStack.Screen name='SignUp' component={SignUpPage}/>
            <AuthStack.Screen name='ForgotPassword' component={ForgotPasswordPage}/>
            <AuthStack.Screen name='VerificationCode' component={VerificationCode}/>
        </AuthStack.Navigator>
    )
}