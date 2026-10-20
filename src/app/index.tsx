import { View } from 'react-native';

const CalculatorApp = () => {
  return (
    <View style={globalStyles.calculatorContainer}>
      ...
      {/* Filas de botones */}
      <View style={globalStyles.row}>
        {/* Botón 1 */}
        ...
        <CalculatorButton
          label="÷"
          color={Colors.orange}
          onPress={() => console.log('÷')}
        />
      </View>
    </View>
  );
};
const CalculatorButton = ({ label }: Props) => {
  return (
    <Pressable style={globalStyles.button}>
      <Text style={globalStyles.buttonText}>{label}</Text>
    </Pressable>
  )
}


export default CalculatorApp;