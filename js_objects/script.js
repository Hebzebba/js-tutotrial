const person_1 = {
  name: "Seth",
  age: 20,
};

const Car = {
  name: "",
  model: "",
  start: function () {
    console.log("car started");
  },
  stop: function () {
    console.log("car stopped");
  },
};

const picanto = Car;

picanto.name = "picanto";
picanto.model = "model x";
picanto["number_plate"] = "xjsdaljfa";

const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

console.log(person.fullName());
