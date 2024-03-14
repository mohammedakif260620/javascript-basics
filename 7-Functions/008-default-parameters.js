function greetUser(username = 'UNKNOWN') {
    console.log(`Welcome ${username}!`);
  }
  
  greetUser();
  greetUser('Adil Hussain');
  
  const welcomeUser = (username = 'UnKnown User') => {
    return `Welcome to my page! ${username}`
  }
  
  const welcomeAdil = welcomeUser('MOHAMMED Akif');
  console.log(welcomeAdil);


  //***************----------------below shown output-------------- 
  /*
Asif@DESKTOP-9GS1HK7 MINGW64 /c/Trainings/JavaScript-training/7-Functions (master)
$ node 008-default-parameters.js 
Welcome UNKNOWN!
Welcome Adil Hussain!
Welcome to my page! Adil Khan

Asif@DESKTOP-9GS1HK7 MINGW64 /c/Trainings/JavaScript-training/7-Functions (master)
$ node 008-default-parameters.js 
Welcome UNKNOWN!
Welcome Adil Hussain!
Welcome to my page! UnKnown User

Asif@DESKTOP-9GS1HK7 MINGW64 /c/Trainings/JavaScript-training/7-Functions (master)
$ node 008-default-parameters.js 
Welcome UNKNOWN!
Welcome Adil Hussain!
Welcome to my page! MOHAMMED Akif
  */