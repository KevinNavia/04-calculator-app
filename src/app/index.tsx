import { View } from 'react-native';

const CalculatorApp = () => {
  return (
    <View style={globalStyles.calculatorContainer}>
      <ThemeText variant="h1">50 x 500000000000000</ThemeText>
      <ThemeText variant="h2">2500</ThemeText>
    </View>
  );
};
export default CalculatorApp;