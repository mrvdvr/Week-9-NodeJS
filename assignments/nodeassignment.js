
//WRİTE FİLE

var fs = require("fs");

var writeNumber = (first, second) => {
  var number = [];

  for (var i = first; i <= second; i++) {
    number.push(i);
  }

  return number;
};

fs.writeFile("number.txt", writeNumber, function(err) {
  if (err) {
    throw err;
  }
  console.log("saved!");
});
console.log(writeNumber(22, 55));


//READ FİLE

var fs = require("fs");

var print = (printFile) => {
    fs.readFile(printFile, "utf-8", function(err, data) {
        if (err) {
          throw err;
        }
        console.log(data.toString());
      });
}
console.log(print("mytextFile.txt"));
    
//MERGE FİLES
var fs = require('fs');
function mergeFiles(file, appendFile){
    
fs.readFile(appendFile, function (err, data) {
    if (err) throw err;
    console.log('File was read');
    
fs.appendFile(file, data, function (err) {
    if (err) throw err;
    console.log('The "data to append" was appended to file!');
  });
  });
}
file = './mytextFile.txt';
appendFile = './yourtextFile.txt';
mergeFiles(file, appendFile);

//USING EXTERNAL MODULE
var moment = require('moment');

function getFutureDay(day) {
    console.log('Day name:' + moment(day).format('dddd'));
}

getFutureDay(4);

    


