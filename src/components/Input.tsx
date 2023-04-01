import { Input as InputNativeBase, IInputProps, FormControl } from 'native-base';

type Props = IInputProps & {
  errorMessage?: string | null
}

export default function Input({ errorMessage = null, isInvalid, ...rest }: Props) {

  const invalid = !!errorMessage || isInvalid

  return (
    <FormControl isInvalid={invalid}>
      <InputNativeBase
        {...rest}
        bg='gray.100'
        fontSize='md'
        h={16}
        mb={3}
        placeholderTextColor='grey.500'
        isInvalid={invalid}
        _invalid={{
          borderWidth: 2,
          borderColor: 'red.500'
        }}
        _focus={{
          bg: 'white',
          borderWidth: 2,
          borderColor: 'green.500'
        }}

      />
      <FormControl.ErrorMessage mt={-3} mb={2}>
        {errorMessage}
      </FormControl.ErrorMessage>
    </FormControl>
  );
}