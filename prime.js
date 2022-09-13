function Prime(m) {

    if (m === 2) {
      return true;
    } else if (m> 1) {
      for (var i = 2; i < m; i++) {
  
        if (m % i !== 0) {
          return true;
        } else if (n === i * i) {
          return false
        } else {
          return false;
        }
      }
    } else {
      return false;
    }
  
  }
  
  console.log(Prime(121));