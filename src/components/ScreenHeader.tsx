import { Center, Text } from "native-base";

type ScreenHeaderProps = {
  title: string;
};

export function ScreenHeader({ title }: ScreenHeaderProps) {
  return (
    <Center bg="gray.600" pb={6} pt={16}>
      <Text
        color="gray.100"
        fontSize="xl"
        fontFamily="heading"
        fontWeight="bold"
      >
        {title}
      </Text>
    </Center>
  );
}
