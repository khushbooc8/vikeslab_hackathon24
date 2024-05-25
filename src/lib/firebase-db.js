// firebase-db.js
"use server";
import { ref, set, get } from "firebase/database";
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
/*
export async function updateUpvote(classEncoding, topicName) {
    const topicRef = ref(database, `classes/${classEncoding}/${topicName}/upvote`);
    try {
        const snapshot = await get(topicRef);
        if (snapshot.exists()) {
            const currentUpvote = snapshot.val();
            await update(topicRef, currentUpvote + 1);
            console.log(`Upvote count updated successfully for ${topicName} in ${classEncoding}`);
        } else {
            console.error("Topic does not exist.");
        }
    } catch (error) {
        console.error("Error updating upvote:", error);
    }
}
*/

//if a user downvotes a resource, update downvote count
/*
export async function updateDownvote(classEncoding, topicName) {
        const topicRef = ref(database, `classes/${classEncoding}/${topicName}/downvote`);
        try {
            const snapshot = await get(topicRef);
            if (snapshot.exists()) {
                const currentDownvote = snapshot.val();
                await update(topicRef, currentDownvote + 1);
                console.log(`currentDownvote count updated successfully for ${topicName} in ${classEncoding}`);
            } else {
                console.error("Topic does not exist.");
            }
        } catch (error) {
            console.error("Error updating downvote:", error);
        }
    }
*/

// const AllInfoStructure = [
//   "CSC225": 5, // 5 topics
//   "CSC226": 3, // 3 topics
//   "CSC227": 4, // 4 topics
// ]

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

// const sampleDataForGetClassInfo = {
//     name: "CSC 115",
//     topics: [
//         {
//             name: "Python",
//             links: [
//                 {
//                     name: "Python.org",
//                     url: "https://www.python.org/",
//                     comment: "Official Python website",
//                     upvote: 10,
//                     downvote: 2,
//                 },
//                 {
//                     name: "Real Python",
//                     url: "https://realpython.com/",
//                     comment: "Great for beginners",
//                     upvote: 5,
//                     downvote: 1,
//                 },
//             ],
//         },
//         {
//             name: "Java",
//             links: [
//                 {
//                     name: "Java.com",
//                     url: "https://www.java.com/",
//                     upvote: 7,
//                     downvote: 3,
//                     comment: "Official Java website",
//                 },
//             ],
//         },
//     ],
// };

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

        data.count = Object.keys(data.topicHeadings).length;
        data.name = classEncoding;

        // Return the extracted data
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        return;
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
