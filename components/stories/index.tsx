import { Box, Flex, Icon, chakra, Stack, Heading, Text, Button, HStack, VStack } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

export const FeaturedStory = () => {

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
                <Text display="inline"
                    w="full"
                    bgClip="text"
                    bgGradient="linear(to-r, orange.500, pink.500)"
                    fontWeight="extrabold"> TEA DROP{" "}</Text>

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
                Care for a cozy cup of English Breakfast?
                <Text _dark={{
                    color: "gray.300",
                }} fontSize='md'>https://teadrop.com.au</Text>
            </chakra.p>

            {/* <Text _dark={{
                color: "gray.300",
            }} fontSize='md'>https://teadrop.com.au</Text> */}

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
            </Flex>
        </Stack>
    );
};