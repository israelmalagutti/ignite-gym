import {
  FormControl,
  Input as NBInput,
  IInputProps as NBInputProps,
  useTheme,
} from "native-base";

type InputProps = NBInputProps & {
  errorMessage?: string | null;
};

export function Input({ errorMessage = null, isInvalid, ...rest }: InputProps) {
  const { colors } = useTheme();

  const invalid = !!errorMessage || isInvalid;

  return (
    <FormControl isInvalid={invalid}>
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
        isInvalid={invalid}
        _focus={{
          borderColor: "green.500",
        }}
        _disabled={{
          bg: `${colors.gray[600]}60`,
          color: "gray.200",
        }}
        _invalid={{
          borderColor: "red.500",
        }}
        {...rest}
      />

      <FormControl.ErrorMessage _text={{ color: "red.500" }}>
        {errorMessage}
      </FormControl.ErrorMessage>
    </FormControl>
  );
}
