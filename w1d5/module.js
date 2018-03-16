const List = {
  store: function(...inputs) {
    this.arr.push(...inputs)
    console.log(this.arr);
  },

  sortlist: function() {
    this.arr.sort((a, b) => a - b);
    console.log("The sorted array is equal to: "+this.arr);
  }
}

List.arr = [];
List.store.bind(List);
List.sortList.bind(List);

module.exports = List
