const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let employees = [];

function askEmployeeInfo() {
  rl.question('Enter employee name (or type "done" to finish): ', (name) => {
    if (name.toLowerCase() === 'done') {
      saveEmployeeData();
    } else {
      rl.question('Enter employee age: ', (age) => {
        rl.question('Enter employee department: ', (department) => {
          const employee = {
            name: name,
            age: age,
            department: department
          };

          employees.push(employee);
          askEmployeeInfo();
        });
      });
    }
  });
}

function saveEmployeeData() {
  fs.readFile('employee-data.json', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      rl.close();
      return;
    }

    const existingEmployees = JSON.parse(data);
    const updatedEmployees = [...existingEmployees, ...employees];
    const jsonData = JSON.stringify(updatedEmployees, null, 2);

    fs.writeFile('employee-data.json', jsonData, (err) => {
      if (err) {
        console.error('Error writing to file:', err);
      } else {
        console.log('Employee data saved successfully!');
        readEmployeeData();
      }

      rl.close();
    });
  });
}

function readEmployeeData() {
  fs.readFile('employee-data.json', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
    } else {
      const employees = JSON.parse(data);
      console.log('Employee data:');
      console.log(employees);
    }
  });
}

askEmployeeInfo();
