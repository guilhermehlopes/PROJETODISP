function HomeScreen({ navigation }) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to the Library</Text>
        <Text style={styles.greeting}>Hello, User!</Text>
        <View style={styles.optionsContainer}>
          <TouchableOpacity style={styles.optionButton}>
            <Text style={styles.optionText}>Explore Books</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionButton}>
            <Text style={styles.optionText}>My Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionButton}>
            <Text style={styles.optionText}>Settings</Text>
          </TouchableOpacity>
        </View>
        <Button title="Logout" onPress={() => navigation.navigate('Login')} />
      </View>
    );
  }
  
  export default function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
  // Estilos
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f5f5f5',
    },
    logo: {
      fontSize: 40,
      marginBottom: 40,
      color: '#333',
    },
    input: {
      width: '80%',
      height: 50,
      padding: 10,
      borderWidth: 1,
      borderColor: '#ccc',
      marginBottom: 20,
      borderRadius: 5,
    },
    link: {
      color: '#007bff',
      marginTop: 15,
    },
    title: {
      fontSize: 24,
      marginBottom: 20,
      fontWeight: 'bold',
    },
    greeting: {
      fontSize: 20,
      marginBottom: 30,
    },
    optionsContainer: {
      width: '80%',
      marginBottom: 30,
    },
    optionButton: {
      backgroundColor: '#ddd',
      padding: 15,
      marginVertical: 10,
      borderRadius: 5,
      alignItems: 'center',
    },
    optionText: {
      fontSize: 16,
    },
  });


  /* add no readme 
  npx create-react-app meu-projeto-react
  npx expo init LibraryApp (se der erro use npx create-expo-app)
cd LibraryApp
npm install @react-navigation/native @react-navigation/stack
npm install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view


npm install express
npm install mongodb
npm install nodemon --save-dev 
npm install
npx create-react-app meu-projeto-react


n
*/