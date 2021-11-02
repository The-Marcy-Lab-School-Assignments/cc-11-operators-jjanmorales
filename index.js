//1
// create two parameters
// conditional if statement 
// == will check only for value, not datatype
function areBothSame(n1, n2){
  if(n1 == n2){
      return true;
  }else{
      return false;
  }
}
console.log(areBothSame(true, 1));
//2
// create two parameters
// conditional if statement 
// === will check for value and datatype
function areBothEqual(n1, n2){
  if(n1 === n2){
      return true;
  }else{
      return false;
  }
}
console.log(areBothEqual("2", 2));
//3
// create four parameters
// conditional if statement 
// === will check for value and datatype
// returns true equal, if not returns false
function areAllFourEqual(n1, n2, n3, n4){
  if( n1 === n2 && n1 === n3 && n1 === n4){
      return true;
  }else{
      return false;
  }
}
console.log(areAllFourEqual("2", "2", "2", 2));

//4
// create four parameters
// conditional if statement 
// == will check for value only
// returns true equal, if not returns false
function areAllFourSame(n1, n2, n3, n4){
  if( n1 == n2 && n1 == n3 && n1 == n4){
      return true;
  }else{
      return false;
  }
}
console.log(areAllFourSame(true, true, 1, "1"));
//5
// create four parameters
// conditional if statement 
// == will check for value only
// === will check for value and datatype
// returns true equal, if not returns false
function areAllFourSameOrEqual(n1, n2, n3, n4){
  if( n1 == n2 && n1 == n3 && n1 == n4){
      return "same";
  }else if( n1 == n2 && n1 == n3 && n1 == n4){
      return "equal";
  }else{
      return null;
  }
}
console.log(areAllFourSame("2", "2", "2", "2"));

