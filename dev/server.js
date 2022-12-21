const inquirer = require('inquirer');
const consoleTable = require('console.table');
const connections = require('./db/connections');
const db = require('./db/connections');

// PROGRAM START

function initialPrompt() {
    return inquirer.prompt([
        {
        type: 'list',
        name: 'initialPrompt',
        message: 'Select a prompt',
        choices: ['Add Department', 'Add Position', 'Add Employee', 'View Departments', 'View Positionss', 'View Employees',],
        }
    ]).then(data => {
        console.log('==============================');
       switch(data.initialPrompt) {
           case 'Add Department':
            addDepartment();
            break;
           case 'Add Position':
            addPosition();
            break;
           case 'Add Employee':
            addEmployee();
            break;
           case 'View Departments':
            viewDepartments();
            break;
           case 'View Positions':
            viewPosition();
            break;
           case 'View Employees':
            viewEmployees();
            break;     
       }       
    });    
};

initialPrompt();

// ADD FUNCTIONS 

function addDepartment() {
    
    return inquirer.prompt(
        {
            type: 'input',
            name: 'departmentName',
            message: 'What is the name of the Department?'
        }
    ).then(data => {
        const dpName = data.departmentName;
        const sql = `INSERT INTO departments (name)
                        VALUES
                          (?)`;
        db.query(sql, dpName, (errors, results) => {
            if(errors){console.log(errors.message)};
        
        console.table(results);
        console.log('============================');
        console.log('Successfully added');
     });
     console.log('============================');
     initialPrompt();
    });
    
};

function addPosition() {

return inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of this position?'
    },
    {
        type: 'number',
        name: 'salary',
        message: 'How much is the salary for this position?'
    },
    {
        type: 'number',
        name: 'department_id',
        message: 'What would you like the department ID to be?'
    }
]).then(data => {
    
    db.query({sql: `INSERT INTO positions (title, salary, department_id)
    VALUES
    ('${data.title}', ${data.salary}, ${data.department_id});`}, (errors, results) => {
        if(errors){
            console.log(errors.message);
            return;
        };
    
    console.table(results);
    console.log('===========================');
    console.log('Successfully Added');
 });
 
 console.log('===========================');
 initialPrompt();
}).catch((err) => {
    if(err) {
        console.log(err.message);
    }
 });

}

function addEmployee() {
return inquirer.prompt([
    {
        type: 'input',
        name: 'first_name',
        message: 'What is the first name of the Employee?'
    },
    {
        type: 'input',
        name: 'last_name',
        message: 'What is the last name of the Employee?'
    },
    {
        type: 'number',
        name: 'positions_id',
        message: 'What is the position ID of the Employee?'
    },
    {
        type: 'number',
        name: 'manager_id',
        message: 'What is the manager ID of the Employee?'
    },
])
.then(data => {
    db.query({sql: `INSERT INTO employees (first_name, last_name, positions_id, manager_id)
    VALUES
        ('${data.first_name}', '${data.last_name}', ${data.positions_id}, ${data.manager_id});`}, (errors, results) => {
            if(errors) {
                console.log(errors.message);
                return;
            }

            console.table(results);
            console.log('===========================');
            console.log('Successfully added');
         });
         
         console.log('===========================');
         initialPrompt();
        }).catch((err) => {
            if(err) {
                console.log(err.message);
            }
         });
}

// VIEW FUNCTIONS

function viewDepartments() { db.query({sql:'SELECT * FROM departments'}, (errors, results, fields) => {
    if(errors) {console.log(errors.message)};
    console.table(results);
    initialPrompt();
});

};

function viewPositions() { db.query({sql:'SELECT * FROM positions'}, (errors, results, fields) => {
    if(errors) {console.log(errors.message)};
    console.table(results);
    initialPrompt();
});

};

function viewEmployees() { db.query({sql:'SELECT * FROM employees'}, (errors, results, fields) => {
    if(errors) {console.log(errors.message)};
    console.table(results);
    initialPrompt();
});

};
