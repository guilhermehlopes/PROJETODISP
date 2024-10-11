import { View, StyleSheet } from "react-native"
import { Text } from "react-native-paper"
import { Gyroscope, Accelerometer } from "expo-sensors"
import { useState } from "react"

export default function Sensors(){
    const [gData, setGData] = useState({x: 0, y: 0, z: 0})
    const [aData, setAData] = useState({x: 0, y: 0, z: 0})

    Gyroscope.setUpdateInterval(10000) // tempo de update
    Gyroscope.addListener((data) => { setGData(data) })

    Accelerometer.setUpdateInterval(10000)
    Accelerometer.addListener((data) => { setAData(data) })

    return (
        <View style={styles.container}>
            <Text>Sensores</Text>
            <Text>X: {gData.x}</Text>
            <Text>Y: {gData.y}</Text>
            <Text>Z: {gData.z}</Text>
            <Text>Xa: {aData.x}</Text>
            <Text>Ya: {aData.y}</Text>
            <Text>Za: {aData.z}</Text>
        </View>
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