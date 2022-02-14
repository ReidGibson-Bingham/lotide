
const tail = function(list) {
  let newList = [];
  for (let i = 1; i < list.length; i++) {
    newList.push(list[i]);
  }
  return newList;
};

module.exports = tail;