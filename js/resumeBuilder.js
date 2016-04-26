/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
    "name": "Esmond Kan",
    "role": "Front-End Web Developer",
    "contacts": {
        "mobile": "604-561-9600",
        "email": "contact@esmondkan.com",
        "github": "ezumi",
        "linkedin": "ca.linkedin.com/in/esmondkan",
        "location": "Vancouver, British Columbia"
    },
    "welcomeMessage": "Hello World!",
    "skills": ["HTML5", "CSS3", "Javascript", "jQuery","Photoshop"],
    "bioPic": "images/fry.jpg",
     display: function() {

        /* Name and Role */
        $("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
        $("#header").prepend(HTMLheaderName.replace("%data%", bio.name));

        /* Contact Information */
        $("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
        $("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
        $("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
        $("#topContacts").append(HTMLcontactGeneric.replace("%contact%", "linkedIn").replace("%data%", bio.contacts.linkedin));
        $("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));

        $("#footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
        $("#footerContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
        $("#footerContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
        $("#footerContacts").append(HTMLcontactGeneric.replace("%contact%", "linkedIn").replace("%data%", bio.contacts.linkedin));

        /* Bio Image */
        $("#header").append(HTMLbioPic.replace("%data%", bio.bioPic));

        /* Welcome Message */
        $("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));

        /* Skills */
        $("#header").append(HTMLskillsStart);
        bio.skills.forEach(function(skillData) {
            $("#skills").append(HTMLskills.replace("%data%", skillData));
        });
    }
}

var education = {
    "schools" : [
        {
            "name": "Vancouver Career College",
            "location": "5021 Kingsway, Burnaby, BC, V5H 4A5",
            "degree": "Diploma",
            "majors": "Computer Systems Programmer",
            "dates": "2000 - 2001",
            "url": "http://www.vccollege.ca/"
        },
        {
            "name": "British Columbia Institute of Technology",
            "location": "3700 Willingdon Avenue, Burnaby, BC, V5G 3H2",
            "degree": "Diploma",
            "majors": "Computer Systems Technology",
            "dates": "2003 - 2004",
            "url": "http://www.bcit.ca/"
        }
    ],
    "onlineCourses" : [
        {
            "title": "Front-End Web Developer Nanodegree",
            "school": "Udacity",
            "date": 2016,
            "url": "http://www.udacity.com/"
        }
    ],
    display : function() {
        education.schools.forEach(function(schoolData, index) {
            $("#education").append(HTMLschoolStart);

            /* Replace URL and school name then concatenate degree to string */
            var formattedSchool = HTMLschoolName.replace("#", education.schools[index].url)
                                                .replace("%data%", education.schools[index].name)
                                + HTMLschoolDegree.replace("%data%", education.schools[index].degree);

            $(".education-entry:last").append(formattedSchool);
            $(".education-entry:last").append(HTMLschoolDates.replace("%data%", education.schools[index].dates));
            $(".education-entry:last").append(HTMLschoolLocation.replace("%data%", education.schools[index].location));
            $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education.schools[index].majors));
        });

        education.onlineCourses.forEach(function(onlineData, index) {
            $("#education").append(HTMLonlineClasses);

            var onlineClasses = $("#education").find("h3");

            /* Replace URL and program name then concatenate school name to string */
            var formattedOnlineClasses = HTMLonlineTitle.replace("#", education.onlineCourses[index].url)
                                                        .replace("%data%", education.onlineCourses[index].title)
                                       + HTMLonlineSchool.replace("%data%", education.onlineCourses[index].school);

            onlineClasses.append(formattedOnlineClasses);
            onlineClasses.append(HTMLonlineDates.replace("%data%", education.onlineCourses[index].date));
            onlineClasses.append(HTMLonlineURL.replace("#", education.onlineCourses[index].url).replace("%data%", education.onlineCourses[index].url));
        });
    }
}

var work = {
    "jobs": [
        {
            "employer": "Metro West Insurance Agency Ltd",
            "title": "IT Technical Support",
            "location": "206 E Columbia Street, New Westminster, BC, V3L 3W5",
            "dates": "2006 - 2015",
            "description": "Deploy, configure and maintain computer systems at the company. Provide assistance to agents in resolving their technical issues.",
            "url": "http://metrowestinsurance.net/"
        },
        {
            "employer": "PushMedia",
            "title": "Marketing Project Manager",
            "location": "#285 - 4111 Hastings Street, Burnaby, BC, V5C 6T7",
            "dates": "2013 - Present",
            "description": "Develop and integrate advertising campaigns targeting various online mediums including web, social media, mobile and display network traffic. Design web visuals and graphic assets for marketing projects. Create fully responsive landing pages utilizing HTML, CSS, Javascript and jQuery. Optimize deployed campaigns with revised marketing strategies to increase return of investment.",
            "url": "http://pushmedia.ca/"
        }
    ],
    display : function() {
        work.jobs.forEach(function(workData, index) {
            $("#workExperience").append(HTMLworkStart);

            /* Replace URL and employter name then concatenate job title to string */
            var formattedEmployer = HTMLworkEmployer.replace("#", work.jobs[index].url)
                                                    .replace("%data%", work.jobs[index].employer)
                                  + HTMLworkTitle.replace("%data%", work.jobs[index].title);

            $(".work-entry:last").append(formattedEmployer);
            $(".work-entry:last").append(HTMLworkDates.replace("%data%", work.jobs[index].dates));
            $(".work-entry:last").append(HTMLworkLocation.replace("%data%", work.jobs[index].location));
            $(".work-entry:last").append(HTMLworkDescription.replace("%data%", work.jobs[index].description));
        });
    }
}

var projects = {
    "project" : [
        {
            "title": "Portfolio",
            "date": "4/2016",
            "description": "Personal portofolio to showcase the latest projects I have completed.",
            "images": ["images/197x148.gif", "images/197x148.gif"]
        }
    ],
    display : function() {
        projects.project.forEach(function(projectData, index) {
            $("#projects").append(HTMLprojectStart);
            $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projects.project[index].title));
            $(".project-entry:last").append(HTMLprojectDates.replace("%data%", projects.project[index].date));
            $(".project-entry:last").append(HTMLprojectDescription.replace("%data%", projects.project[index].description));

            if(projects.project[index].images.length > 0) {
                projects.project[index].images.forEach(function(imageData, imageIndex){
                    $(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.project[index].images[imageIndex]));
                });
            }
        });
    }
}

bio.display();
education.display();
work.display();
projects.display();

$("#mapDiv").append(googleMap);