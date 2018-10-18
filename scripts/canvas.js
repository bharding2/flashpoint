window.createCanvas = function (name, parentEl) {
  let asideEl = document.createElement('aside');
  asideEl.classList.add('canvas');

  let personalCanvas = {
    FIONA: function(canvasEl) {
      // piano
      let pianoEl = document.createElement('figure');
      pianoEl.classList.add('piano');

      let keys = {
        'Tab': { // tab
          note: new Audio('./assets/piano/middle_c.mp3'),
          color: 'white',
        }, 
        'Digit1': { // 1
          note: new Audio('./assets/piano/mid_c_sharp.mp3'),
          color: 'black',
        },
        'KeyQ': { // q
          note: new Audio('./assets/piano/middle_d.mp3'),
          color: 'white',
        },
        'Digit2': { // 2
          note: new Audio('./assets/piano/mid_d_sharp.mp3'),
          color: 'black',
        },
        'KeyW': { // w
          note: new Audio('./assets/piano/middle_e.mp3'),
          color: 'white',
        },
        'KeyE': { // e
          note: new Audio('./assets/piano/middle_f.mp3'),
          color: 'white',
        },
        'Digit4': { // 4
          note: new Audio('./assets/piano/mid_f_sharp.mp3'),
          color: 'black',
        },
        'KeyR': { // r
          note: new Audio('./assets/piano/middle_g.mp3'),
          color: 'white',
        },
        'Digit5': { // 5
          note: new Audio('./assets/piano/mid_g_sharp.mp3'),
          color: 'black',
        },
        'KeyT': { // t
          note: new Audio('./assets/piano/middle_a.mp3'),
          color: 'white',
        },
        'Digit6': { // 6
          note: new Audio('./assets/piano/mid_a_sharp.mp3'),
          color: 'black',
        },
        'KeyY': { // y
          note: new Audio('./assets/piano/middle_b.mp3'),
          color: 'white',
        },
        'KeyU': { // u
          note: new Audio('./assets/piano/high_c.mp3'),
          color: 'white',
        },
        'Digit8': { // 8
          note: new Audio('./assets/piano/high_c_sharp.mp3'),
          color: 'black',
        },
        'KeyI': { // i
          note: new Audio('./assets/piano/high_d.mp3'),
          color: 'white',
        },
        'Digit9': { // 9
          note: new Audio('./assets/piano/high_d_sharp.mp3'),
          color: 'black',
        },
        'KeyO': { // o
          note: new Audio('./assets/piano/high_e.mp3'),
          color: 'white',
        },
        'KeyP': { // p
          note: new Audio('./assets/piano/high_f.mp3'),
          color: 'white',
        },
        'Minus': { // -
          note: new Audio('./assets/piano/high_f_sharp.mp3'),
          color: 'black',
        },
        'BracketLeft': { // [
          note: new Audio('./assets/piano/high_g.mp3'),
          color: 'white',
        },
        'Equal': { // =
          note: new Audio('./assets/piano/high_g_sharp.mp3'),
          color: 'black',
        },
        'BracketRight': { // ]
          note: new Audio('./assets/piano/high_a.mp3'),
          color: 'white',
        },
        'Backspace': { // delete (backspace)
          note: new Audio('./assets/piano/high_a_sharp.mp3'),
          color: 'black',
        },
        'Backslash': { // \
          note: new Audio('./assets/piano/high_b.mp3'),
          color: 'white',
        }
      };

      let topRow = [
        {
          key: keys['Tab'],
          size: 'end'
        },
        {
          key: keys['Digit1'],
          size: 'black-key'
        },
        {
          key: keys['KeyQ'],
          size: 'mid'
        },
        {
          key: keys['Digit2'],
          size: 'black-key'
        },
        {
          key: keys['KeyW'],
          size: 'end'
        },
        {
          key: keys['KeyE'],
          size: 'end'
        },
        {
          key: keys['Digit4'],
          size: 'black-key'
        },
        {
          key: keys['KeyR'],
          size: 'mid'
        },
        {
          key: keys['Digit5'],
          size: 'black-key'
        },
        {
          key: keys['KeyT'],
          size: 'mid'
        },
        {
          key: keys['Digit6'],
          size: 'black-key'
        },
        {
          key: keys['KeyY'],
          size: 'end'
        },
        {
          key: keys['KeyU'],
          size: 'end'
        },
        {
          key: keys['Digit8'],
          size: 'black-key'
        },
        {
          key: keys['KeyI'],
          size: 'mid'
        },
        {
          key: keys['Digit9'],
          size: 'black-key'
        },
        {
          key: keys['KeyO'],
          size: 'end'
        },
        {
          key: keys['KeyP'],
          size: 'end'
        },
        {
          key: keys['Minus'],
          size: 'black-key'
        },
        {
          key: keys['BracketLeft'],
          size: 'mid'
        },
        {
          key: keys['Equal'],
          size: 'black-key'
        },
        {
          key: keys['BracketRight'],
          size: 'mid'
        },
        {
          key: keys['Backspace'],
          size: 'black-key'
        },
        {
          key: keys['Backslash'],
          size: 'end'
        }
      ];

      let bottomRow = [
        {
          key: keys['Tab'],
          size: 'white-key'
        },
        {
          key: keys['KeyQ'],
          size: 'white-key'
        },
        {
          key: keys['KeyW'],
          size: 'white-key'
        },
        {
          key: keys['KeyE'],
          size: 'white-key'
        },
        {
          key: keys['KeyR'],
          size: 'white-key'
        },
        {
          key: keys['KeyT'],
          size: 'white-key'
        },
        {
          key: keys['KeyY'],
          size: 'white-key'
        },
        {
          key: keys['KeyU'],
          size: 'white-key'
        },
        {
          key: keys['KeyI'],
          size: 'white-key'
        },
        {
          key: keys['KeyO'],
          size: 'white-key'
        },
        {
          key: keys['KeyP'],
          size: 'white-key'
        },
        {
          key: keys['BracketLeft'],
          size: 'white-key'
        },
        {
          key: keys['BracketRight'],
          size: 'white-key'
        },
        {
          key: keys['Backslash'],
          size: 'white-key'
        }
      ];

      document.addEventListener('keydown', (event) => {
        if (keys[event.code]) {
          event.preventDefault();

          keys[event.code].note.currentTime = 0;
          keys[event.code].note.play();
        }
      });

      canvasEl.appendChild(pianoEl);
    },
    NOAH: function(canvasEl) {
      // rotating cube
      let cubeEl = document.createElement('figure');
      cubeEl.classList.add('cube');

      canvasEl.appendChild(cubeEl);
    },
    STELLA: function(canvasEl) {
      // paint
      let paintEl = document.createElement('figure');
      paintEl.classList.add('paint');

      canvasEl.appendChild(paintEl);
    }
  };

  if (personalCanvas[name]) personalCanvas[name](asideEl);

  parentEl.appendChild(asideEl);
};

