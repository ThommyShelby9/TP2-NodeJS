const words = [
  {
    id: 1,
    motFrançais: "manger",
    motAnglais: "to eat",
    defAnglais: "come and eat",
    defFrançais: "action de se nourir",
  },
  {
    id: 2,
    motFrançais: "courir",
    motAnglais: "to run",
    defAnglais: "come  and run",
    defFrançais: "action de filer",
  },
];

const filter = (getWord, getLanguage, dataResponse) => {
  if (getLanguage == "français") {
    dataResponse = words.filter(function (item) {
      return item.motFrançais == getWord;
    });
  } else {
    dataResponse = words.filter(function (item) {
      return item.motAnglais == getWord;
    });
  }
  return dataResponse
};

module.exports = { words, filter };
