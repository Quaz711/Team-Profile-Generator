const Intern = require("../intern");

test("Able to set school", () => {
    const empSchool = "UCF";
    const emp = new Intern("Anthony", 1876466, "Quaz711@hotmail.com", empSchool, "Intern");
    expect(emp.school).toBe(empSchool);
});

test("Able to get employee title from getTitle", () => {
    const empTitle = "Intern";
    const emp = new Intern("Anthony", 1876466, "Quaz711@hotmail.com", "UCF", empTitle);
    expect(emp.getTitle()).toBe(empTitle);
});