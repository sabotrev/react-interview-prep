import React, { useState } from 'react';
import employeesList from './employees';
const FilteredEmployeeList = () => {
    const [employees, setEmployees] = useState(employeesList);
    const [searchInput, setSearchInput] = useState('');

    const filter = (event) => {
        const inputValue = event.target.value;
        setSearchInput(inputValue);
    };

    return (
        <>
            <input type="text" onChange={(event) => filter(event)} />
            <ul>
                {employees.map((employee, index) => {
                    if (employee.name.toLowerCase().includes(searchInput)) {
                        return <li key={index}>{employee.name}</li>;
                    }
                    return null;
                })}
            </ul>
        </>
    );
};

export default FilteredEmployeeList;
