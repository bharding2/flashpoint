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
      
      let keyboard = [
        'Tab',
        'Digit1',
        'KeyQ',
        'Digit2',
        'KeyW',
        'KeyE',
        'Digit4',
        'KeyR',
        'Digit5',
        'KeyT',
        'Digit6',
        'KeyY',
        'KeyU',
        'Digit8',
        'KeyI',
        'Digit9',
        'KeyO',
        'KeyP',
        'Minus',
        'BracketLeft',
        'Equal',
        'BracketRight',
        'Backspace',
        'Backslash',
      ];

      keyboard.forEach((key) => {
        let keyEl = document.createElement('div');
        keyEl.classList.add(keys[key].color);
        keyEl.setAttribute('data-key', key);

        pianoEl.appendChild(keyEl);
      });

      document.addEventListener('keydown', (event) => {
        if (keys[event.code]) {
          event.preventDefault();

          keys[event.code].note.currentTime = 0;
          keys[event.code].note.play();
        }
      });

      pianoEl.addEventListener('click', (event) => {
        event.stopPropagation();

        if (keys[event.target.dataset.key]) {
          event.preventDefault();

          keys[event.target.dataset.key].note.currentTime = 0;
          keys[event.target.dataset.key].note.play();
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

