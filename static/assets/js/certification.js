AOS.init();

// MOOCs Cards

const moocs = document.querySelector(".moocs");
const moocscards = [
  {
    title: "Data Science",
    cardImage: "../static/assets/images/certification-page/coursera1.png",
    moocLink: "https://www.coursera.org/browse/data-science",
  },
  {
    title: "Cryptography",
    cardImage: "../static/assets/images/certification-page/udemy.png",
    moocLink: "https://www.udemy.com/course/cryptography-for-beginners/",
  },
  {
    title: "Machine Learning",
    cardImage: "../static/assets/images/certification-page/coursera1.png",
    moocLink: "https://www.coursera.org/learn/machine-learning",
  },
  {
    title: "Introduction to HTML 5",
    cardImage: "../static/assets/images/certification-page/udacity_logo.png",
    moocLink: "https://www.udacity.com/course/intro-to-html-and-css--ud001",
  },
  {
    title: "Introduction to CSS 3",
    cardImage: "../static/assets/images/certification-page/udacity_logo.png",
    moocLink: "https://www.udacity.com/course/intro-to-html-and-css--ud001",
  },
  {
    title: "Javascript",
    cardImage: "../static/assets/images/certification-page/udacity_logo.png",
    moocLink: "https://www.udacity.com/course/intro-to-javascript--ud803",
  },
  {
    title: "Bootstrap 4",
    cardImage: "../static/assets/images/certification-page/udemy.png",
    moocLink: "https://www.udemy.com/course/bootstrap-4-tutorials/",
  },
  {
    title: "Intro to React",
    cardImage: "../static/assets/images/certification-page/EdX.png",
    moocLink: "https://www.edx.org/learn/reactjs",
  },
  {
    title: "Intro to React Native",
    cardImage: "../static/assets/images/certification-page/coursera1.png",
    moocLink: "https://www.coursera.org/lecture/react-native/introduction-to-react-native-Eax0D",
  },
  {
    title: "NodeJS, Express and MongoDB",
    cardImage: "../static/assets/images/certification-page/coursera1.png",
    moocLink: "https://www.coursera.org/learn/server-side-nodejs",
  },
  {
    title: "XML-AJAX",
    cardImage: "../static/assets/images/certification-page/udemy.png",
    moocLink: "https://www.udemy.com/course/xml-from-beginner-to-expert/",
  },
  {
    title: "Data Structures & Algorithms",
    cardImage: "../static/assets/images/certification-page/udacity_logo.png",
    moocLink: "https://www.udacity.com/course/data-structures-and-algorithms-nanodegree--nd256",
  },
];

const experience = [
  {
    img: "../static/assets/images/certification-page/c1.png"
  },
  {
    img: "../static/assets/images/certification-page/c2.jpg"
  },
  {
    img: "../static/assets/images/certification-page/c3.png"
  },
  {
    img: "../static/assets/images/certification-page/c4.png"
  },
  {
    img: "../static/assets/images/certification-page/c5.jpg"
  },
];

let currentItem = 0;

const img = document.getElementById('image');

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

window.addEventListener('DOMContentLoaded', function () {
  showExperience();
})

function showExperience() {
  setInterval(function () {
    if (currentItem === experience.length) {
      currentItem = 0;
    }
      const item = experience[currentItem];
      img.src = item.img;
      currentItem++;

    },
    3000);
}

const showCards = () => {
  let output = "";
  moocscards.forEach(
    ({ title, cardImage, moocLink }) =>
    (output += `        
        <div class="col-6 col-md-3 col-sm-4 column" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600" >  
            <div class="card mb-3 mx-auto">
               <div class="content">
                  <div class="content-overlay"></div>
                    <img src=${cardImage} class="card-img-top content-image">     
                  <div class="content-details fadeIn-bottom">
                    <a href="${moocLink}" target="_blank"><i class="fa fa-info-circle fa-2x" aria-hidden="true" style="color: white;"></i></a>                                   
                  </div>
                </div>
                <div class="card-body">
                    <h6 class="mt-0 py-2 text-center font-weight-bold mooc-title" style="font-size:12px;">${title}</h6>
                </div>
            </div>
        </div>        
      `)
  );
  moocs.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);


/* Badges*/

const bagdes = document.querySelector(".badges");
const badgesection = [
  {
    title: "Python for Data Science",
    image: "../static/assets/images/certification-page/badge-Python_101_Data_Science.png",
    description: "Earned Aug 15, 2019",
    link: "https://www.youracclaim.com/badges/62017a6f-2dd6-4ff6-a615-55d3230ad3ff",
  },
  {
    title: "Karachi.AI Meetup X : Honorable Speaker",
    image: "../static/assets/images/certification-page/badge-Karachi-AI-Association-of-AppliedAI-Practitioners-Karachi-AI-Meetup-X-Honorable-Speaker-2020-08-22.png",
    description: "Earned Aug 21, 2020",
    link: "https://api.au.badgr.io/public/assertions/euJWUoUlTkSqcjarrXpKRg?identity__email=ssuet.se2016%40gmail.com",
  },
  {
    title: "Karachi.AI | Certified Data Analyst (FAST-NU)",
    image: "../static/assets/images/certification-page/Karachi.AI - Association of Applied AI Practitioners - Karachi.AI  Certified Data Analyst (FAST-NU) - 2021-01-31.png",
    description: "Earned Jan 31, 2021",
    link: "https://api.au.badgr.io/public/assertions/UFCBj9iaSDqi84wRU3OmjA?identity__email=ssuet.se2016%40gmail.com",
  },
  {
    title: "Hackmakers DigitalDefence 2020",
    image: "../static/assets/images/certification-page/badge-Hackmakers-Hackmakers-DigitalDefence-2020-Participant-Certificate-2020-12-08.png",
    description: "Earned Dec 7, 2020",
    link: "https://api.au.badgr.io/public/assertions/FYMH-tZ7RX6UMJoA-_qStg?identity__email=engr.mustafa.ali.mir%40gmail.com",
  },
  {
    title: "BigQuery Basics for Data Analysts",
    image: "../static/assets/images/certification-page/badge-BigQuery-Basics-for-Data-Analysts.png",
    description: "Earned Sep 27, 2020",
    link: "https://www.qwiklabs.com/public_profiles/e29674af-f3fe-4a3b-b49c-d0895148e781",
  },
  {
    title: "Intermediate ML TensorFlow on GCP",
    image: "../static/assets/images/certification-page/badge-Intermediate-ML-TensorFlow-on-GCP.png",
    description: "Earned Sep 29, 2020",
    link: "https://www.qwiklabs.com/public_profiles/e29674af-f3fe-4a3b-b49c-d0895148e781",
  },
  {
    title: "NCAA® March Madness® Bracketology with Google Cloud",
    image: "../static/assets/images/certification-page/badge-NCAA-March-Madness-Bracketology-with-Google-Cloud.png",
    description: "Earned Sep 27, 2020",
    link: "https://www.qwiklabs.com/public_profiles/e29674af-f3fe-4a3b-b49c-d0895148e781",
  },
  {
    title: "Intro to ML Image Processing",
    image: "../static/assets/images/certification-page/badgr-Intro-to-ML-Image-Processing.png",
    description: "Earned Oct 9, 2020",
    link: "https://www.qwiklabs.com/public_profiles/e29674af-f3fe-4a3b-b49c-d0895148e781",
  },
  {
    title: "Intro to ML Language Processing",
    image: "../static/assets/images/certification-page/badge-Intro-to-ML-Language-Processing.png",
    description: "Earned Sep 25, 2020",
    link: "https://www.qwiklabs.com/public_profiles/e29674af-f3fe-4a3b-b49c-d0895148e781",
  },
];

const showCards1 = () => {
  let output = "";
  badgesection.forEach(
    ({ title, image, description, link }) =>
    (output += `       
      <div class="col-lg-4 col-md-6 p-2" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600"> 
        <img class="img-fluid d-block mb-3 mx-auto hvr-grow" src="${image}" alt="Card image cap" width="200">
          <div class="text-center font-weight-bolder" style="font-size: 1.3em;">${title}</div>
          <div class="text-center text-muted font-weight-bolder p-2">${description}</div>
          <div class="text-center font-weight-bolder" style="box-sizing: content-box; display: flex; align-items: center; justify-content: center; margin: 0; font-size:14px; font-weight: bold; width: 48px; height: 16px; border-radius: 4px; border: solid 1px black; text-decoration: none; padding: 6px 16px; margin: 16px 0; color: black;">
            <a href="${link}" target="_blank">Verify</a>
          </div>
      </div>`)
  );
  bagdes.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards1);


/* Timeline Section*/

const timeline = document.querySelector(".timeline");
const timelinesection = [
  {
    heading: "Massachusetts Institute of Technology",
    image: "../static/assets/images/certification-page/timeline-1.svg",
    subheading: "Bachelors of Science, Computer Science & Engineering, (2020-2024)",
    description: "<li>Top 1% in the department</li><li>Best undergraduate Reseracher</li><li>Betsy Schumacker Woman</li><li>Athlete of the Year Award</li>",
  },

  {
    heading: "Massachusetts Institute of Technology",
    image: "../static/assets/images/certification-page/timeline-1.svg",
    subheading: "Bachelors of Science, Computer Science & Engineering, (2020-2024)",
    description: "<li>Top 1% in the department</li><li>Best undergraduate Reseracher</li><li>Betsy Schumacker Woman</li><li>Athlete of the Year Award</li>",
  },

  {
    heading: "Massachusetts Institute of Technology",
    image: "../static/assets/images/certification-page/timeline-1.svg",
    subheading: "Bachelors of Science, Computer Science & Engineering, (2020-2024)",
    description: "<li>Top 1% in the department</li><li>Best undergraduate Reseracher</li><li>Betsy Schumacker Woman</li><li>Athlete of the Year Award</li>",
  },

  {
    heading: "Massachusetts Institute of Technology",
    image: "../static/assets/images/certification-page/timeline-1.svg",
    subheading: "Bachelors of Science, Computer Science & Engineering, (2020-2024)",
    description: "<li>Top 1% in the department</li><li>Best undergraduate Reseracher</li><li>Betsy Schumacker Woman</li><li>Athlete of the Year Award</li>",
  },
];

const showCards2 = () => {
  let output = "";
  timelinesection.forEach(
    ({ heading, image, subheading, description }) =>
    (output += `       
      <div class="timeline" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="300">
      <div class="timeline-content">
        <h4 class="center-align font-weight-bolder pt-1">${heading}</h6>
        <div class="row">
          <div class="col-lg-4 col-md-4 col-sm-4">
            <img src="${image}" alt="" height="110"
              class=" mt-2 w-100 mx-auto">
          </div>
          <div class="col-lg-8 col-md-8 col-sm-8 px-4">
            <span style="opacity: 0.9; font-size: 20px;">
              ${subheading}
            </span>
            <h5 class="text-muted mt-2" style="font-size: small;">Activities:</h6>
            <ol style="margin-top: -8px; margin-left: -10px; font-size: 15px; list-style: disc;">
              ${description}
            </ol>
          </div>
        </div>
      </div>
    </div>`)
  );
  timeline.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);