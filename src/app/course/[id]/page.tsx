import { Button } from "@/components/ui/button";
import ContributeForm from "@/components/ui/contribution-form";
import { SVGProps } from "react";

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
                        links: [
                            {
                                name: "Python",
                                url: "https://www.python.org/",
                                upvote: 10,
                                downvote: 0,
                            },
                            {
                                name: "Python Documentation",
                                url: "https://docs.python.org/3/",
                                upvote: 5,
                                downvote: 1,
                            },
                            {
                                name: "Python Tutorial",
                                url: "https://docs.python.org/3/tutorial/index.html",
                                upvote: 3,
                                downvote: 2,
                            },
                        ],
                    },
                    {
                        name: "Java",
                        links: [
                            {
                                name: "Java",
                                url: "https://www.java.com/",
                                upvote: 10,
                                downvote: 0,
                            },
                            {
                                name: "Java Documentation",
                                url: "https://docs.oracle.com/en/java/",
                                upvote: 5,
                                downvote: 1,
                            },
                            {
                                name: "Java Tutorial",
                                url: "https://docs.oracle.com/javase/tutorial/",
                                upvote: 3,
                                downvote: 2,
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

export default function CoursePage({ params }: { params: { id: string } }) {
    const { id } = params;
    const course = courses.find((course) => course.name.replaceAll(" ", "-").toLowerCase() === id);

    if (!course) {
        return <div>Course not found</div>;
    }

    async function findURLTitle(url: string) {
        return fetch(url)
            .then((response) => response.text())
            .then((html) => {
                const titleRegex = /<title>(.*?)<\/title>/;
                const match = titleRegex.exec(html);
                return match ? match[1] : null;
            });
    }

    function Row({
        name,
        url,
        upvote,
        downvote,
    }: {
        name: string;
        url: string;
        upvote: number;
        downvote: number;
    }) {
        return (
            <div className="grid grid-cols-[1fr_auto] items-center gap-4">
                <div>
                    <h3 className="text-lg font-medium">{name}</h3>
                    <p className="text-gray-500 dark:text-gray-400">{url}</p>
                </div>
                <div className="flex items-center gap-2">
                    <Button
                        className="text-gray-500 hover:text-gray-900 gap-1 dark:text-gray-400 dark:hover:text-gray-50"
                        size="icon"
                        variant="ghost"
                    >
                        <ThumbsUpIcon className="h-5 w-5" />
                        <span>{upvote}</span>
                    </Button>
                    <Button
                        className="text-gray-500 hover:text-gray-900 gap-1 align-center justify-center dark:text-gray-400 dark:hover:text-gray-50"
                        size="icon"
                        variant="ghost"
                    >
                        <ThumbsDownIcon className="h-5 w-5" />
                        <span>{downvote}</span>
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <main className="container mx-auto py-12 px-4 md:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[1fr_300px] w-full">
                <div>
                    {/* Couse */}
                    <div className="space-y-4">
                        <h1 className="text-3xl font-bold">
                            {course.name + " : " + course.description}
                        </h1>
                    </div>

                    {/* Topics */}
                    <div className="mt-16 space-y-10">
                        {course.topics.map((topic) => (
                            <div key={topic.name}>
                                <h2 className="text-2xl font-bold">{topic.name}</h2>
                                <div className="mt-4 space-y-4">
                                    {topic.links.map((link) => (
                                        <div
                                            key={link.name}
                                            className="grid grid-cols-[1fr_auto] items-center gap-4 md:mx-8"
                                        >
                                            <Row {...link} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <ContributeForm />
            </div>
        </main>
    );
}

function ThumbsDownIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M17 14V2" />
            <path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z" />
        </svg>
    );
}

function ThumbsUpIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M7 10v12" />
            <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
        </svg>
    );
}
