let userCounter = 0;

class User {
  constructor(name, email, dob) {
    this.id = ++userCounter;
    this.name = name;
    this.email = email;
    this.dob = new Date(dob);
  }

  // setter
  setName(name) {
    this.name = name;
  }
  setEmail(email) {
    this.email = email;
  }
  setDob(dob) {
    this.dob = dob;
  }

  getAge() {
    const differenceMS = Date.now() - this.dob.getTime();
    const ageDate = new Date(differenceMS);

    return Math.abs(ageDate.getFullYear() - 1970);
  }
}

module.exports = User;
