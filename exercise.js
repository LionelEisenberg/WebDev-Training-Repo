function printReverse(items) {
  for (var i = items.length - 1; i >= 0; i--) {
    console.log(items[i]);
  }
}



function isUniform(items) {
  for (var i = 0; i < items.length - 1; i++) {
    if (items[i] != items[i+1]) {
      return false;
    }
  }
  return true;
}


function sumArray(items) {
  var total = 0;
  items.forEach(function(item) {
    total += item;
  });
  return total;
}

function max(items) {
  var max = 0;
  items.forEach(function(item) {
    if (item > max) {
      max = item;
    }
  });
  return max;
}

var array = {
  var items = [100,-5]
  function myForEach(func) {
    for (var i = 0; i < this.items.length; i++) {
      func();
    }
  }
}
