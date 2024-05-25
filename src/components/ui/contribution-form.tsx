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

export default function ContributeForm({ topics }: { topics: string[] }) {
    const [topic, setTopic] = useState<string | null>(null);

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
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="url">URL</Label>
                            <Input
                                id="url"
                                placeholder="Enter the link URL"
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="description">Comment</Label>
                            <Textarea
                                id="comment"
                                placeholder="How does this help?"
                                rows={3}
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
                                />
                            )}
                        </div>
                        <Button
                            className="w-full"
                            type="submit"
                        >
                            Submit
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}
