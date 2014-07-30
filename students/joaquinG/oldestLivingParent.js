var people = [
  {
    name: 'Hank',
    age: 29,
    parent: 'Don'
  },
  {
    name: 'Deborah',
    age: 30,
    parent: 'Don'
  },
  {
    name: 'Danny',
    age: 24,
    parent: 'Don'
  },
  {
    name: 'Don',
    age: 64,
    parent: 'Haskell'
  },
  {
    name: 'Kathy',
    age: 75,
    parent: 'Lenora'
  },
  {
    name: 'Haskell',
    parent: 'Finus'
  },
  {
    name: 'Finus'
  }
];

function oldestLivingParent(people){
  
  var isParent=[];
  var oldestParent = 0;
  
  people.forEach(function(person){
       isParent.push(person.parent);
    });
  people.forEach(function(person){
    isParent.forEach(function(dad){
      if((person.name === dad) && (person.age > oldestParent)){
          oldestParent = person;
        }
    });
  }); 
return oldestParent.name;
}

console.log(oldestLivingParent(people));