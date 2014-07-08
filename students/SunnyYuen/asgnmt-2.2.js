function preferredName(first, last) {
  
  //  found this 
  //  if( !foo != !bar ) {
  //    ..
  //  }
  
  // at http://www.howtocreate.co.uk/xor.html
  // combined 

  return (!first == !last) ? false : (first || last);
  }
  
}