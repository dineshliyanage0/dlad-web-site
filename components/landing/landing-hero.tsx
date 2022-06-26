import {
  Button, chakra, Flex,
  Heading, Stack,
  Text
} from "@chakra-ui/react";
import Link from "next/link";

export const LandingHero = () => {
  return (
    <Stack
      px={8}
      py={24}
      mx="auto"
      w={{ base: "full", md: 11 / 12, xl: 9 / 12 }}
      spacing={{ base: "4", lg: "8" }}
    >
      <Heading
        mb={6}
        fontSize={{ base: "4xl", md: "6xl", lg: "8xl" }}
        fontWeight="bold"
        lineHeight="none"
        letterSpacing={{ base: "normal", md: "tight" }}
        color="gray.900"
        _dark={{
          color: "gray.100",
        }}
      >
        Trun Your Company{" "}
        <Text
          display="inline"
          w="full"
          bgClip="text"
          bgGradient="linear(to-r, purple.400, pink.500)"
          fontWeight="extrabold"
        >
          X
          <Text display="inline"
            w="full"
            bgClip="text"
            bgGradient="linear(to-r, pink.500, pink.500)"
            fontWeight="extrabold" as='sup'>2</Text>
        </Text> With
        <Text display="inline"
          w="full"
          bgClip="text"
          bgGradient="linear(to-r, orange.500, pink.500)"
          fontWeight="extrabold"> DLAD{" "}</Text>
      </Heading>

      <chakra.p
        mb={6}
        fontSize={{ base: "lg", md: "xl" }}
        color="gray.600"
        _dark={{
          color: "gray.300",
        }}
        maxW="container.md"
      >
        For Organizations with intense desire to be <Text display="inline"
          w="full"
          bgClip="text"
          bgGradient="linear(to-r, orange.500, pink.500)"
          fontWeight="extrabold">THE GREATEST{""}</Text>, but idle because of the Tools
      </chakra.p>

      <Flex
        flexDirection={{ base: "column", sm: "row" }}
        mb={{ base: 4, md: 8 }}
        gap={4}
        sx={{
          "[data-cta]": {
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            w: { base: "full", sm: "auto", lg: "205px" },
            h: { lg: "64px" },
            mb: { base: 2, sm: 0 },
            fontSize: { lg: "xl" },
            cursor: "pointer",
          },
        }}
      >
        <Link href="" passHref>
          <Button as="a" variant="outline" colorScheme="brand" size="lg" data-cta>
            Read Your Story
          </Button>
        </Link>
        {/* <Button
          as="a"
          colorScheme="gray"
          size="lg"
          target="_blank"
          href={CONSTANTS.CHOC_GITHUB}
          data-cta
        >
          Github
          <Icon boxSize={4} ml={2} as={FaGithub} />
        </Button> */}
      </Flex>
    </Stack>
  );
};
