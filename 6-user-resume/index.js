const readline = require("readline-sync");

/*const readline = require(`readline-sync`);

const username = readline.question ("specify ur Name: ");

console.log(`hello ${username} hw r u`);
*/
// ********************************************************************************************************//

 

console.log("*******ITS my RESUME*******");

const name = readline.question("NAME: ");
const label = readline.question("LABEL: ");
const phone = readline.question("PHONE: ");
const url = readline.question("URL: ");
const email = readline.question("EMAIL: ");

const resume = {
    basics: {
        name: name,
        label: label,
        phone: phone,
        url:  url,
        email: email
    }
};


console.log("user details")

console.log(resume)



// output of git bash(1)

/* $ node index.js 
its my resume
NAME: Mohammed akif
LABEL: frontend
PHONE: 6309483676
URL: www.mohammedakif.in
EMAIL: mohammedakif260620@gmail.com
user details
{
  basics: {
    name: 'Mohammed akif',
    label: 'frontend',
    phone: '6309483676',
    url: 'www.mohammedakif.in',
    email: 'mohammedakif260620@gmail.com'
  }
}
   

//2nd output


Asif@DESKTOP-9GS1HK7 MINGW64 /c/Trainings/JavaScript-training/6-user-resume (master)
$ node index.js 
*******ITS my RESUME*******
NAME: Mohammed
LABEL: 4
PHONE: 4
URL:
EMAIL: 4
user details
{
  basics: { name: 'Mohammed', label: '4', phone: '4', url: '', email: '4' }
}
