"use client";
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    SelectValue,
    SelectTrigger,
    SelectItem,
    SelectGroup,
    SelectContent,
    Select,
} from "@/components/ui/select";

import { createNewResource } from "@/lib/firebase-db";

export default function ContributeForm({ topics, classEncoding }: { topics: string[], classEncoding: string}) {
    const [topic, setTopic] = useState<string | null>(null);
    const [title, setTitle] = useState<string>("");
    const [url, setUrl] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [otherTopic, setOtherTopic] = useState<string>("");

    async function handleSubmit() {
        if (!title || !url || !description || !topic) {
            return;
        }

        if (topic === "other") {
            if (!otherTopic) {
                return;
            }
        }

        const topicName = topic === "other" ? otherTopic : topic;
        
        createNewResource(classEncoding, topicName, title, url, description).then(() => {
            setTitle("");
            setUrl("");
            setDescription("");
            setOtherTopic("");
            setTopic(null);
        });

    }

    return (
        <div className="space-y-6 w-full md:max-w-xl">
            <Card>
                <CardHeader>
                    <CardTitle>Contribute a Link</CardTitle>
                    <CardDescription>Share a helpful resource with the class.</CardDescription>
                </CardHeader>
                <CardContent>
                    <form className="space-y-4">
                        <div className="grid gap-2">
                            <Label htmlFor="title">Title</Label>
                            <Input
                                id="title"
                                placeholder="Enter the title for the resource"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="url">URL</Label>
                            <Input
                                id="url"
                                placeholder="Enter the link URL"
                                value={url}
                                onChange={(e) => setUrl(e.target.value)}
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="description">Comment</Label>
                            <Textarea
                                id="comment"
                                placeholder="How does this help?"
                                rows={3}
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="course">Topic</Label>
                            <Select
                                name="topic"
                                onValueChange={setTopic}
                            >
                                <SelectTrigger>
                                    <SelectValue placeholder="Select a topic" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        {topics.map((topic) => (
                                            <SelectItem
                                                key={topic}
                                                value={topic}
                                            >
                                                {topic}
                                            </SelectItem>
                                        ))}
                                        <SelectItem value="other">Other</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            {topic === "other" && (
                                <Input
                                    id="other-topic"
                                    placeholder="Enter the topic name"
                                    onChange={(e) => setOtherTopic(e.target.value)}
                                />
                            )}
                        </div>
                        <Button
                            className="w-full"
                            onClick={handleSubmit}
                        >
                            Submit
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}
