import React from "react";
import Link from "next/link";
import { Button } from "./button";
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
            style={{ margin: "1rem 0" }}
        >
            <Heading as={"h1"}>Grocies</Heading>
            <Link href="/list">
                <Button>List</Button>
            </Link>
        </Flex>
    );
}
