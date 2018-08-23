function launchStella(bodyEl, titleSections) {
  console.log('stella has entered the building');
  bodyEl.classList.add('stella-body');

  titleSections.forEach((ele, idx) => {
    setTimeout(() => {
      ele.classList.add(`color-${idx}`)
    }, idx * 50);
  });
};