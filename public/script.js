// Lägg till händelselyssnare för att visa/dölja navigeringsmenyn när användaren klickar på ikonen.
document.querySelector(".bars-menu").addEventListener("click", () => {
    document.querySelector(".nav-items").classList.toggle("active");
});

// Lägg till händelselyssnare för navigeringslänkarna för att dölja navigeringsmenyn när en länk klickas.
document.querySelectorAll(".nav-link").forEach((item) => {
    item.addEventListener("click", () => {
        document.querySelector(".nav-items").classList.toggle("active");
    });
});

// Funktion för att hämta alla kurser från servern och visa dem i tabellen.
function getAllCourses() {
    const url = "https://backend-baserad-service-task.onrender.com/fetch-all-courses";
    const table = document.getElementById("course");
    fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((courses) => {
        courses.map((course) => {
            let newRow = table.insertRow();
            let cell1 = newRow.insertCell(0);
            let cell2 = newRow.insertCell(1);
            let cell3 = newRow.insertCell(2);
            let cell4 = newRow.insertCell(3);
            let cell5 = newRow.insertCell(4);

            // Fyll cellerna med kursinformation.
            cell1.innerHTML = course.course_code;
            cell2.innerHTML = course.course_name;
            cell3.innerHTML = course.syllabus;
            cell4.innerHTML = course.progression;
            cell5.innerHTML = "<span class='delete' onclick='deleteCourse("+course.id+")'>Radera</span>";
            cell5.dataset.id = course.id;
        });
    });
}

// Anropa funktionen för att hämta alla kurser när sidan laddas.
getAllCourses();

// Funktion för att skapa en ny kurs.
function createCourse() {
    let courseForm = document.getElementById("courseform");
    courseForm.onsubmit = (event) => {
        event.preventDefault();
        let formData = new FormData(courseForm);
        let data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        courseForm.innerHTML('dkjfkdjfkd');

        const url = "https://backend-baserad-service-task.onrender.com/create";
        fetch(url, {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then((response) => {
            if (response.status === 200) {
                alert("Klar!");
                location.reload();
            } else {
                alert("Fel");
            }
        });
    };
}

// Funktion för att radera en kurs.
function deleteCourse(courseID) {
    const url = "https://backend-baserad-service-task.onrender.com/delete";
    fetch(url, {
        method: "DELETE",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            id: courseID
        })
    })
    .then((response) => {
        if (response.status === 200) {
            alert("Klar!");
            location.reload();
        } else {
            alert("Fel");
        }
    });
}

