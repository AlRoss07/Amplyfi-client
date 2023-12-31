import './App.css'
import {
    withAuthenticator,
    Button,
    Heading,
    Image,
    View,
    Card,
} from "@aws-amplify/ui-react";

function App({ signOut }) {
    return (
        <View className="App">
            <Card>
                <Image src={logo} className="App-logo" alt="logo" />
                <Heading level={1}>We now have Auth!</Heading>
            </Card>
            <Button onClick={signOut}>Sign Out</Button>
        </View>
    );
}

export default withAuthenticator(App);
