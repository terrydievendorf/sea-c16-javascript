var Person = function(name, parentName, age) {
    this.name = name;
    this.parentName = parentName;
    this.age = age;
}

Person.prototype = {
    
    isDead: function() {
        return (!this.age) ? true : false;
    }
    
};