import { Pressable } from 'react-native';

interface Props {
  label: string;
}

const CalculatorButton = ({ label }: Props) => {
  return (
    <Pressable>
      <Text style={{ color: 'white' }}>{label}</Text>
    </Pressable>
  );
};
const CalculatorButton = ({ label }: Props) => {
  return (
    <Pressable style={globalStyles.button}>
      <Text style={globalStyles.buttonText}>{label}</Text>
    </Pressable>
  )
}
interface Props {
  label: string;
  color?: string;
  blackText?: boolean;
  onPress: () => void;
}

const CalculatorButton = ({
  label,
  color = Colors.darkGray,
  blackText = false,
  onPress,
}: Props) => {
  return (
    <Pressable style={globalStyles.button}>
      <Text
        style={{
          ...globalStyles.buttonText,
          color: blackText ? 'black': 'white',
        }}
      >{label}</Text>
    </Pressable>
  )
}