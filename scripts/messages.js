window.createMessages = function(name, parentEl) {
  let messagesEl = document.createElement('aside');
  messagesEl.classList.add('messages');
  parentEl.appendChild(messagesEl);

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
        createIssue(issue, messagesEl);
      });
    });
    
  function createIssue(issue, parentEl) {
    var articleEl = document.createElement('article');
    articleEl.id = issue.number;
  
    var titleEl = document.createElement('h2');
    titleEl.textContent = issue.title;
    articleEl.appendChild(titleEl);
  
    var bylineEl = document.createElement('p');
    bylineEl.textContent = `Posted by ${issue.user.login} on ${issue.created_at.split('T')[0]}`;
    articleEl.appendChild(bylineEl);
  
    var messageBodyEl = document.createElement('div');
    messageBodyEl.innerHTML = issue.body;
    articleEl.appendChild(messageBodyEl);
  
    parentEl.appendChild(articleEl);
  }
};
