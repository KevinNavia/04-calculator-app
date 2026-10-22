import { Pressable, Text, type ColorValue } from 'react-native';
import { globalStyles } from '@/styles/global-styles';

type Props = {
  label: string;
  color?: ColorValue;
  blackText?: boolean;
  wide?: boolean;
  onPress: () => void;
};

const CalculatorButton = ({
  label,
  color,
  blackText = false,
  wide = false,
  onPress,
}: Props) => (
  <Pressable
    accessibilityRole="button"
    accessibilityLabel={label}
    onPress={onPress}
    style={({ pressed }) => [
      globalStyles.button,
      color ? { backgroundColor: color } : null,
      wide ? globalStyles.wideButton : null,
      pressed ? globalStyles.buttonPressed : null,
    ]}
  >
    <Text
      style={[
        globalStyles.buttonText,
        blackText ? globalStyles.darkButtonText : null,
      ]}
    >
      {label}
    </Text>
  </Pressable>
);

export default CalculatorButton;
