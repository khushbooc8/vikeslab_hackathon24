import { Card, CardContent } from "@/components/ui/card";
import { Navbar } from "@/components/ui/navbar";
import { Flex } from "@radix-ui/themes";
import Link from "next/link";
import { createNewClass } from "@/lib/firebase-db";
import CreateClassForm from "@/components/ui/create-class";

async function fetchCourses() {}

export default function Home() {
    // function create\\

    // const cards = courses.map((course) => {
    //     return (
    //         <Link
    //             href={`/course/${course.name.replaceAll(" ", "-").toLowerCase()}`}
    //             key={course.name}
    //         >
    //             <Card>
    //                 <CardContent className="grid grid-flow-row sm:grid-cols-[100px_1fr_100px] items-center gap-2 sm:gap-4 p-4">
    //                     <span className="font-medium text-gray-500 dark:text-gray-400">
    //                         {course.name}
    //                     </span>
    //                     <h3 className="font-medium">{course.description}</h3>
    //                     <span className="text-right text-gray-500 dark:text-gray-400">
    //                         {course.topics.length} topic{course.topics.length > 1 ? "s" : ""}
    //                     </span>
    //                 </CardContent>
    //             </Card>
    //         </Link>
    //     );
    // });

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
                                {/* Browse our selection of {courses.length} courses. */}
                            </p>
                        </div>
                        {/* <div className="grid gap-6">{cards}</div> */}
                    </div>
                </section>

                <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-800">
                    <div className="container grid gap-6 px-4 md:px-6 max-w-4xl mx-auto">
                        <CreateClassForm />
                    </div>
                </section>
            </Flex>
        </main>
    );
}
