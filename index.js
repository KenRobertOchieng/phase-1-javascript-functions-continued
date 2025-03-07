function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  }
  
  console.log(saturdayFun()); // Output: This Saturday, I want to roller-skate!
  console.log(saturdayFun("go hiking")); // Output: This Saturday, I want to go hiking!

  const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
  };
  
  console.log(mondayWork()); // Output: This Monday, I will go to the office.
  console.log(mondayWork("work from home")); // Output: This Monday, I will work from home.

  function wrapAdjective(flair = "*") {
    return function(adjective = "special") {
      return `You are ${flair}${adjective}${flair}!`;
    };
  }
  
  const encouragingPromptFunction = wrapAdjective("!!!");
  console.log(encouragingPromptFunction("a hard worker")); // Output: You are !!!a hard worker!!!
  console.log(wrapAdjective("%")("a dedicated programmer")); // Output: You are %a dedicated programmer%!
  