import { Input, BlueInput } from './styles';

const TextInput = ({ value, name, onChange }) => {
  return (
    <BlueInput
      inputColor="black"
      type="text"
      value={value}
      name={name}
      onChange={onChange}
    />
  );
};

export default TextInput;
