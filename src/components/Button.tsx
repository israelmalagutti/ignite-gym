import { IButtonProps, Button as NBButton, Text } from "native-base";

type ButtonProps = IButtonProps & {
  title: string;
  variant?: "solid" | "outline";
};

export const Button = ({ title, variant = "solid", ...rest }: ButtonProps) => {
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
        bg: variantOutline ? "#ffffff08" : "green.500",
      }}
      {...rest}
    >
      <Text
        color={variantOutline ? "green.700" : "white"}
        fontFamily="heading"
        fontSize="sm"
      >
        {title}
      </Text>
    </NBButton>
  );
};
