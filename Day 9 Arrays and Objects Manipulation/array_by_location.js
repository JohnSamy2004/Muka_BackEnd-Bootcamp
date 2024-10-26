function getListStudents() {
    return [
        {
            id: 1,
            firstname: 'Ziad',
            location: 'San Francisco'
        },
        {
            id: 2,
            firstname: 'James',
            location: 'Columbia'
        },
        {
            id: 5,
            firstname: 'Serena',
            location: 'San Francisco'
        }
    ];
}

function getListStudentsByLocation(students, city){
    return students.filter(student => student.location === city);
}