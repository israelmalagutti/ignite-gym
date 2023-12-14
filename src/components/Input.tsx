import { Input as NBInput, IInputProps } from "native-base";

export function Input({ ...rest }: IInputProps) {
  return (
    <NBInput
      bg="gray.700"
      h={14}
      px={4}
      borderRadius={6}
      borderWidth={1}
      borderColor="#00000000"
      placeholderTextColor="gray.300"
      selectionColor="green.500"
      fontSize="md"
      color="white"
      fontFamily="body"
      _focus={{
        borderColor: "green.500",
      }}
      {...rest}
    />
  );
}
