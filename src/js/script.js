/* Use the profile below */

const shakira = {
    
        name: "Shakira Isabel Mebarak Ripoll",
        title: "Singer, Songwriter & Philanthropist",
        email: "Shakira@gmai.com",
        phone: "+57 123 456 789",
        location: "Barranquilla, Colombia",
        img: "https://i.pinimg.com/736x/b9/d7/82/b9d78240421fa9ce2a1d0727c91abdb6.jpg",
        bio: "Shakira is a Colombian singer, songwriter, dancer, and philanthropist. She is known for her versatility in music styles, powerful voice, and energetic performances worldwide",
        education: [
            {title: "Colegio la Enseñanza", description:"completed primary and secondary education in Barranquilla."},
            {title: "Colombian Academy of Music", description:"Studied music theory and vocal training"}
        ],

        social: [
            {platform: "Facebook", icon: "fab fa-facebook-f", link: "https://www.facebook.com/shakira"},
            {platform: "Twitter", icon: "fab fa-twitter", link: "https://twitter.com/shakira"},
            {platform: "Instagram", icon: "fab fa-instagram", link: "https://www.instagram.com/shakira"},
            {platform: "YouTube", icon: "fab fa-youtube", link: "https://www.youtube.com/user/shakira"}
        ],
        skills:[
            {name: "Singing", value: 95},
            {name: "Dacing", value: 90},
            {name: "Songwriting", value: 85},
            {name: "Philanthropy", value: 80}]
    };

    document.querySelector("#profile-img").src = shakira.img;
document.querySelector("#profile-name").innerText = shakira.name;
document.querySelector("#profile-title").innerText = shakira.title;
document.querySelector("#profile-email").innerText = shakira.email;
document.querySelector("#profile-phone").innerText = shakira.phone;
document.querySelector("#profile-location").innerText = shakira.location;
document.querySelector("#bio-text").innerText = shakira.bio;

const socialContainer = document.querySelector("#social-links");
socialContainer.innerHTML = "";
shakira.social.forEach(s => {
    socialContainer.insertAdjacentHTML("beforeend", `
        <li><a href="${s.link}" target="_blank" class="rounded-3"><i class="${s.icon}"></i></a></li>
        `);
});

const eduContainer = document.querySelector("#education-section");
eduContainer.innerHTML = ""; // Limpiar template
shakira.education.forEach(e => {
    eduContainer.insertAdjacentHTML("beforeend", `
        <div class="col-sm-6 col-xl-4 mt-4">
            <div class="card text-center border-0 rounded-3">
                <div class="card-body">
                    <i class="ti-bookmark-alt icon-box medium rounded-3 mb-4"></i>
                    <h3 class="h5 mb-3">${e.title}</h3>
                    <p class="mb-0">${e.description}</p>
                </div>
            </div>
        </div>
    `);
});

// Skills
const skillsContainer = document.querySelector(".progress-style1");
document.querySelector("#skills-text").innerText = "Shakira excels in singing, dancing, songwriting, and humanitarian efforts.";
skillsContainer.innerHTML = ""; // Limpiar template
shakira.skills.forEach(skill => {
    skillsContainer.insertAdjacentHTML("beforeend", `
        <div class="progress-text">
            <div class="row">
                <div class="col-6 fw-bold">${skill.name}</div>
                <div class="col-6 text-end">${skill.value}%</div>
            </div>
        </div>
        <div class="custom-progress progress rounded-3 mb-4">
            <div class="animated custom-bar progress-bar slideInLeft" style="width:${skill.value}%" aria-valuemax="100" aria-valuemin="0" aria-valuenow="${skill.value}" role="progressbar"></div>
        </div>
    `);
});


