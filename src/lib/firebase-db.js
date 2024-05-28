// firebase-db.js
"use server";
import { ref, set, get, push } from "firebase/database";
import { database } from "./firebase-init.js";

//if class doesn't exist, the user clicks the 'Add Class' button and then creates a class before adding data
export async function createNewClass(classCode, classNum) {
    const classEncoding = classCode.toUpperCase() + classNum;

    const classRef = ref(database, "classes/" + classEncoding);

    set(classRef, {
        classdesc: "This is a class description",
    })
        .then(() => {
            console.log(classEncoding + " has been successfully added");
        })
        .catch((error) => {
            console.error("Error creating new class:", error);
            return;
        });
}

// Create a new resource under the specified topic and class encoding
export async function createNewResource(
    classEncoding,
    topicName,
    resourceName,
    resourceUrl,
    resourceDescription
) {
    const topicsRef = ref(
        database,
        "classes/" + classEncoding + "/topicHeadings/" + topicName + "/" + resourceName
    );

    // Find the topic with the specified name

    // Set the data for the new resource
    set(topicsRef, {
        desc: resourceDescription,
        url: resourceUrl,
        upvote: 0,
        downvote: 0,
    })
        .then(() => {
            console.log(
                "New resource created:",
                resourceName,
                "under topic:",
                topicName,
                "in class:",
                classEncoding
            );
        })
        .catch((error) => {
            console.error("Error creating new resource:", error);
        });
}

//if a user likes a resources, update the upvote count

export async function updateUpvote(classEncoding, topicName, resourceName) {
    const upvoteRef = ref(database, `classes/${classEncoding}/topicHeadings/${topicName}/${resourceName}/upvote`);
    try {
        const snapshot = await get(upvoteRef);

        if (snapshot.exists()) {
            const currentUpvote = snapshot.val();
            await set(upvoteRef, currentUpvote + 1);
            console.log(`Upvote count updated successfully for ${topicName} in ${classEncoding}`);
        } else {
            console.error("Topic does not exist.");
        }
    } catch (error) {
        console.error("Error updating upvote:", error);
    }
}

//if a user downvotes a resource, update downvote count
// TODO: make these one function
export async function updateDownvote(classEncoding, topicName, resourceName) {
    const downvoteRef = ref(database, `classes/${classEncoding}/topicHeadings/${topicName}/${resourceName}/downvote`);
    try {
        const snapshot = await get(downvoteRef);

        if (snapshot.exists()) {
            const currentDownvote = snapshot.val();
            await set(downvoteRef, currentDownvote + 1);
            console.log(`Upvote count updated successfully for ${topicName} in ${classEncoding}`);
        } else {
            console.error("Topic does not exist.");
        }
    } catch (error) {
        console.error("Error updating upvote:", error);
    }
}

export async function getAllClassInfo() {
    const rootRef = ref(database, "classes/");
    try {
        // Fetch all data from the root of the database
        const snapshot = await get(rootRef);

        // Extract the data from the snapshot
        const data = snapshot.val();

        if (!data) {
            console.log("No classes found.");
            return {};
        }

        Object.keys(data).forEach((classEncoding) => {
            if (data[classEncoding]["topicHeadings"] == null) {
                data[classEncoding]["count"] = 0;
            } else {
                data[classEncoding]["count"] = Object.keys(
                    data[classEncoding]["topicHeadings"]
                ).length;
                // console.log(data[classEncoding]);
            }

            data[classEncoding].name = classEncoding;
            // array.push(data[classEncoding]);
        });

        let array = Object.values(data);

        array.sort((a, b) => {
            a.name > b.name ? 1 : -1;
        });

        console.log(array);

        // console.log(data);
        // Return the extracted data
        return array;
    } catch (error) {
        console.error("Error fetching data:", error);
        return [];
    }
}

export async function getClassInfo(classEncoding) {
    const classRef = ref(database, "classes/" + classEncoding);
    try {
        // Fetch all data from the root of the database
        const snapshot = await get(classRef);

        // Extract the data from the snapshot
        const data = snapshot.val();

        if (!data) {
            console.log("No class found.");
            return {};
        }

        if (data["topicHeadings"] == null) {
            data.count = 0;
            data.topicHeadings = {};
        } else {
            data.count = Object.keys(data["topicHeadings"]).length;
        }

        data.name = classEncoding;

        // if (data["topicHeadings"] != null) data.topicHeadings = Object.values(data.topicHeadings);
        return data;

        // Return the extracted data
    } catch (error) {
        console.error("Error fetching data:", error);
        return [];
    }
}

export async function testCreates() {
    // Call the createNewClass function with sample data
    // createNewClass("CSC", "226");
    // createNewTopic("CSC226", "Data Structures");

    // Call the createNewTopic function with sample data
    // createNewTopic("CSC225", "Algorithm Analysis");

    // Call the createNewResource function with sample data
    createNewResource(
        "CSC225",
        "Algorithm Analysissss",
        "Big O notation",
        "https://en.wikipedia.org/wiki/Big_O_notation",
        "This is our description"
    );

    createNewResource(
        "CSC225",
        "Algorithm Analysisssss",
        "Big O notation",
        "https://en.wikipedia.org/wiki/Big_O_notation",
        "This is our description"
    );

    createNewResource(
        "CSC225",
        "Algorithm Analysissssss",
        "Big O notation",
        "https://en.wikipedia.org/wiki/Big_O_notation",
        "This is our description"
    );

    createNewResource(
        "CSC223",
        "Algorithm Analysissss",
        "Big O notation",
        "https://en.wikipedia.org/wiki/Big_O_notation",
        "This is our description"
    );

    createNewResource(
        "CSC223",
        "Algorithm Analysisssss",
        "Big O notation",
        "https://en.wikipedia.org/wiki/Big_O_notation",
        "This is our description"
    );

    // getAllClassInfo();

    // getClassInfo("CSC225");
}
