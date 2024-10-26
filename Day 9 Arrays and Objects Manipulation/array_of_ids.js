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

function getListStudentsIds(students){
    if (!Array.isArray(students)) {
        return [];
    }
    return students.map(student => student.id);
}