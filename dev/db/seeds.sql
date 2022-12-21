INSERT INTO departments (name)
VALUES
    ('Management'),
    ('Development'),
    ('Resources');

INSERT INTO positions (title, salary, department_id)
VALUES  
    ('CEO', 1000000, 1),('COO', 175000, 2),('Department Head', 105000, 3),
    ('Entry Developer', 60000, 2),('Developer', 75000, 3),('Senior Developer', 105000, 1),
    ('HR', 50000, 1),('Sales', 60000, 2),('Security', 30000, 3);

INSERT INTO employees (first_name, last_name, roles_id, manager_id)
VALUES 
    ('Davis', 'Miles', 7, 9),('Ellington', 'Duke', 4, 8),('Armstrong', 'Louis', 2, 8),
    ('Monk', 'Thelodious', 3, 8),('Fitzgerald', 'Ella', 5, 10),('Holiday', 'Billie', 2, 9),
    ('Baker', 'Chet', 7, 9),('Simone', 'Nina', 1, 7),('Brubeck', 'Dave', 2, 8),
    ('Montgomery', 'West', 4, 10),('Getz', 'Stan', 8, 9),('Sinatra', 'Frank', 7, 9);