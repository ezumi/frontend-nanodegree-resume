/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
    "name": "Esmond Kan",
    "role": "Front End Developer",
    "welcomeMessage": "Hello World!",
    "contacts": {
        "email": "contact@esmondkan.com",
        "mobile": "604-561-9600",
        "github": "ezumi",
        "linkedin": "ca.linkedin.com/in/esmondkan",
        "location": "Vancouver, British Columbia"
    },
    "skills": ["Html", "CSS", "Javascript", "jQuery","Ninja Skills"],
    "bioPic": "images/fry.jpg",
    display: function() {

        /* Name and Role */
        $("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
        $("#header").prepend(HTMLheaderName.replace("%data%", bio.name));


        /* Contact Information */
        $("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
        $("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
        $("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
        $("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));

        /* Bio Image */
        $("#header").append(HTMLbioPic.replace("%data%", bio.bioPic));

        /* Welcome Message */
        $("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));

        /* Skills */
        $("#header").append(HTMLskillsStart);
        var x = 0;
        while (bio.skills[x] !== undefined) {
            $("#skills").append(HTMLskills.replace("%data%", bio.skills[x]));
            x++;
        }
    }
}

var education = {
    "schools" : [
        {
            "name": "Vancouver Career College",
            "location": "5021 Kingsway, Burnaby, BC, V5H 4A5",
            "degree": "Diploma",
            "majors": "Computer Systems Programmer",
            "dates": 2000,
            "url": "http://www.vccollege.ca/"
        },
        {
            "name": "British Columbia Institute of Technology",
            "location": "3700 Willingdon Avenue, Burnaby, BC, V5G 3H2",
            "degree": "",
            "majors": "Computer Systems Technology",
            "dates": 2003,
            "url": "http://www.bcit.ca/"
        }
    ],
    "onlineCourses" : [
        {
            "title": "Front End Nano Degree",
            "school": "Udacity",
            "dates": 2016,
            "url": "http://www.udacity.com/"
        }
    ]
}

var work = {
    "jobs": [
        {
            "employer": "Metro West Insurance Agency Ltd",
            "title": "IT Technical Support",
            "location": "206 E Columbia Street, New Westminster, BC, V3L 3W5",
            "dates": "04/2006 - 04/2015",
            "description": "Deploy, configure and maintain computer systems at the company. Provide assistance to agents in resolving their technical issues."
        },
        {
            "employer": "PushMedia",
            "title": "Marketing Project Manager",
            "location": "#285 - 4111 Hastings Street, Burnaby, BC, V5C 6T7",
            "dates": "01/2013 - Present",
            "description": "Develop advertising campaigns to target various online channels. This includes creating banner assets, html pages utilizing javascript and css. Optimize campaigns after deployment to streamline projects."
        }
    ]
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
        for (key in projects.project) {
            $("#projects").append(HTMLprojectStart);
            if(projects.project[key])
                $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projects.project[key].title));
                $(".project-entry:last").append(HTMLprojectDates.replace("%data%", projects.project[key].date));
                $(".project-entry:last").append(HTMLprojectDescription.replace("%data%", projects.project[key].description));
                if(projects.project[key].images.length > 0) {
                    for (image in projects.project[key].images) {
                        $(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.project[key].images[image]));
                    }
                }
        }
    }
}



/* Work Experience */
for (key in work.jobs) {
    $("#workExperience").append(HTMLworkStart);
    if(work.jobs[key]) {
        $(".work-entry:last").append(HTMLworkEmployer.replace("%data%", work.jobs[key].employer) + HTMLworkTitle.replace("%data%", work.jobs[key].title));
        $(".work-entry:last").append(HTMLworkDates.replace("%data%", work.jobs[key].dates));
        $(".work-entry:last").append(HTMLworkLocation.replace("%data%", work.jobs[key].location));
        $(".work-entry:last").append(HTMLworkDescription.replace("%data%", work.jobs[key].description));
    }
}

$(document).click(function(loc) {
// your code goes here
    logClicks(loc.pageX, loc.pageY);
});

bio.display();
projects.display();

$("#mapDiv").append(googleMap);
/*$("#main").append(internationalizeButton);

function inName() {
    var newName = bio.name.split(" ");
    newName[0] = newName[0].charAt(0).toUpperCase() + newName[0].slice(1).toLowerCase();
    newName[1] = newName[1].toUpperCase();
    return newName[0] +" "+ newName[1];
}*/