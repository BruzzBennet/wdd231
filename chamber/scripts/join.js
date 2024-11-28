var d = new Date();
document.getElementById("date").value = d.toDateString();

const membership = [
    {
        title: 'Non Profit',
        price: 0,
        benefits: [
            'No cost!'
        ]
    },
    {
        title: 'Bronze Membership',
        price: 20,
        benefits: [
            'Basic Training',
            'Invitations to Special Events'
        ]
    },
    {
        title: 'Silver Membership',
        price: 40,
        benefits: [
            'Basic Training',
            'Invitations to Special Events',
            'Advertising'
        ]
    },
    {
        title: 'Bronze Membership',
        price: 60,
        benefits: [
            'Basic Training',
            'Invitations to Special Events',
            'Advertising',
            'Special Discaounts'
        ]
    }
]

function ShowCourses(list) {
    document.getElementById("courses").innerHTML = ``;
    list.forEach(element => {
        let course = document.createElement("div");

        course.innerHTML = `<p> ${element.title}</p>`;
        course.addEventListener('click',()=>{
            displayCourseDetails(element);
        });
        course.classList.add("slide-in");
        document.getElementById('courses').appendChild(course);
    });
}

ShowCourses(membership);

const courseDetails = document.getElementById('membership-details');

function displayCourseDetails(course){
    courseDetails.innerHTML=``;
    courseDetails.innerHTML=`
    <button id="closeModal">X</button>
    <h2>${course.title}</h2>
    <p><strong>Price: </strong>$ ${course.price}</p>
    <p><strong>Benefits:</strong> ${course.benefits.join(', ')}</p>
    `;
    courseDetails.showModal();
    closeModal.addEventListener('click',()=>{
        courseDetails.close();
    });
}