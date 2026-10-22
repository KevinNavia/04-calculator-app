import { Slot } from 'expo-router';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { globalStyles } from '@/styles/global-styles';

const RootLayout = () => {
  // Ref: https://docs.expo.dev/versions/latest/sdk/font/
  const [loaded] = useFonts({
    SpaceMono: require('../../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={globalStyles.background}>
      <Slot />

      <StatusBar style="light" />
    </View>
  );
};

export default RootLayout;