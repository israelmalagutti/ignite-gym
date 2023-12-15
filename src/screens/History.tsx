import { Heading, SectionList, Text, VStack } from "native-base";
import { HistoryCard, ScreenHeader } from "@components/index";

const HISTORY = [
  {
    title: "15-12-2023",
    data: [
      { name: "Puxada frontal", group: "Back", time: "8:44" },
      { name: "Remada unilateral", group: "Back", time: "8:32" },
    ],
  },
  {
    title: "14-12-2023",
    data: [{ name: "Puxada frontal", group: "Back", time: "11:24" }],
  },
];

export function History() {
  return (
    <VStack flex={1}>
      <ScreenHeader title="Exercise history" />

      <SectionList
        contentContainerStyle={[
          { padding: 32, gap: 16 },
          HISTORY.length < 1 && { flex: 1, justifyContent: "center" },
        ]}
        sections={HISTORY}
        keyExtractor={item => item.name}
        renderSectionHeader={({ section }) => (
          <Heading
            color="gray.200"
            fontSize="md"
            fontFamily="heading"
            fontWeight="bold"
          >
            {section.title}
          </Heading>
        )}
        renderItem={({ item }) => (
          <HistoryCard name={item.name} group={item.group} time={item.time} />
        )}
        ListEmptyComponent={
          <Text textAlign="center" color="gray.100">
            There is no exercise yet. {"\n"}
            Let's work out today?
          </Text>
        }
      />
    </VStack>
  );
}
