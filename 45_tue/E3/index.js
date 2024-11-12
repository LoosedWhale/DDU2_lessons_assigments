
const students = [
  {
    first_name: "Jimi",
    last_name: "Hendrix",
    birth: "27 November 2000",
    university: "Malmö Universitet",
    program: "Guitarr Studies"  
  },
  {
    first_name: "Janis",
    last_name: "Joplin",
    birth: "19 January 2000",
    university: "Malmö Universitet",
    program: "Singing Studies"  
  },
  {
    first_name: "Peter",
    last_name: "Gabriel",
    birth: "23 May 2000",
    university: "Malmö Universitet",
    program: "Music Studies"  
  },
  {
    first_name: "Tina",
    last_name: "Turner",
    birth: "9 December 2000",
    university: "Malmö Universitet",
    program: "Music Studies"  
  }
];

// Använd objektarrayen (array av objekt) ovan för att fylla sidan
// så att det står:
// Name: Tina Turner
// Born: 9 December 2000
// Studies: Music Studies, Malmö University

let student;
for (let i = 0; i < students.length; i++) {
  if (students[i].first_name === "Tina" && students[i].last_name === "Turner") {
    student = students[i];
    break;
  }
}

if (student) {
  document.getElementById("name").textContent = `Name: ${student.first_name} ${student.last_name}`;
  document.getElementById("birth").textContent = `Born: ${student.birth}`;
  document.getElementById("studies").textContent = `Studies: ${student.program}, ${student.university}`;
}