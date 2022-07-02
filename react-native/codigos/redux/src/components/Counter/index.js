import { Button, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import {
  increment,
  decrement,
  incrementValue,
} from '../../store/reducers/counter';

const Counter = () => {
  const dispatch = useDispatch();
  const { value } = useSelector(state => state.counter);

  return (
    <View>
      <Button title="+" onPress={() => dispatch(increment())} />
      <Text>{value}</Text>
      <Button title="-" onPress={() => dispatch(decrement())} />
      <Button title="+20" onPress={() => dispatch(incrementValue(20))} />
    </View>
  );
};

export default Counter;
