import React from 'react';
import { getClassInfo } from "@/lib/firebase-db";
import Link from "next/link";
import dynamic from 'next/dynamic';
import Row from '@/components/ui/resource-row';

// Dynamically import the Client Component
const ContributeForm = dynamic(() => import('@/components/ui/contribution-form'), { ssr: false });

export default async function CoursePage({ params }: { params: { id: string } }) {
    const { id } = params;
    const course = await getClassInfo(id);

    console.log(course);

    if (!course) {
        return <div>Course not found</div>;
    }

    const topicLists = Object.keys(course.topicHeadings);

    return (
        <main className="container mx-auto py-12 px-4 md:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[1fr_300px] w-full">
                <div>
                    {/* Course */}
                    <div className="space-y-4">
                        <h1 className="text-3xl font-bold">{course.name}</h1>
                    </div>

                    {/* Topics */}
                    <div className="mt-16 space-y-10">
                        {Object.keys(course.topicHeadings).map((key, index) => {
                            return (
                                <div key={index}>
                                    <h1 className="text-2xl font-bold">{key}</h1>
                                    {Object.keys(course.topicHeadings[key]).map((resource, index2) => {
                                        const resourceInfo = course.topicHeadings[key][resource];
                                        return (
                                            <Row
                                                key={index2}
                                                name={resource}
                                                url={resourceInfo.url}
                                                upvote={resourceInfo.upvote}
                                                downvote={resourceInfo.downvote}
                                                courseId={id} // Pass the courseId for upvote handling
                                                topic={key} // Pass the topic for upvote handling
                                            />
                                        );
                                    })}
                                </div>
                            );
                        })}
                    </div>
                </div>
                <ContributeForm topics={topicLists} />
            </div>
        </main>
    );
}
