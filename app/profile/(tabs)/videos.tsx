import { View, Text, StyleSheet } from 'react-native';

export default function Videos() {
  return (
    <View style={styles.container}>
      <Text>Tab Videos</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});