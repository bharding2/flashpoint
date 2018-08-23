let bodyEl = document.getElementsByTagName('body')[0];
let titleSections = Array.prototype.slice.call(document.getElementsByTagName('section'));
let titleTargets = [];
let namesArray = ['NOAH', 'STELLA', 'FIONA'];

let currentPassAttempt = '';

titleSections.forEach((section) => {
  titleTargets.push(section.textContent);

  section.addEventListener('click', (event) => {
    let newPassAttempt = currentPassAttempt + section.textContent;

    if (namesArray.includes(newPassAttempt)) {
      return grantAccess(newPassAttempt);
    }
    
    let firstLetters = [];
    let newPassKeys = namesArray.map((name) => {
      firstLetters.push(name[0]);
      return name.slice(0, newPassAttempt.length);
    });

    if (newPassKeys.includes(newPassAttempt)) {
      console.log(newPassAttempt);
      return currentPassAttempt = newPassAttempt;
    }

    if (firstLetters.includes(section.textContent) && newPassAttempt[0] !== section.textContent) {
      console.log(section.textContent);
      return currentPassAttempt = section.textContent;
    }
  });
});

function grantAccess(name) {
  console.log(`Access Granted for ${name}`);

  if (window[`launch${name}`]) {
    window[`launch${name}`](titleSections);
  }
}
