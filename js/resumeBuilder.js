/*
This is empty on purpose! Your code to build the resume will go here.
 */

var name = "Jonathon Medd";
var formattedName = HTMLheaderName.replace("%data%", name);
$('#header').append(formattedName);

var role = "CRM Developer";
var formattedRole = HTMLheaderRole.replace("%data%", role);
$('#header').prepend(formattedRole);



