import { useCameraPermissions, CameraView } from "expo-camera"
import { useEffect, useState } from "react"
import { View, StyleSheet } from "react-native"
import { Avatar, Button } from "react-native-paper"
import * as FileSystem from 'expo-file-system'

export default function Camera(){
    const [perm, reqPerm] = useCameraPermissions()
    const [photo, setPhoto] = useState<string | null>(null)

    const photoFileName = FileSystem.documentDirectory + 'photo.jpg'

    let camera: CameraView | null

    const takePicture = async () => {
        if(perm){
            const photo = await camera?.takePictureAsync()
            if(photo?.uri){
                setPhoto(photo.uri)
                await FileSystem.deleteAsync(photoFileName)
                await FileSystem.copyAsync({
                    from: photo.uri,
                    to: photoFileName
                })
            }
        }
    }

    const verificarFoto = async () => {
        const file = await FileSystem.getInfoAsync(photoFileName)
        if(file.exists){
            setPhoto(file.uri)
        }
    }

    useEffect(()=>{
        verificarFoto()
    },[])

    if(!perm) return <></>

    return (
        <View style={styles.container}>
            <CameraView facing="front" ref={(ref) => {camera = ref}}
            style={{width: 300, height: 300}}
            />
            <Button onPress={takePicture}>Tirar foto</Button>
            {photo && <Avatar.Image size={250} source={{uri: photo}} />}
            <Button onPress={verificarFoto}>Verificar foto</Button>
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