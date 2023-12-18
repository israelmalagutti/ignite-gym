import { Input as NBInput, IInputProps, useTheme } from "native-base";

export function Input({ ...rest }: IInputProps) {
  const { colors } = useTheme();

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
      _disabled={{
        bg: `${colors.gray[600]}60`,
        color: "gray.200",
      }}
      {...rest}
    />
  );
}
