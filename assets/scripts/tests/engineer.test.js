const Engineer = require("../engineer");

test("Able to set gitHub", () => {
    const empGitHub = "Quaz711";
    const emp = new Engineer("Anthony", 1876466, "Quaz711@hotmail.com", empGitHub, "Engineer");
    expect(emp.gitHub).toBe(empGitHub);
});

test("Able to get employee title from getTitle", () => {
    const empTitle = "Engineer";
    const emp = new Engineer("Anthony", 1876466, "Quaz711@hotmail.com", "Quaz711", empTitle);
    expect(emp.getTitle()).toBe(empTitle);
});