var Person = function(name, parent, age) {
    this.name = name;
    this.parent = parent;
    this.age = age
    this.isDead = function(age) {
      if(!this.age){
        console.log('You outside of time and space or somethimng?');
       } else {
         if(this.age <= 80){
           console.log('You seem to be telling the truth.');
         } else {
           console.log('Is that possible?');
         }
       }
    };
}; 


p = new Person("clean", "crate", 22);


    
console.log(p.name, p.parent, p.age, p.isDead());