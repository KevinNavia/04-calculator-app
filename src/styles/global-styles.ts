import { Colors } from '@/constants/theme';
import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  background: {
    backgroundColor: Colors.background,
    flex: 1,
  },
  calculatorContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 20,
  },

  mainResult: {
    color: Colors.textPrimary,
    fontSize: 70,
    textAlign: 'right',
    fontWeight: '400',
  },

  subResult: {
    color: Colors.textSecondary,
    fontSize: 40,
    textAlign: 'right',
    fontWeight: '300',
  },
});