window.launchSTELLA = function(titleSections) {
  console.log('stella has entered the building');

  titleSections.forEach((ele, idx) => {
    setTimeout(() => {
      ele.classList.add(`color-${idx}`);
    }, idx * 50);
  });
};