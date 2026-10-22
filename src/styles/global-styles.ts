import { Colors } from '@/constants/theme';
import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  background: {
    backgroundColor: Colors.background,
    flex: 1,
  },
  calculatorContainer: {
    alignSelf: 'center',
    flex: 1,
    maxWidth: 440,
    justifyContent: 'flex-end',
    paddingBottom: 12,
    width: '100%',
  },
  displayContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 24,
    paddingHorizontal: 24,
  },
  keypad: {
    alignSelf: 'center',
    maxWidth: 400,
    width: '100%',
  },

  mainResult: {
    color: Colors.textPrimary,
    fontSize: 72,
    textAlign: 'right',
    fontWeight: '400',
  },

  subResult: {
    color: Colors.textSecondary,
    fontSize: 40,
    textAlign: 'right',
    fontWeight: '300',
  },
  row: {
    flexDirection: 'row',
    gap: 12,
    height: 72,
    marginBottom: 12,
    paddingHorizontal: 20,
  },
  button: {
    flex: 1,
    backgroundColor: Colors.darkGray,
    borderRadius: 999,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wideButton: {
    flex: 2,
    alignItems: 'flex-start',
    paddingLeft: 28,
  },
  buttonPressed: {
    opacity: 0.75,
  },

  buttonText: {
    textAlign: 'center',
    fontSize: 30,
    color: Colors.textPrimary,
    fontWeight: '300',
    fontFamily: 'SpaceMono',
  },
  darkButtonText: {
    color: Colors.background,
  },
});
