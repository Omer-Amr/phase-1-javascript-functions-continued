// code your solution here
function saturdayFun (activity) {
    if (activity) {
        return (`This Saturday, I want to ${activity}!`);  
    }else{
        return (`This Saturday, I want to roller-skate!`);
    } 
}

let mondayWork = function (activity="go to the office") {
    return `This Monday, I will ${activity}.`
  }

let wrapAdjective = function(style="*") {
    return function(adjective="a hard worker") {
      return `You are ${style}${adjective}${style}!`
    }
}

