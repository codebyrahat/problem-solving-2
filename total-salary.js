const employees = [
  { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
  { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
  { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
  { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];
function getMonthlyTotalSalary(employeeList) {
  let monthlyTotalSalary = 0;
  for (const emp of employeeList) {
    // prettier-ignore
    const currentMonthSalary = (emp.experience * emp.increment) + emp.starting;
    monthlyTotalSalary += currentMonthSalary;
  }
  return monthlyTotalSalary;
}
console.log(
  "The Total Salary of a Single Month of the Company will be : ",
  getMonthlyTotalSalary(employees)
);
