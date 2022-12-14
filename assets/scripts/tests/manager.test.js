const Manager = require("../manager");

test("Able to set officeNumber", () => {
    const empOfficeNumber = 1;
    const emp = new Manager("Anthony", 1876466, "Quaz711@hotmail.com", empOfficeNumber, "Manager");
    expect(emp.officeNumber).toBe(empOfficeNumber);
});

test("Able to get employee title from getTitle", () => {
    const empTitle = "Manager";
    const emp = new Manager("Anthony", 1876466, "Quaz711@hotmail.com", 1, empTitle);
    expect(emp.getTitle()).toBe(empTitle);
});