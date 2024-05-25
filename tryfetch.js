import { createNewClass, createNewTopic, createNewResource } from './firebase-db.js';

// Call the createNewClass function with sample data
createNewClass('CSC', '225');

// Call the createNewTopic function with sample data
createNewTopic('CSC225', 'Algorithm Analysis');

// Call the createNewResource function with sample data
createNewResource('CSC225', 'Algorithm Analysis', 'Big O notation', 'https://en.wikipedia.org/wiki/Big_O_notation');
