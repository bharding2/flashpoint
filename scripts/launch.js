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

    let messageEl = document.createElement('main');
    messageEl.classList.add(`${name}-messages`);
    bodyEl.appendChild(messageEl);

    fetch('https://api.github.com/repos/bharding2/flashpointe/issues')
      .then((response) => {
        return response.json();
      })
      .then((issues) => {
        let nameIssues = issues.filter((ele) => {
          return ele.labels.some((label) => {
            return label.name === name.toLowerCase();
          });
        });

        nameIssues.forEach((issue) => {
          createIssue(issue, messageEl);
        });
      });
  }
}

function createIssue(issue, parentEl) {
  var articleEl = document.createElement('article');
  articleEl.id = issue.number;

  var titleEl = document.createElement('h2');
  titleEl.textContent = issue.title;
  articleEl.appendChild(titleEl);

  var bylineEl = document.createElement('p');
  bylineEl.textContent = `Posted by ${issue.user.login} at ${issue.created_at}`;
  articleEl.appendChild(bylineEl);

  var bodyEl = document.createElement('div');
  bodyEl.innerHTML = issue.body;
  articleEl.appendChild(bodyEl);

  parentEl.appendChild(articleEl);
};
