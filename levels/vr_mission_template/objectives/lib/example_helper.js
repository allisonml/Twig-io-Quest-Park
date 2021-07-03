// This is an example of how you might use objective validation helpers
// in your own code. You don't have to, but you'll often want to!

function isListOfThreeStrings(response = "") {
    try {
    let list = JSON.parse(response);
    } catch (e) {
        return false;
    }
    let isListLengthThree = list.length === 3;
    let isListOfStrings = true;
    for(let item in list) {
        if(typeof(item) !== "string") {
            isListOfStrings = false;
        }
    }
    return isListLengthThree && isListOfStrings;

}

function getsFirstElement(response = "") {
  return response === "thingsISee[0]";
}

function isReadyOrNot(testString = "") {
  return testString.toLowerCase() === "5, 4, 3, 2, 1, ready or not!";
}

module.exports = {
    isListOfThreeStrings,
    getsFirstElement,
    isReadyOrNot
};


