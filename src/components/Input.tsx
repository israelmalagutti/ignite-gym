import { Input as NBInput, IInputProps } from "native-base";

export function Input({ ...rest }: IInputProps) {
  return (
    <NBInput
      bg="gray.700"
      h={14}
      px={4}
      borderWidth={1}
      borderColor="#00000000"
      fontSize="md"
      color="white"
      fontFamily="body"
      placeholderTextColor="gray.300"
      _focus={{
        borderColor: "green.500",
      }}
      {...rest}
    />
  );
}
