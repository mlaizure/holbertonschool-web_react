interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: 'Josh',
    lastName: 'Lyman',
    age: 38,
    location: 'Washington D.C.'
}

const student2: Student = {
    firstName: 'Toby',
    lastName: 'Ziegler',
    age: 45,
    location: 'Washington D.C.'
}

const studentArray: Array<Student> = [student1, student2];
const table: HTMLTableElement = document.createElement('table');
const tHead: HTMLTableSectionElement = table.createTHead();
const tBody: HTMLTableSectionElement = table.createTBody();

const headRow: HTMLTableRowElement = tHead.insertRow();
const firstNameHead: HTMLTableCellElement = headRow.insertCell();
const locationHead: HTMLTableCellElement = headRow.insertCell();
firstNameHead.innerHTML = 'First_Name';
locationHead.innerHTML = 'Location';

studentArray.forEach((student) => {
    const row: HTMLTableRowElement = tBody.insertRow();
    const firstNameCell: HTMLTableCellElement = row.insertCell();
    const locationCell: HTMLTableCellElement = row.insertCell();
    firstNameCell.innerHTML = student.firstName;
    locationCell.innerHTML = student.location;
});

document.body.appendChild(table);
