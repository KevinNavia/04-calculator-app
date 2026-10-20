import { View } from 'react-native';

const CalculatorApp = () => {
  return (
    <View style={globalStyles.calculatorContainer}>
      ...
      {/* Filas de botones */}
      <View style={globalStyles.row}>
        {/* Botón 1 */}
        <CalculatorButton label="C" blackText color={Colors.lightGray} onPress={() => console.log('C')} />
        <CalculatorButton label="+/-" blackText color={Colors.lightGray} onPress={() => console.log('+/-')} />
        <CalculatorButton label="del" blackText color={Colors.lightGray} onPress={() => console.log('del')} />
        <CalculatorButton label="÷" blackText color={Colors.lightGray} onPress={() => console.log('÷')} />
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