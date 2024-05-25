import React from "react";
import { Flex, Heading } from "@radix-ui/themes";

export interface NavbarProps {
    className?: string;
}

export function Navbar() {
    return (
        <Flex
            justify={"between"}
            width={"100%"}
            maxWidth={"1200px"}
            style={{ padding: "1rem 1rem" }}
        >
            <Heading as={"h1"}>NoteNetwork</Heading>
        </Flex>
    );
}
