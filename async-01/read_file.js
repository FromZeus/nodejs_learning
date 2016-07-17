var fs = require("fs");

fs.readFile(__filename, {encoding: "utf8"}, gotFileContent);

function gotFileContent(err, content) {
  if (err) {
    console.error(err);
  } else {
    console.log("File content:\n\n%s", content);
  }
};
