import { IButtonProps, Button as NBButton, Text } from "native-base";

type ButtonProps = IButtonProps & {
  title: string;
};

export const Button = ({ title, variant, ...rest }: ButtonProps) => {
  const variantOutline = variant === "outline";

  return (
    <NBButton
      width="100%"
      px={6}
      py={4}
      backgroundColor={variantOutline ? "transparent" : "green.700"}
      borderWidth={1}
      borderColor={variantOutline ? "green.700" : "transparent"}
      rounded="md"
      _pressed={{
        bg: "green.500",
      }}
      {...rest}
    >
      <Text
        color={variantOutline ? "green.700" : "white"}
        fontFamily="body"
        fontSize="md"
        fontWeight="bold"
      >
        {title}
      </Text>
    </NBButton>
  );
};
