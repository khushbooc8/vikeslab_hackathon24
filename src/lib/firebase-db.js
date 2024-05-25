// firebase-db.js
import { ref, set, push, get } from "firebase/database";
import { database } from "./firebase-init.js";

//if class doesn't exist, the user clicks the 'Add Class' button and then creates a class before adding data
export function createNewClass(classCode, classNum) {
  const classEncoding = classCode.toUpperCase() + classNum;

  const classRef = ref(database, "classes/" + classEncoding);
  console.log("db ref is :", dbRef);
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

// export async function createNewTopic(classEncoding, topicName, topicDescri) {
//   // Construct the reference path for the class
//   const newTopicRef = ref(
//     database,
//     "classes/" + classEncoding + "/topicHeadings/" + topicName
//   );

//   // Generate a new unique key for the topic

//   // Set the data for the new topic
//   push(newTopicRef, {
//     links: [],
//   })
//     .then(() => {
//       console.log("New topic created:", topicName, "in class:", classEncoding);
//     })
//     .catch((error) => {
//       console.error("Error creating new topic:", error);
//       return;
//     });
// }

// Create a new resource under the specified topic and class encoding
export function createNewResource(
  classEncoding,
  topicName,
  resourceName,
  resourceUrl,
  resourceDescription
) {
  const topicsRef = ref(
    database,
    "classes/" + classEncoding + "/" + topicName + "/" + resourceName
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

export async function getAllClassInfo() {
  const rootRef = ref(database, "classes/");
  try {
    // Fetch all data from the root of the database
    const snapshot = await get(rootRef);

    // Extract the data from the snapshot
    const data = snapshot.val();

    console.log(data);
    // Return the extracted data
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return;
  }
}

export async function getClassInfo(classEncoding) {
  const classRef = ref(database, "classes/" + classEncoding);
  try {
    // Fetch all data from the root of the database
    const snapshot = await get(classRef);

    // Extract the data from the snapshot
    const data = snapshot.val();

    console.log(data);
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
  // createNewResource(
  //   "CSC225",
  //   "Algorithm Analysisss",
  //   "Big O notation",
  //   "https://en.wikipedia.org/wiki/Big_O_notation",
  //   "This is our description"
  // );

  // getAllClassInfo();

  getClassInfo("CSC225");
}
