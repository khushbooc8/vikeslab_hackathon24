'use client';

import React from 'react';
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { updateUpvote, updateDownvote } from "@/lib/firebase-db";
import { SVGProps } from "react";

function ThumbsDownIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 14V2" />
            <path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z" />
        </svg>
    );
}

function ThumbsUpIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 10v12" />
            <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
        </svg>
    );
}

export default function Row({
    name,
    url,
    upvote,
    downvote,
    courseId,
    topic
}: {
    name: string;
    url: string;
    upvote: number;
    downvote: number;
    courseId: string;
    topic: string;
}) {
    return (
        <div className="grid grid-cols-[1fr_auto] items-center gap-4">
            <div>
                <h3 className="text-lg font-medium">{name}</h3>
                <Link href={url}>
                    <p>{url}</p>
                </Link>
            </div>
            <div className="flex items-center gap-2">
                <Button
                    className="text-gray-500 hover:text-gray-900 gap-1 dark:text-gray-400 dark:hover:text-gray-50"
                    size="icon"
                    variant="ghost"
                    onClick={() => updateUpvote(courseId, topic, name)}
                >
                    <ThumbsUpIcon className="h-5 w-5" />
                    <span>{upvote}</span>
                </Button>
                <Button
                    className="text-gray-500 hover:text-gray-900 gap-1 align-center justify-center dark:text-gray-400 dark:hover:text-gray-50"
                    size="icon"
                    variant="ghost"
                    onClick={() => updateDownvote(courseId, topic, name)}
                >
                    <ThumbsDownIcon className="h-5 w-5" />
                    <span>{downvote}</span>
                </Button>
            </div>
        </div>
    );
}
