// import express module
const express = require("express");
const app = express();
// import faker
const faker = require("faker");


class User {
    constructor(){
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.email = faker.internet.password();
    }
}

class Company {
    constructor(){
        this.name = faker.company.companyName();
        this.address = {
            street: faker.address.streetAddress(), 
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCodeByState(),
            country: faker.address.country()
        }
    }
}

console.log(new User);
console.log(new Company);

app.get("/api/users/new", (req, res) => {
    res.json(new User());
});

app.get("/api/companies/new", (req, res) => {
    res.json(new Company());
});

app.get("/api/user/company", (req, res) => {
    res.json({
        user: new User(),
        company: new Company(),
    });
});

app.listen(8000, () => console.log('Listening on port: 8000') );