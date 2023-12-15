import { HStack, Heading, Text, VStack } from "native-base";

type HistoryCardProps = {
  group: string;
  name: string;
  time: string;
};

export function HistoryCard({ group, name, time }: HistoryCardProps) {
  return (
    <HStack
      w="full"
      px={5}
      py={4}
      alignItems="center"
      justifyContent="space-between"
      bg="gray.600"
      rounded="lg"
    >
      <VStack>
        <Heading
          color="white"
          fontSize="md"
          fontFamily="heading"
          fontWeight="bold"
          textTransform="capitalize"
        >
          {group}
        </Heading>

        <Text
          color="gray.100"
          fontSize="lg"
          fontFamily="body"
          numberOfLines={1}
        >
          {name}
        </Text>
      </VStack>

      <Text color="gray.300" fontSize="md" fontFamily="body">
        {time}
      </Text>
    </HStack>
  );
}
