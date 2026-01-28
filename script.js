let students = JSON.parse(localStorage.getItem("students")) || [];

function addStudent() {
    let roll = document.getElementById("roll").value;
    let name = document.getElementById("name").value;
    let course = document.getElementById("course").value;
    let email = document.getElementById("email").value;

    if (!roll || !name || !course || !email) {
        alert("Please fill all fields");
        return;
    }

    students.push({ roll, name, course, email });
    localStorage.setItem("students", JSON.stringify(students));
    displayStudents();
    clearForm();
}

function displayStudents() {
    let list = document.getElementById("studentList");
    list.innerHTML = "";

    students.forEach((student, index) => {
        list.innerHTML += `
            <tr>
                <td>${student.roll}</td>
                <td>${student.name}</td>
                <td>${student.course}</td>
                <td>${student.email}</td>
                <td>
                    <button onclick="deleteStudent(${index})">Delete</button>
                </td>
            </tr>
        `;
    });
}

function deleteStudent(index) {
    students.splice(index, 1);
    localStorage.setItem("students", JSON.stringify(students));
    displayStudents();
}

function clearForm() {
    document.getElementById("roll").value = "";
    document.getElementById("name").value = "";
    document.getElementById("course").value = "";
    document.getElementById("email").value = "";
}

displayStudents();