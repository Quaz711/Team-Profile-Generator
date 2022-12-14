const Employee = require("../employee");

test("Able to create employee", () => {
    const emp = new Employee();
    expect(typeof (emp)).toBe("object");
});

test("Able to set employee name", () => {
    const empName = "Anthony";
    const emp = new Employee(empName);
    expect(emp.name).toBe(empName);
});

test("Able to set employee ID", () => {
    const empID = 1876466;
    const emp = new Employee("Anthony", empID);
    expect(emp.id).toBe(empID);
});

test("Able to set employee email", () => {
    const empEmail = "Quaz711@hotmail.com";
    const emp = new Employee("Anthony", 1876466, empEmail);
    expect(emp.email).toBe(empEmail);
});

test("Able to get employee name from getName", () => {
    const empName = "Anthony";
    const emp = new Employee(empName);
    expect(emp.getName()).toBe(empName);
});

test("Able to get employee ID from getID", () => {
    const empID = 1876466;
    const emp = new Employee("Anthony", empID);
    expect(emp.getID()).toBe(empID);
});

test("Able to get employee email from getEmail", () => {
    const empEmail = "Quaz711@hotmail.com";
    const emp = new Employee("Anthony", 1876466, empEmail);
    expect(emp.getEmail()).toBe(empEmail);
});

test("Able to get employee title from getTitle", () => {
    const empTitle = "Manager";
    const emp = new Employee("Anthony", 1876466, "Quaz711@hotmail.com", empTitle);
    expect(emp.getTitle()).toBe(empTitle);
});