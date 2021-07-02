// This is an example of how you might use objective validation helpers
// in your own code. You don't have to, but you'll often want to!

function isListOfThree(response = '') {
    try {
    var list = JSON.parse(response);
    } catch (e) {
        return false;
    }
    return list.length === 3;

}

//module.exports = {
//  isAList,
//  getsFirstElement,
//  isReadyOrNot
//};

function getsFirstElement(response = '') {
  return response.toLowerCase() === 'thingsisee[0]';
}

//module.exports = {
//  getsFirstElement
//};

function isReadyOrNot(testString = '') {
  return testString.toLowerCase() === '5, 4, 3, 2, 1, ready or not!';
}

module.exports = {
    isListOfThree,
    getsFirstElement,
    isReadyOrNot
};


