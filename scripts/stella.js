window.launchSTELLA = function(name, titleSections, parentEl) {
  console.log('stella has entered the building');

  titleSections.forEach((ele, idx) => {
    setTimeout(() => {
      ele.className = `color-${idx}`;
    }, idx * 50);
  });

  window.createMessages(name, parentEl);
};

function createCanvas(parentEl) {

}
