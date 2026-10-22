import { useState } from 'react';
import { View } from 'react-native';
import CalculatorButton from '@/components/CalculatorButton';
import ThemeText from '@/components/ThemeText';
import { Colors } from '@/constants/theme';
import { globalStyles } from '@/styles/global-styles';

type Operator = '+' | '-' | '×' | '÷';

const formatNumber = (value: number) => {
  if (!Number.isFinite(value)) {
    return 'Error';
  }

  return String(Number(value.toPrecision(12)));
};

const calculate = (left: number, right: number, operator: Operator) => {
  switch (operator) {
    case '+':
      return left + right;
    case '-':
      return left - right;
    case '×':
      return left * right;
    case '÷':
      return right === 0 ? null : left / right;
  }
};

const CalculatorApp = () => {
  const [display, setDisplay] = useState('0');
  const [storedValue, setStoredValue] = useState<number | null>(null);
  const [operator, setOperator] = useState<Operator | null>(null);
  const [expression, setExpression] = useState('');
  const [shouldResetDisplay, setShouldResetDisplay] = useState(false);

  const clear = () => {
    setDisplay('0');
    setStoredValue(null);
    setOperator(null);
    setExpression('');
    setShouldResetDisplay(false);
  };

  const enterDigit = (digit: string) => {
    if (display === 'Error' || shouldResetDisplay) {
      setDisplay(digit === '.' ? '0.' : digit);
      if (storedValue === null) {
        setExpression('');
      }
      setShouldResetDisplay(false);
      return;
    }

    if (digit === '.' && display.includes('.')) {
      return;
    }

    setDisplay((current) => {
      if (digit === '.') {
        return current === '-0' ? '-0.' : `${current}.`;
      }

      if (current === '0') {
        return digit;
      }

      if (current === '-0') {
        return `-${digit}`;
      }

      return `${current}${digit}`;
    });
  };

  const selectOperator = (nextOperator: Operator) => {
    if (display === 'Error') {
      return;
    }

    const currentValue = Number(display);
    let nextValue = currentValue;

    if (storedValue !== null && operator !== null && !shouldResetDisplay) {
      const intermediateResult = calculate(storedValue, currentValue, operator);
      if (intermediateResult === null) {
        setDisplay('Error');
        setStoredValue(null);
        setOperator(null);
        setExpression('');
        setShouldResetDisplay(true);
        return;
      }

      nextValue = intermediateResult;
      setDisplay(formatNumber(intermediateResult));
    }

    setStoredValue(nextValue);
    setOperator(nextOperator);
    setExpression(`${formatNumber(nextValue)} ${nextOperator}`);
    setShouldResetDisplay(true);
  };

  const toggleSign = () => {
    if (display === 'Error') {
      return;
    }

    setDisplay((current) => {
      const value = Number(current);
      return formatNumber(value === 0 ? 0 : -value);
    });
    setShouldResetDisplay(false);
  };

  const convertToPercent = () => {
    if (display === 'Error') {
      return;
    }

    setDisplay(formatNumber(Number(display) / 100));
    setShouldResetDisplay(false);
  };

  const showResult = () => {
    if (storedValue === null || operator === null || display === 'Error') {
      return;
    }

    const rightValue = Number(display);
    const result = calculate(storedValue, rightValue, operator);
    setExpression(
      `${formatNumber(storedValue)} ${operator} ${formatNumber(rightValue)} =`,
    );
    setStoredValue(null);
    setOperator(null);
    setShouldResetDisplay(true);

    if (result === null) {
      setDisplay('Error');
      return;
    }

    setDisplay(formatNumber(result));
  };

  return (
    <View style={globalStyles.calculatorContainer}>
      <View style={globalStyles.displayContainer}>
        <ThemeText variant="h2">{expression || ' '}</ThemeText>
        <ThemeText variant="h1">{display}</ThemeText>
      </View>

      <View style={globalStyles.keypad}>
        <View style={globalStyles.row}>
          <CalculatorButton label="AC" color={Colors.lightGray} blackText onPress={clear} />
          <CalculatorButton label="+/-" color={Colors.lightGray} blackText onPress={toggleSign} />
          <CalculatorButton label="%" color={Colors.lightGray} blackText onPress={convertToPercent} />
          <CalculatorButton label="÷" color={Colors.orange} onPress={() => selectOperator('÷')} />
        </View>
        <View style={globalStyles.row}>
          <CalculatorButton label="7" onPress={() => enterDigit('7')} />
          <CalculatorButton label="8" onPress={() => enterDigit('8')} />
          <CalculatorButton label="9" onPress={() => enterDigit('9')} />
          <CalculatorButton label="×" color={Colors.orange} onPress={() => selectOperator('×')} />
        </View>
        <View style={globalStyles.row}>
          <CalculatorButton label="4" onPress={() => enterDigit('4')} />
          <CalculatorButton label="5" onPress={() => enterDigit('5')} />
          <CalculatorButton label="6" onPress={() => enterDigit('6')} />
          <CalculatorButton label="-" color={Colors.orange} onPress={() => selectOperator('-')} />
        </View>
        <View style={globalStyles.row}>
          <CalculatorButton label="1" onPress={() => enterDigit('1')} />
          <CalculatorButton label="2" onPress={() => enterDigit('2')} />
          <CalculatorButton label="3" onPress={() => enterDigit('3')} />
          <CalculatorButton label="+" color={Colors.orange} onPress={() => selectOperator('+')} />
        </View>
        <View style={globalStyles.row}>
          <CalculatorButton label="0" wide onPress={() => enterDigit('0')} />
          <CalculatorButton label="." onPress={() => enterDigit('.')} />
          <CalculatorButton label="=" color={Colors.orange} onPress={showResult} />
        </View>
      </View>
    </View>
  );
};

export default CalculatorApp;
