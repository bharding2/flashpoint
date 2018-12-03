window.createCanvas = function (name, parentEl) {
  let asideEl = document.createElement('aside');
  asideEl.classList.add('canvas');

  let personalCanvas = {
    FIONA: function(canvasEl) {
      // piano
      let pianoEl = document.createElement('figure');
      pianoEl.classList.add('piano');

      var synth = new Tone.PolySynth().toMaster(); // eslint-disable-line

      let keys = {
        'Tab': { // tab
          note: new Audio('./assets/piano/middle_c.mp3'),
          tone: 'C3',
          color: 'white',
        }, 
        'Digit1': { // 1
          note: new Audio('./assets/piano/mid_c_sharp.mp3'),
          tone: 'C#3',
          color: 'black',
        },
        'KeyQ': { // q
          note: new Audio('./assets/piano/middle_d.mp3'),
          tone: 'D3',
          color: 'white',
        },
        'Digit2': { // 2
          note: new Audio('./assets/piano/mid_d_sharp.mp3'),
          tone: 'D#3',
          color: 'black',
        },
        'KeyW': { // w
          note: new Audio('./assets/piano/middle_e.mp3'),
          tone: 'E3',
          color: 'white',
        },
        'KeyE': { // e
          note: new Audio('./assets/piano/middle_f.mp3'),
          tone: 'F3',
          color: 'white',
        },
        'Digit4': { // 4
          note: new Audio('./assets/piano/mid_f_sharp.mp3'),
          tone: 'F#3',
          color: 'black',
        },
        'KeyR': { // r
          note: new Audio('./assets/piano/middle_g.mp3'),
          tone: 'G3',
          color: 'white',
        },
        'Digit5': { // 5
          note: new Audio('./assets/piano/mid_g_sharp.mp3'),
          tone: 'G#3',
          color: 'black',
        },
        'KeyT': { // t
          note: new Audio('./assets/piano/middle_a.mp3'),
          tone: 'A3',
          color: 'white',
        },
        'Digit6': { // 6
          note: new Audio('./assets/piano/mid_a_sharp.mp3'),
          tone: 'A#3',
          color: 'black',
        },
        'KeyY': { // y
          note: new Audio('./assets/piano/middle_b.mp3'),
          tone: 'B3',
          color: 'white',
        },
        'KeyU': { // u
          note: new Audio('./assets/piano/high_c.mp3'),
          tone: 'C4',
          color: 'white',
        },
        'Digit8': { // 8
          note: new Audio('./assets/piano/high_c_sharp.mp3'),
          tone: 'C#4',
          color: 'black',
        },
        'KeyI': { // i
          note: new Audio('./assets/piano/high_d.mp3'),
          tone: 'D4',
          color: 'white',
        },
        'Digit9': { // 9
          note: new Audio('./assets/piano/high_d_sharp.mp3'),
          tone: 'D#4',
          color: 'black',
        },
        'KeyO': { // o
          note: new Audio('./assets/piano/high_e.mp3'),
          tone: 'E4',
          color: 'white',
        },
        'KeyP': { // p
          note: new Audio('./assets/piano/high_f.mp3'),
          tone: 'F4',
          color: 'white',
        },
        'Minus': { // -
          note: new Audio('./assets/piano/high_f_sharp.mp3'),
          tone: 'F4',
          color: 'black',
        },
        'BracketLeft': { // [
          note: new Audio('./assets/piano/high_g.mp3'),
          tone: 'G4',
          color: 'white',
        },
        'Equal': { // =
          note: new Audio('./assets/piano/high_g_sharp.mp3'),
          tone: 'G#4',
          color: 'black',
        },
        'BracketRight': { // ]
          note: new Audio('./assets/piano/high_a.mp3'),
          tone: 'A4',
          color: 'white',
        },
        'Backspace': { // delete (backspace)
          note: new Audio('./assets/piano/high_a_sharp.mp3'),
          tone: 'A#4',
          color: 'black',
        },
        'Backslash': { // \
          note: new Audio('./assets/piano/high_b.mp3'),
          tone: 'B4',
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

      // document.addEventListener('keydown', (event) => {
      //   if (keys[event.code]) {
      //     event.preventDefault();

      //     keys[event.code].note.currentTime = 0;
      //     keys[event.code].note.play();

      //     let keyEl = document.querySelector(`[data-key="${event.code}"]`);

      //     keyEl.classList.add('active');

      //     setTimeout(() => {
      //       keyEl.classList.remove('active');
      //     }, 500);
      //   }
      // });

      function keydownListener(event) {
        // document.removeEventListener('keydown', keydownListener);

        let key = keys[event.code];
        let keyEl = document.querySelector(`[data-key="${event.code}"]`);

        if (key && !keyEl.classList.contains('active')) {
          event.preventDefault();

          synth.triggerAttack(key.tone);

          keyEl.classList.add('active');
        }
      }

      document.addEventListener('keydown', keydownListener);

      document.addEventListener('keyup', (event) => {
        event.stopPropagation();
        event.preventDefault();

        let key = keys[event.code];
        let keyEl = document.querySelector(`[data-key="${event.code}"]`);

        if (key) {
          synth.triggerRelease(key.tone);
          keyEl.classList.remove('active');
        }
        // document.addEventListener('keydown', keydownListener);
      });

      // pianoEl.addEventListener('click', (event) => {
      //   event.stopPropagation();

      //   if (keys[event.target.dataset.key]) {
      //     event.preventDefault();

      //     keys[event.target.dataset.key].note.currentTime = 0;
      //     keys[event.target.dataset.key].note.play();

      //     event.target.classList.add('active');

      //     setTimeout(() => {
      //       event.target.classList.remove('active');
      //     }, 500);
      //   }
      // });

      pianoEl.addEventListener('mousedown', (event) => {
        event.stopPropagation();

        let key = keys[event.target.dataset.key];

        if (key) {
          event.preventDefault();

          synth.triggerAttack(key.tone);

          event.target.classList.add('active');
        }
      });

      pianoEl.addEventListener('click', (event) => {
        event.stopPropagation();
        event.preventDefault();

        let key = keys[event.target.dataset.key];

        synth.releaseAll();
        
        if (key) {
          event.target.classList.remove('active');
        }

        if (event.target.classList.contains('piano')) {
          let allKeys = event.target.children;
          
          for (let keyEl of allKeys) {
            keyEl.classList.remove('active');
          }
        }
      });

      canvasEl.appendChild(pianoEl);
    },
    // NOAH: function(canvasEl) {
    //   // rotating cube
    //   let cubeEl = document.createElement('figure');
    //   cubeEl.classList.add('cube');

    //   canvasEl.appendChild(cubeEl);
    // },
    // STELLA: function(canvasEl) {
    //   // paint
    //   let paintEl = document.createElement('figure');
    //   paintEl.classList.add('paint');

    //   canvasEl.appendChild(paintEl);
    // }
  };

  personalCanvas.NOAH = personalCanvas.FIONA;
  personalCanvas.STELLA = personalCanvas.FIONA;

  if (personalCanvas[name]) personalCanvas[name](asideEl);

  parentEl.appendChild(asideEl);
};

