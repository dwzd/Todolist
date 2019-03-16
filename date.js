//jshint esversion: 6
module.exports.getDate = getDate;

function getDate(){
  let options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  let today = new Date();
  let day = today.toLocaleDateString("en-CA", options);

  return day;
}

module.exports.getDay = getDay;

function getDay(){
  let today = new Date();
  let options = {
    weekday: "long"
  };

  let day = today.toLocaleDateString("en-US", options);

  return day;
}

console.log(module.exports);
