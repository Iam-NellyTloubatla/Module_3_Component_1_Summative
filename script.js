// ===========================================
// FETCH HTML ELEMENTS
// SECTION A
// ===========================================

const runTasksButton = document.getElementById("runTasksButton");
const outputElement = document.getElementById("output");
const outputElement = document.getElementById("outputElement");
const addMarkButton = document.getElementById("addMarkButton");
const getMarksOver60Button = document.getElementById("getMarksOver60Button");
const increaseMarksBy5Button = document.getElementById("increaseMarksBy5Button");
const getTotalMarksButton = document.getElementById("getTotalMarksButton");
const findFirstMarkOver80Button = document.getElementById("findFirstMarkOver80Button");
const sortMarksLowestToHighestButton = document.getElementById("sortMarksLowestToHighestButton");
const clearOutputButton = document.getElementById("clearOutputButton");
const marksList = document.getElementById("marks");
const taskNameInput = document.getElementById("taskNameInput");
const browseElement = document.getElementById("browseElement");
const resultInput = document.getElementById("resultInput");
// ===========================================
// DATA
// ===========================================

export const marks = [45, 60, 85, 30, 95];

// ===========================================
//SECTION B TASKS
// Complete the functions below.
// Do NOT change the function names.
// ===========================================

// Task 1 
export function addMark() {
    //add 70 to the end of the marks array
    marks.push(70);
    // Return the updated marks array
    return marks;
}

// Task 2
export function getMarksOver60() {
    // Return marks greater than 60
    return marks.filter(mark => mark > 60);
}

// Task 3
export function increaseMarksBy5() {
    // Return a new array where each mark is increased by 5
    return marks.map(mark => mark + 5);
}

// Task 4
export function getTotalMarks() {
    // Return the total of all marks
    return marks.reduce((total,mark)=> total + mark, 0);
    // console.log(marks);
}

// Task 5
export function findFirstMarkOver80() {
    // Return the first mark greater than 80
    return marks.find(mark => mark > 80);
    //console.log(marks);
}

// Task 6
export function sortMarksLowestToHighest() {
    // Return marks sorted from lowest to highest
    return marks.sort((a, b) => a - b);
}


// ===========================================
// PROVIDED FUNCTIONS
// DO NOT EDIT
// ===========================================

export function displayResult(taskName, result) {

    const paragraph = document.createElement("p");

    paragraph.textContent = `${taskName}: ${result}`;

    if (outputElement) {
        outputElement.appendChild(paragraph);
    }

    console.log(taskName, result);
}

export function runTasks() {

    if (outputElement) {
        outputElement.innerHTML = "";
    }

    displayResult("Task 1", addMark());
    displayResult("Task 2", getMarksOver60());
    displayResult("Task 3", increaseMarksBy5());
    displayResult("Task 4", getTotalMarks());
    displayResult("Task 5", findFirstMarkOver80());
    displayResult("Task 6", sortMarksLowestToHighest());

}

// ===========================================
// ADD EVENT LISTENER
// SECTION A 
// ===========================================
el.addEventListener("DOMContentLoaded", () => {
    if (runTasksButton) {
        runTasksButton.addEventListener("click", runTasks);
    }});
    if (addMarkButton) {
        addMarkButton.addEventListener("click", () => {
            const result = addMark();
            displayResult("Task 1", result);
        });
    };
    el.addEventListener("DOMContentLoaded", () => {
        if (getMarksOver60Button) {
            getMarksOver60Button.addEventListener("click", () => {
                const result = getMarksOver60();
                displayResult("Task 2", result);
            });
        }
    });
    el.addEventListener("DOMContentLoaded", () => {
        if (increaseMarksBy5Button) {
            increaseMarksBy5Button.addEventListener("click", () => {
                const result = increaseMarksBy5();
                displayResult("Task 3", result);
            });
        }});
    el.addEventListener("DOMContentLoaded", () => {
        if (getTotalMarksButton) {
            getTotalMarksButton.addEventListener("click", () => {
                const result = getTotalMarks();
                displayResult("Task 4", result);
            });
        }});
    el.addEventListener("DOMContentLoaded", () => {
        if (findFirstMarkOver80Button) {
            findFirstMarkOver80Button.addEventListener("click", () => {
                const result = findFirstMarkOver80();
                displayResult("Task 5", result);
         })
     }}); 
    el.addEventListener("DOMContentLoaded", () => {
        if (sortMarksLowestToHighestButton) {
            sortMarksLowestToHighestButton.addEventListener("click", () => {   
                const result = sortMarksLowestToHighest();
                displayResult("Task 6", result);
            });
        }}) 
