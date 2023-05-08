import {View, Text, TouchableOpacity} from 'react-native';
import {globalStyle} from '../theme/appTheme';

type Props = {
  expanded?: boolean;
  text?: string;
  color?: 'orange' | 'gray';
  onPress: (number: string) => void;
};
export const Button = ({
  expanded = false,
  text = '0',
  color,
  onPress,
}: Props) => {
  const dimension = expanded
    ? [globalStyle.button, globalStyle.zero]
    : [globalStyle.button];

  const bg = color && globalStyle[color];
  const buttonStyle = [...dimension, bg];

  const textColor =
    color && globalStyle[color] === globalStyle.gray ? '#000' : '#fff';

  return (
    <TouchableOpacity style={buttonStyle} onPress={() => onPress(text)}>
      <View>
        <Text
          style={{
            ...globalStyle.buttonText,
            color: textColor,
          }}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
