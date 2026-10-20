import { Pressable } from 'react-native';

const CalculatorButton = ({
  label,
  color = Colors.darkGray,
  blackText = false,
  onPress,
}: Props) => {
  return (
    <Pressable
      style={({ pressed}) => ({
        ...globalStyles.button,
        backgroundColor: color,
        opacity: pressed ? 0.8 : 1,
      })}
      onPress={onPress}
    >
      ...
    </Pressable>
  )
}