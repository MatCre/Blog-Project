const pressToSort = function () {
    //Grab the ul DOM element with the class of .listOfNumbers
    const numberList = document.querySelector('.listOfNumbers');
    //Select all the li DOM element from the ul, it is a node object atm
    const numberListNode = numberList.querySelectorAll('li');
    //Create an array from the node object that contains all the <li>
    const array = Array.from(numberListNode);
    //Get the inner HTML of each array element which in turn is still an object so the .innerHTML method can be used on it
    const numbersFinal = array.map(item => item.innerHTML);
    //Create a function to sort in ascending order
    function compareNumbers(a,b) {
    return a - b;
    }
    //Call sort of the array of numbers
    const sortedNumbers = numbersFinal.sort(compareNumbers);
    //Create a ul html element of the new list that includes the values from the sorted array
    //I think i can reduce the lenght of this will revisit
    const newList = document.createElement('ul');
    newList.innerHTML = `<li>${sortedNumbers[0]}</li>
                         <li>${sortedNumbers[1]}</li>
                         <li>${sortedNumbers[2]}</li>
                         <li>${sortedNumbers[3]}</li>
                         <li>${sortedNumbers[4]}</li>
                         <li>${sortedNumbers[5]}</li>
                         <li>${sortedNumbers[6]}</li>
                         <li>${sortedNumbers[7]}</li>`
    //find the parent div of the ul element
    const parentDiv = numberList.parentNode;
    //replace the child of that parent (the old list) with the new list.
    parentDiv.replaceChild(newList, numberList);
}
// added an event listener to the button that runs the above function
const sortButton = document.querySelector('.sortButton');
sortButton.addEventListener('click',pressToSort);