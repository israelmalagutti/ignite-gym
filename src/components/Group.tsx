import { IPressableProps, Pressable, Text } from "native-base";

type GroupProps = IPressableProps & {
  name: string;
  isActive: boolean;
};

export function Group({ name, isActive, ...rest }: GroupProps) {
  return (
    <Pressable
      {...rest}
      w={24}
      h={10}
      bg="gray.600"
      borderWidth={1}
      borderColor={isActive ? "green.500" : "transparent"}
      alignItems="center"
      justifyContent="center"
      overflow="hidden"
      rounded="md"
      _pressed={{
        borderColor: "gray.200",
      }}
    >
      <Text
        color={isActive ? "green.500" : "gray.200"}
        fontSize="xs"
        fontFamily="heading"
        fontWeight="bold"
        textTransform="uppercase"
      >
        {name}
      </Text>
    </Pressable>
  );
}
