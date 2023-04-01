import { Button as ButtonNativeBase, IButtonProps, Text } from 'native-base';

type Props = IButtonProps & {
  title: string
}

export default function Button({ title, ...rest }: Props) {
  return (
    <ButtonNativeBase
      {...rest}
      w='full'
      bg='green.700'
      h={16}
      mt={4}
      _pressed={{
        bgColor: 'green.800'
      }}
    >
      <Text color='white' fontSize='md' >
        {title}
      </Text>
    </ButtonNativeBase>
  );
}