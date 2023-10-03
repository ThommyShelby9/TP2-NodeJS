const useRouter = require("./routes")

const handler = (req, res) => {
    useRouter(req, res);
};

module.exports = handler;

/*   var getInformation = "";
  var getWord = "";
  var getLanguage = "";
  var dataResponse = "";
  req.on("data", function (chunk) {
    getInformation += chunk;
    getWord = JSON.parse(getInformation).mot;
    getLanguage = JSON.parse(getInformation).langue;

    if (getLanguage == "français") {
      dataResponse = words.filter(function (item) {
        return item.motFrançais == getWord;
      });
    } else {
      dataResponse = words.filter(function (item) {
        return item.motAnglais == getWord;
      });
    }
  });
  req.on("end", function () {
    if (dataResponse.length == 0) {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify("Ce mot n'existe pas!"));
    } else {
      if (getLanguage == "français") {
        res.end(JSON.stringify(dataResponse[0].defAnglais));
      } else {
        res.end(JSON.stringify(dataResponse[0].defFrançais));
      }
    }
  }); */
