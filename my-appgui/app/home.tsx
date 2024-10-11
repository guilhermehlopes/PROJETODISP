// Tela Inicial (Home)
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


/*import { useEffect, useState } from "react"
import { View, StyleSheet, ScrollView } from "react-native"
import { Text } from "react-native-paper"
import { useAuth } from "../context/auth"
import { Link } from "expo-router"

interface IPost {
    id: number
    title: string
    status: string
}

export default function Home(){
    const auth = useAuth()
    const [posts, setPosts] = useState<IPost[]>([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.org/posts')
        .then(response => response.json())
        .then(json => setPosts(json))
    },[])
    return (
        <ScrollView>
            <Text>Olá {auth.user.email}</Text>
            <Link style={{marginTop: 30}} href={'/sensors'}>Sensores</Link>
            <Link href={'/profile'}>Perfil</Link>
            {
                posts.map((post) => (
                    <Text>
                        {post.title}
                    </Text>
                ))
            }
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#fff',
      padding: 20,
    }
  })
    */

