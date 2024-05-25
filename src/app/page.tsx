import { Card, CardContent } from "@/components/ui/card";
import { Navbar } from "@/components/ui/navbar";
import { Flex } from "@radix-ui/themes";
import Link from "next/link";

const data = {
    CSC: {
        "name:": "Computer Science",
        courses: [
            {
                name: "CSC 225",
                description: "Computational Thinking",
                topics: [
                    {
                        name: "Algorithm Analysis",
                        description: "Big O notation, sorting algorithms",
                        links: [
                            {
                                name: "Big O notation",
                                url: "https://en.wikipedia.org/wiki/Big_O_notation",
                                upvote: 10,
                                downvote: 2,
                            },
                        ],
                    },
                    {
                        name: "Data Structures",
                        description: "Linked lists, stacks, queues",
                        links: [
                            {
                                name: "Linked lists",
                                url: "https://en.wikipedia.org/wiki/Linked_list",
                                upvote: 5,
                                downvote: 0,
                            },
                            {
                                name: "Stacks",
                                url: "https://en.wikipedia.org/wiki/Stack_(abstract_data_type)",
                                upvote: 3,
                                downvote: 1,
                            },
                            {
                                name: "Queues",
                                url: "https://en.wikipedia.org/wiki/Queue_(abstract_data_type)",
                                upvote: 4,
                                downvote: 2,
                            },
                        ],
                    },
                ],
            },
            {
                name: "CSC 115",
                description: "Introduction to Programming",
                topics: [
                    {
                        name: "Python",
                        description: "Python programming language",
                        links: [
                            {
                                name: "Python",
                                url: "https://www.python.org/",
                                upvote: 10,
                                downvote: 0,
                            },
                        ],
                    },
                ],
            },
        ],
    },
    SENG: {
        name: "Software Engineering",
        courses: [
            {
                name: "SENG 265",
                description: "Software Development Methods",
                topics: [
                    {
                        name: "Agile",
                        description: "Agile software development",
                        links: [
                            {
                                name: "Agile",
                                url: "https://en.wikipedia.org/wiki/Agile_software_development",
                                upvote: 10,
                                downvote: 0,
                            },
                        ],
                    },
                ],
            },
        ],
    },
};

const courses = Object.values(data)
    .flatMap((dept) => dept.courses)
    .sort((a, b) => a.name.localeCompare(b.name));

export default function Home() {
    const cards = courses.map((course) => {
        return (
            <Link
                href={`/course/${course.name.replaceAll(" ", "-").toLowerCase()}`}
                key={course.name}
            >
                <Card>
                    <CardContent className="grid grid-flow-row sm:grid-cols-[100px_1fr_100px] items-center gap-2 sm:gap-4 p-4">
                        <span className="font-medium text-gray-500 dark:text-gray-400">
                            {course.name}
                        </span>
                        <h3 className="font-medium">{course.description}</h3>
                        <span className="text-right text-gray-500 dark:text-gray-400">
                            {course.topics.length} topic{course.topics.length > 1 ? "s" : ""}
                        </span>
                    </CardContent>
                </Card>
            </Link>
        );
    });

    return (
        <main>
            <Flex
                direction={"column"}
                justify={"start"}
                width={"100%"}
                maxWidth={"1200px"}
            >
                <Navbar />

                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container grid gap-6 px-4 md:px-6 max-w-4xl mx-auto">
                        <div className="grid gap-1">
                            <h1 className="text-3xl font-bold tracking-tighter">UVic Courses</h1>
                            <p className="text-gray-500 dark:text-gray-400">
                                Browse our selection of {courses.length} courses.
                            </p>
                        </div>
                        <div className="grid gap-6">{cards}</div>
                    </div>
                </section>
            </Flex>
        </main>
    );
}
