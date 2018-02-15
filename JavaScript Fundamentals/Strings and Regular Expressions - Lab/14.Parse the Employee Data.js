function parseEmployeeData(input) {
    let regex = /^([A-Z][a-zA-Z]*) - ([1-9][0-9]*) - ([a-zA-Z0-9 -]+)$/;
    for (let employeeData of input) {
        let validEmployeeData = regex.exec(employeeData);
        if (validEmployeeData) {
            console.log(`Name: ${validEmployeeData[1]}\n` +
                `Position: ${validEmployeeData[3]}\n` +
                `Salary: ${validEmployeeData[2]} `);
        }
    }
}

parseEmployeeData(['Isacc - 1000 - CEO',
    'Ivan - 500 - Employee',
    'Peter - 500 - Employee']);