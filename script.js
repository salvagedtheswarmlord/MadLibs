let adjective1 = prompt("enter an adjective.");
let creature=prompt("enter a name for the spooky creature.");
let adjective2=prompt("enter an adjective.");
let friend=prompt("enter the name of your pal.");
let adjective3=prompt("enter an adjective.");
let adjective4=prompt("enter an adjective.");
let creature2=prompt("enter a name for the spooky creature.");



let story=
 `It was a dark and ${adjective1} Halloween night. A group of people walked by when suddenly a creature lept from the bushes this creature was a ${adjective2} ${creature} that looked ${adjective3}.But the crature was not alone it had brought a friend a friend named, ${friend},unlike the creature itself the friend of this creature was a ${adjective4} ${creature},  and a rather polite chap with propper english accent but everyone was terrified because it was a english accent from Egland.`;

let madLibOutputDiv = document.getElementById("madLibOutput");

madLibOutputDiv.innerHTML = `<p>${story}</p>`;