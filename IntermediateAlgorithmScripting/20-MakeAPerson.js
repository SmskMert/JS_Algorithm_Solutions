const Person = function (firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly

  Person.prototype.fullName = firstAndLast;
  Person.prototype._firstName = firstAndLast.split(' ')[0];
  Person.prototype._lastName = firstAndLast.split(' ')[1];


  this.getFirstName = function () {
    return this._firstName;
  }
  this.getLastName = function () {
    return this._lastName;
  }
  this.getFullName = function () {
    return this.fullName;
  };
  this.setLastName = function (last) {
    Person.prototype._lastName = last;
    let first = this.getFullName().split(' ')[0];
    let revisedLastName = last;
    let revisedFullName = first + ' ' + revisedLastName
    Person.prototype.fullName = revisedFullName;
  }

  this.setFirstName = function (first) {
    Person.prototype._firstName = first;
    let last = this.fullName.split(' ')[1];
    let revisedFirstName = first;
    let revisedFullName = revisedFirstName + ' ' + last;
    Person.prototype.fullName = revisedFullName;
  }
  this.setFullName = function (firstAndLast) {
    Person.prototype.fullName = firstAndLast;
    Person.prototype._firstName = firstAndLast.split(' ')[0];
    Person.prototype._lastName = firstAndLast.split(' ')[1];
  }
};

const bob = new Person('Bob Ross');