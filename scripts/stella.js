window.launchSTELLA = function(name, titleSections, parentEl) {
  console.log('stella has entered the building');

  titleSections.forEach((ele, idx) => {
    setTimeout(() => {
      ele.classList.add(`color-${idx}`);
    }, idx * 50);
  });

  window.createMessages(name, parentEl);
};
