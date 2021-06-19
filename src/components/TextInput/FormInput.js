import Container from './Container';
import Label from './Label';
import Input from './Input';


const TextInput = ({ className, label, onChange, inputName, inputType, inputValue, placeholder}) => (

    <Container className={className}>
      {label && <Label>{label}</Label>}
      <Input
        name={inputName}
        type={inputType}
        onChange={onChange}
        value={inputValue}
        name={label}
        placeholder={placeholder}
        class="inputClass"
        //required
      />
      <span>{inputValue}</span>
    </Container>
  )
  export default TextInput;