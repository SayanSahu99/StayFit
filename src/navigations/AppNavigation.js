import { createStackNavigator } from '@react-navigation/stack';
import OnBoarding from '../screens/onBoarding/OnBoarding';

const Stack = createStackNavigator();

function MainStack() {
   
    const [userToken, setUserToken] = useState(null)

    return (
        <Stack.Navigator>
            <Stack.Screen name="OnBoarding" component={OnBoarding} />
            {userToken == null ? (
                // No token found, user isn't signed in
                <>
                <Stack.Screen name="SignIn" component={} />
                </>
            ) : (
                // User is signed in
                <Stack.Screen name="Home" component={} />
                )}
        </Stack.Navigator>
    );
}