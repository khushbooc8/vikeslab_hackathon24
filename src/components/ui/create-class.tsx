"use client";
import React, { useState } from "react";
import { Button } from "./button";
import { createNewClass } from "@/lib/firebase-db";

export default function CreateClassForm() {
    const [courseName, setCourseName] = useState<string>(""); // CSC
    const [code, setCode] = useState<string>(""); // 115

    async function createClass() {
        if (!code || !courseName) {
            return;
        }

        createNewClass(code, courseName);
    }

    return (
        <div>
            <h1>Create a New Class</h1>
            <form>
                <label htmlFor="class-name">Class Code</label>
                <input
                    type="text"
                    id="class-name"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    placeholder="e.g. CSC"
                />
                <label htmlFor="class-description">Class Number</label>
                <input
                    type="number"
                    id="class-number"
                    value={courseName}
                    onChange={(e) => setCourseName(e.target.value)}
                    placeholder="e.g. 115"
                />
            </form>

            <Button onClick={createClass}>New Add Class</Button>
        </div>
    );
}
