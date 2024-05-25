"use client";
import React, { useState } from "react";
import { Button } from "./button";
import { createNewClass } from "@/lib/firebase-db";
import { Input } from "./input";
import { Label } from "./label";

export default function CreateClassForm() {
    const [courseName, setCourseName] = useState<string>(""); // CSC
    const [code, setCode] = useState<string>(""); // 115

    async function createClass() {
        if (!code || !courseName) {
            return;
        }

        createNewClass(courseName, code);
    }

    return (
        <div className="mx-auto max-w-md space-y-6 md:max-w-lg">
            <div className="space-y-2 text-center">
                <h1 className="text-3xl font-bold">Submit a Course</h1>
                <p className="text-gray-500 dark:text-gray-400">
                    Enter the course code and number to add it to our database.
                </p>
            </div>
            <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="course-name">Course Code</Label>
                        <Input
                            id="course-name"
                            placeholder="e.g. CSC"
                            value={courseName}
                            onChange={(e) => setCourseName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="course-number">Course Number</Label>
                        <Input
                            id="course-number"
                            placeholder="e.g. 115"
                            value={code}
                            onChange={(e) => setCode(e.target.value)}
                            required
                        />
                    </div>
                </div>
                <Button
                    className="w-full"
                    onClick={createClass}
                >
                    Submit New Course
                </Button>
            </form>
        </div>
    );
}
