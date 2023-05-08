import {View, Text} from 'react-native';
import {globalStyle} from '../theme/appTheme';
import {Button} from '../components/Button';
import {useRef, useState} from 'react';

// type Operators = '+' | '-' | '*' | '/';
const enum Operators {
  Add = 1,
  Subtract = 2,
  Multiply = 3,
  Divide = 4,
}

export const Calculator = () => {
  const [prevNumber, setPrevNumber] = useState<string>('0');
  const [number, setNumber] = useState<string>('0');
  const operatorRef = useRef<Operators>();

  const allClear = () => {
    setPrevNumber('0');
    setNumber('0');
  };
  const clearLastChar = () => {
    const numberLength = number.length;
    setNumber(
      numberLength === 1 || (numberLength === 2 && number.includes('-'))
        ? '0'
        : number.slice(0, -1),
    );
  };

  const setPositiveOrNegative = () => {
    if (number.startsWith('0')) {
      return;
    }
    if (number.includes('-')) {
      setNumber(e => e.replace('-', ''));
      return;
    }
    setNumber(e => `-${e}`);
  };

  const buildNumber = (n: string) => {
    if (number.includes('.') && n === '.') {
      return;
    }
    if (number.includes('0') && !number.includes('.') && n === '0') {
      return;
    }

    if (number.startsWith('0') && !number.includes('.') && n !== '.') {
      setNumber(n);
    } else {
      setNumber(number + n);
    }
  };

  const changeToPrevNumber = () => {
    setPrevNumber(number.endsWith('.') ? number.replace('.', '') : number);

    setNumber('0');
  };

  const assignOperator = (operatorSelect: Operators) => {
    if (number === '0') {
      return;
    }
    operatorRef.current = operatorSelect;
    changeToPrevNumber();
  };

  const calculator = () => {
    if (!operatorRef.current) {
      return;
    }
    const prevNum = prevNumber.includes('.')
      ? parseFloat(prevNumber)
      : parseInt(prevNumber, 10);
    const num = number.includes('.')
      ? parseFloat(number)
      : parseInt(number, 10);

    const operations = {
      [Operators.Add]: prevNum + num,
      [Operators.Subtract]: prevNum - num,
      [Operators.Multiply]: prevNum * num,
      [Operators.Divide]: prevNum / num,
    };
    setNumber(operations[operatorRef.current] + '');
    operatorRef.current = undefined;
  };
  return (
    <View style={globalStyle.calculatorContainer}>
      <Text style={globalStyle.resultSmall}>
        {prevNumber !== '0' && prevNumber}
      </Text>
      <Text style={globalStyle.result} numberOfLines={1} adjustsFontSizeToFit>
        {number}
      </Text>

      <View style={globalStyle.row}>
        <Button text="C" color="gray" onPress={allClear} />
        <Button text="+/-" color="gray" onPress={setPositiveOrNegative} />
        <Button text="del" color="gray" onPress={clearLastChar} />
        <Button
          text="/"
          color="orange"
          onPress={() => assignOperator(Operators.Divide)}
        />
      </View>

      <View style={globalStyle.row}>
        <Button text="7" onPress={buildNumber} />
        <Button text="8" onPress={buildNumber} />
        <Button text="9" onPress={buildNumber} />
        <Button
          text="x"
          color="orange"
          onPress={() => assignOperator(Operators.Multiply)}
        />
      </View>

      <View style={globalStyle.row}>
        <Button text="4" onPress={buildNumber} />
        <Button text="5" onPress={buildNumber} />
        <Button text="6" onPress={buildNumber} />
        <Button
          text="-"
          color="orange"
          onPress={() => assignOperator(Operators.Subtract)}
        />
      </View>

      <View style={globalStyle.row}>
        <Button text="1" onPress={buildNumber} />
        <Button text="2" onPress={buildNumber} />
        <Button text="3" onPress={buildNumber} />
        <Button
          text="+"
          color="orange"
          onPress={() => assignOperator(Operators.Add)}
        />
      </View>

      <View style={globalStyle.row}>
        <Button expanded text="0" onPress={buildNumber} />
        <Button text="." onPress={buildNumber} />
        <Button text="=" color="orange" onPress={calculator} />
      </View>
    </View>
  );
};
