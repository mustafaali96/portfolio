//  Work experience cards


const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Python Developer",
    cardImage: "../static/assets/images/experience-page/ast.jpg",
    place: "All Star Technology",
    time: "(Dec, 2020 - present)",
    desp: "<li>Developed Machine Learning model for Project Management Tool to predict resources for upcoming projects.</li> <li>Integrate applications with third-party web services.</li> <li>Created API endpoint to send/receive data thru web server.</li>",
  },
  {
    title: "Computer Vision Engineer",
    cardImage: "../static/assets/images/experience-page/xclusive-solutions.jpg",
    place: "Xclusive Solutions",
    time: "(Feb - Dec, 2020)",
    desp: "<li>Developed Artificial Intelligence based Automatic License Plate Recognition system using Darknet and pytesseract which detect traffic violation.</li> <li>Tested toll collection ALPR system on single network at FWO Karachi highway</li> <li>Automate Tolling system which maintains the record of driver's enter/exit time.</li>",
  },
  {
    title: "Computer Vision Intern/Teaching Assistant",
    cardImage: "../static/assets/images/experience-page/bleed-ai.png",
    place: "Bleed AI",
    time: "(Nov, 18 - Dec, 19)",
    desp:"<li>Provide assistance on 2 months Traditional Computer Vision Course offered at Sir Syed University of Engineering and Technology.</li><li>Hands-on practice on different Feature Extraction Algorithms like HOG, SIFT, SURF, and BRIEF</li>",
  },
  {
    title: "Data Analyst Intern Intern",
    cardImage: "../static/assets/images/experience-page/decima.png",
    place: "Decima",
    time: "(Jun, 18 - Aug, 18)",
    desp:"<li>Developed deep learning model to automate tasks using Python.</li><li>Made changes to official Decima website.</li>",
  },
  {
    title: "Enterprise Resource Planning Intern",
    cardImage: "../static/assets/images/experience-page/pia.jpg",
    place: "Pakistan International Airlines",
    time: "(Jan, 18 - Feb, 18)",
    desp:"<li>Got real world experience to explore the relevant knowledge about ERP (Enterprise Resource Planning).</li> <li>Research related experience on SCM (Supply Chain Management) functional area.</li> <li>Detailed Technical Report on PIA ERP system, focused on CRM and SCM modules</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
      <ul>
      <li class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </li>
    </ul>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);


// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "Karachi.AI <br> Meetup 11",
    cardImage: "../static/assets/images/experience-page/karachi-ai-meetup-11.jpg",
    description:
      "Responsible for engaging peoples from social platforms including Karachi AI Facebook, LinkedIn page.",
  },
  {
    title: "Bleed-AI Seminar on Computer Vision",
    cardImage: "../static/assets/images/experience-page/bleed-ai.png",
    description:
      "Responsible for student's engagement on Traditional Computer Vision seminar at Sir Syed University of Engineering and Technology.",
  },
  {
    title: "Karachi.AI - Community of Applied AI Practitioners",
    cardImage: "../static/assets/images/experience-page/karachi-ai-community.jpg",
    description:
      "Moderating and posting AI based content to engage peoples on Karachi.AI - Community of Applied AI Practitioners FB & LinkedIn group.",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" style="height: 550px;width:450px">
      
      <img src="${cardImage}" height="200" width="75" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);


// Seminar Card


const mentorshipcards = document.querySelector(".mentorship-cards");
const mentor = [
  {
    title: "International Conference on Information Science & Communication Technology 2020",
    image: "../static/assets/images/experience-page/icisct1.jpg",
    time: "8th Feb 2020",
    desp: "<li>Presented research paper at 2nd International Conference on Information Science & Communication Technology 2020 at ICCBS.</li><hr /><li>Task and Billing system developed on Salesforce Platform to automate tasks with chat integration to communicate easily.</li>",
  },
  {
    title: "Karachi.AI Ramzan Special Series: Google Cloud Platform",
    image: "../static/assets/images/experience-page/karachi-ai-ramzan-special.jpg",
    time: "23rd May 2020",
    desp: "<li>Live session of Karachi.AI in which I talked about Google Cloud Professional Data Engineering Certification.</li><hr /><li>Hands on – coding session on Google Cloud Platform, Google Vision API, Big-Query ML, Streaming data pipelines for real-time dashboards with Cloud Dataflow.</li>",
  },
  {
    title: "Karachi AI Meetup # X : Delivering Data Science Applications",
    image: "../static/assets/images/experience-page/karachi-ai-meetup-x.jpg",
    time: "22nd Aug 2020",
    desp: "<li>A technical and domain knowledge based hands on – coding session where various national and international speakers from IBM, Google and Amazon discussed and presented the approach to deliver data science and machine learning applications via renowned and new cloud frameworks such as StreamLit, PyCaret, Rapid Miner, IBM Watson, Amazon AI, Microsoft Azure, Google ML and many more.</li><hr /><li>Implementation on Google Cloud Machine Learning to deliver end to end application of Data Science & ML</li>",
  },
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, time, desp}) =>
      (output += `        
      <div class="column mentorshipCard"> 
      <div class="card card2 mentorshipCardCover">
        <img src="${image}" class="card-img-top" alt="..."  width="64" height="300">
        <div class="information">
        <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <p class=""sub-title">${time}</p>
        </div>
        <div class="more-information">
        <ul class="list-group list-group-flush p-0 right-aligned">
          <div class="list-group-item card2 disclaimer">${desp}</div>
        </ul>
        </div>
        </div>
      </div>
      </div>
      `)
  );
  mentorshipcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
