

exports.getDate  = function(){
  let today = new Date();
  // var dayIndex = today.getDay();
  // const dayList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  // var day = dayList[dayIndex]
  let options = {
    weekday: "long",
    day: "numeric",
    month:"long"
  };

  return today.toLocaleDateString("en-US", options);

};

exports.getDay = function(){
  let today = new Date();
  // var dayIndex = today.getDay();
  // const dayList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  // var day = dayList[dayIndex]
  let options = {
    weekday: "long",
  };

  return today.toLocaleDateString("en-US", options);

}
