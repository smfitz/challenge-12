DROP TABLE IF EXISTS departments;
DROP TABLE IF EXISTS employees;
DROP TABLE IF EXISTS positions;

CREATE TABLE departments (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL
);

CREATE TABLE employees (
    id INTEGER  AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    positions_id INTEGER,
    manager_id INTEGER,
    FOREIGN KEY (postions_id) REFERENCES positions(id) ON DELETE SET NULL,
    FOREIGN KEY (manager_id) REFERENCES positions(id) ON DELETE SET NULL
);

CREATE TABLE positions (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary INTEGER NOT NULL,
    department_id INTEGER,
    FOREIGN KEY (department_id) REFERENCES departments(id) 
);
