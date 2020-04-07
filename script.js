let language = localStorage.value || 'eng';
const keyboardList = [
  // first-row
  [{ id: 'Backquote', eng: ['`', '~'], rus: ['ё', 'Ё'] },
  { id: 'Digit1', eng: ['1', '!'], rus: ['1', '!'] },
  { id: 'Digit2', eng: ['2', '@'], rus: ['2', '"'] },
  { id: 'Digit3', eng: ['3', '#'], rus: ['3', '№'] },
  { id: 'Digit4', eng: ['4', '$'], rus: ['4', ';'] },
  { id: 'Digit5', eng: ['5', '%'], rus: ['5', '%'] },
  { id: 'Digit6', eng: ['6', '^'], rus: ['6', ':'] },
  { id: 'Digit7', eng: ['7', '&'], rus: ['7', '?'] },
  { id: 'Digit8', eng: ['8', '*'], rus: ['8', '*'] },
  { id: 'Digit9', eng: ['9', '('], rus: ['9', '('] },
  { id: 'Digit0', eng: ['0', ')'], rus: ['0', ')'] },
  { id: 'Minus', eng: ['-', '_'], rus: ['-', '_'] },
  { id: 'Equal', eng: ['=', '+'], rus: ['=', '+'] },
  { id: 'Backspace', Value: 'Backspace' }],
  // second-row
  [{ id: 'Tab', Value: 'Tab' },
  { id: 'KeyQ', eng: ['q', 'Q'], rus: ['й', 'Й'] },
  { id: 'KeyW', eng: ['w', 'W'], rus: ['ц', 'Ц'] },
  { id: 'KeyE', eng: ['e', 'E'], rus: ['у', 'У'] },
  { id: 'KeyR', eng: ['r', 'R'], rus: ['к', 'К'] },
  { id: 'KeyT', eng: ['t', 'T'], rus: ['е', 'Е'] },
  { id: 'KeyY', eng: ['y', 'Y'], rus: ['н', 'Н'] },
  { id: 'KeyU', eng: ['u', 'U'], rus: ['г', 'Г'] },
  { id: 'KeyI', eng: ['i', 'I'], rus: ['ш', 'Ш'] },
  { id: 'KeyO', eng: ['o', 'O'], rus: ['щ', 'Щ'] },
  { id: 'KeyP', eng: ['p', 'P'], rus: ['з', 'З'] },
  { id: 'BracketLeft', eng: ['[', '{'], rus: ['х', 'Х'] },
  { id: 'BracketRight', eng: [']', '}'], rus: ['ъ', 'Ъ'] },
  { id: 'Backslash', eng: ['\\', '|'], rus: ['\\', '/'] },
  { id: 'Delete', Value: 'Del' }],
  // third-row
  [{ id: 'CapsLock', Value: 'Caps Lock' },
  { id: 'KeyA', eng: ['a', 'A'], rus: ['ф', 'Ф'] },
  { id: 'KeyS', eng: ['s', 'S'], rus: ['ы', 'Ы'] },
  { id: 'KeyD', eng: ['d', 'D'], rus: ['в', 'В'] },
  { id: 'KeyF', eng: ['f', 'F'], rus: ['а', 'А'] },
  { id: 'KeyG', eng: ['g', 'G'], rus: ['п', 'П'] },
  { id: 'KeyH', eng: ['h', 'H'], rus: ['р', 'Р'] },
  { id: 'KeyJ', eng: ['j', 'J'], rus: ['о', 'О'] },
  { id: 'KeyK', eng: ['k', 'K'], rus: ['л', 'Л'] },
  { id: 'KeyL', eng: ['l', 'L'], rus: ['д', 'Д'] },
  { id: 'Semicolon', eng: [';', ':'], rus: ['ж', 'Ж'] },
  { id: 'Quote', eng: ['\'', '"'], rus: ['э', 'Э'] },
  { id: 'Enter', Value: 'Enter' }],
  // fourth-row
  [{ id: 'ShiftLeft', Value: 'Shift' },
  { id: 'KeyZ', eng: ['z', 'Z'], rus: ['я', 'Я'] },
  { id: 'KeyX', eng: ['x', 'X'], rus: ['ч', 'Ч'] },
  { id: 'KeyC', eng: ['c', 'C'], rus: ['с', 'С'] },
  { id: 'KeyV', eng: ['v', 'V'], rus: ['м', 'М'] },
  { id: 'KeyB', eng: ['b', 'B'], rus: ['и', 'И'] },
  { id: 'KeyN', eng: ['n', 'N'], rus: ['т', 'Т'] },
  { id: 'KeyM', eng: ['m', 'M'], rus: ['ь', 'Ь'] },
  { id: 'Comma', eng: [',', '<'], rus: ['б', 'Б'] },
  { id: 'Period', eng: ['.', '>'], rus: ['ю', 'Ю'] },
  { id: 'Slash', eng: ['/', '?'], rus: ['.', ','] },
  { id: 'ArrowUp', Value: '▲' },
  { id: 'ShiftRight', Value: 'Shift' }],
  // fifth-row

  [
    { id: 'ControlLeft', Value: 'Ctrl' },
    { id: 'Language', Value: (language === 'eng') ? 'En' : 'Ру' },
    { id: 'Meta', Value: 'Win' },
    { id: 'AltLeft', Value: 'Alt' },
    { id: 'Space', Value: 'Space' },
    { id: 'AltRight', Value: 'Alt' },
    { id: 'ControlRight', Value: 'Ctrl' },
    { id: 'ArrowLeft', Value: '◄' },
    { id: 'ArrowDown', Value: '▼' },
    { id: 'ArrowRight', Value: '►' }],
];



class TextArea {
  constructor() {
    this.textArea = document.createElement('textarea');
    this.textArea.className = 'textArea';
    this.textArea.setAttribute('placeholder', 'Type your text here...');
  }
}
class Info {
  constructor() {
    this.info = document.createElement('div')
    this.info.className = 'info-block';
    this.info.innerHTML = `<h1>Virtual Keyboard</h1><div>Change language: 'Shift' + 'Alt', double mouse click on Shift - UpperCase</div>`;
  }
}

class Key {
  //initial keys
  constructor(keyProperties) {
    this.Button = document.createElement('div');
    this.Button.classList.add('keyboard--key');
    this.Button.id = keyProperties.id;
    if (keyProperties.Value === undefined && this.Button.id !== 'Language') {
      this.Button.classList.add('key');
      if (language !== 'eng') {
        this.Button.innerText = keyProperties.rus[0];
      } else
        this.Button.innerText = keyProperties.eng[0];
    } else {
      this.Button.classList.add('functional_keys');
      this.Button.innerText = keyProperties.Value;
    }
  }
}

class row {
  constructor(rowNumber) {
    this.Row = document.createElement('div');
    this.Row.classList.add('keyboard--row');
    keyboardList[rowNumber].forEach((keyProperties) => {
      const key = new Key(keyProperties);
      this.Row.appendChild(key.Button);
    });
  }
}
class Keyboard {
  constructor() {
    this.keyboard = document.createElement('div');
    this.keyboard.classList.add('keyboard');
    for (let index = 0; index < keyboardList.length; index++) {
      const newRow = new row(index);
      newRow.Row.classList.add(`row-${index}`);
      this.keyboard.appendChild(newRow.Row);
    }
  }
  deleteClick() {
    while (!TEXTAREA.textArea.selectionStart === TEXTAREA.textArea.selectionEnd)
      TEXTAREA.textArea.setRangeText('', TEXTAREA.textArea.selectionStart, TEXTAREA.textArea.selectionEnd + 1);
  }
  backspaceClick() {
    while (!TEXTAREA.textArea.selectionStart === 0 && !TEXTAREA.textArea.selectionEnd === 0) {
      TEXTAREA.textArea.setRangeText('', TEXTAREA.textArea.selectionStart - 1, TEXTAREA.textArea.selectionEnd);
    }
  }
  capsLockClick() {
    const capsLockButton = document.querySelector('#CapsLock');
    if (capsLockButton.classList.contains('CapsLock-active')) {
      capsLockButton.classList.remove('CapsLock-active');
    } else { capsLockButton.classList.add('CapsLock-active'); }
    this.updateKeyboard();
  }
  updateKeyboard() {
    const capsLockButton = document.querySelector('#CapsLock');
    NO_FUNCTIONAL_BUTTONS.forEach((button) => {
      const numberOfRow = +button.parentElement.classList[1].substring(4);
      keyboardList[numberOfRow].forEach((properties) => {
        if (properties.id === button.id) {
          if (!capsLockButton.classList.contains('CapsLock-active')) {
            button.innerText = (language === 'eng') ? properties.eng[0] : properties.rus[0];
          } else { button.innerText = (language === 'eng') ? properties.eng[1] : properties.rus[1]; }
        }
      });
    });
  }
  shiftClick() {
    const capsLockButton = document.querySelector('#CapsLock');
    NO_FUNCTIONAL_BUTTONS.forEach((button) => {
      const numberOfRow = button.parentElement.classList[1].substring(4);
      keyboardList[+numberOfRow].forEach((properties) => {
        if (properties.id === button.id) {
          if (capsLockButton.classList.contains('CapsLock-active')) {
            button.innerText = (language === 'eng') ? properties.eng[0] : properties.rus[0];
          } else button.innerText = (language === 'eng') ? properties.eng[1] : properties.rus[1];
        }
      });
    });
  }
  enterClick() {
    TEXTAREA.textArea.value += '\n';
  }
  tabClick() {
    TEXTAREA.textArea.value += '    ';
  }
  spaceClick() {
    TEXTAREA.textArea.value += ' ';
  }
  languageChange() {
    language = (language === 'eng') ? 'rus' : 'eng';
    localStorage.value = language;
    document.querySelector('#Language').innerText = (language === 'eng') ? 'En' : 'Ру';
    this.updateKeyboard();
  }
  keyClick() {
    document.addEventListener('keydown', (event) => {
      BUTTONS.forEach((button) => {
        if (button.id === event.code) {
          button.classList.add('active');
          if (button.classList.contains('functional_keys')) {
            if (event.code === 'Backspace') {
              TEXTAREA.textArea.focus();
              this.backspaceClick();
            }
            if (event.code === 'Enter') {
              event.preventDefault();
              this.enterClick();
            }
            if (event.code === 'Delete') {
              this.deleteClick();
            }
            if (event.code === 'Tab') {
              event.preventDefault();
              this.tabClick();
            }
            if (event.code === 'Space') {
              event.preventDefault();
              this.spaceClick();
            }
            if (event.code.substring(0, 5) === 'Arrow') {
              event.preventDefault();
              TEXTAREA.textArea.value += button.innerText;
            }
            if (event.code.substring(0, 5) === 'Shift') {
              this.shiftClick();
            }
            if ((event.code.substring(0, 5) === 'Shift' && event.altKey === true) ||
              (event.code.substring(0, 3) === 'Alt' && event.shiftKey === true)) {
              this.languageChange();
            }
          } else {
            event.preventDefault();
            TEXTAREA.textArea.value += button.innerText;
          }
        }
      });
    })
    document.addEventListener('keyup', (event) => {
      BUTTONS.forEach((button) => {
        button.classList.remove('active')
      });
      if (event.code === 'CapsLock') {
        this.capsLockClick();
      }
      if (event.code === 'ShiftRight' || event.code === 'ShiftLeft') {
        this.updateKeyboard();
      }
    })
  }
  mouseClick() {
    this.keyboard.addEventListener('dblclick', (event) => {
      if (event.target.id.substring(0, 5) === 'Shift') {
        this.shiftClick();
      }
      this.keyboard.addEventListener('mousedown', (event) => {
        if (event.target.id.substring(0, 5) === 'Shift') {
          this.updateKeyboard();
        }
      })
    })
    this.keyboard.addEventListener('click', (event) => {
      if (event.target.classList.contains('key') || event.target.id.substring(0, 5) === 'Arrow') {
        TEXTAREA.textArea.value += event.target.innerText;
        TEXTAREA.textArea.focus();
      }
      if (event.target.id === 'Space') {
        this.spaceClick();
        TEXTAREA.textArea.focus();

      }
      if (event.target.id === 'Backspace') {
        if (TEXTAREA.textArea.selectionStart === 0) return;
        TEXTAREA.textArea.setRangeText('', TEXTAREA.textArea.selectionStart - 1, TEXTAREA.textArea.selectionEnd);
      }
      if (event.target.id === 'Delete') {
        TEXTAREA.textArea.setRangeText('', TEXTAREA.textArea.selectionStart, TEXTAREA.textArea.selectionEnd + 1);
      }
      if (event.target.id === 'Tab') {
        this.tabClick();
        TEXTAREA.textArea.focus();

      }
      if (event.target.id === 'CapsLock') {
        this.capsLockClick();
      }
      if (event.target.id === 'Enter') {
        this.enterClick();
        TEXTAREA.textArea.focus();

      }
      if (event.target.id === 'Language') {
        this.languageChange();
      }

    })
  }
}

const KEYBOARD = new Keyboard();
const TEXTAREA = new TextArea();
const INFO = new Info();
const NO_FUNCTIONAL_BUTTONS = KEYBOARD.keyboard.querySelectorAll('.key');
const BUTTONS = KEYBOARD.keyboard.querySelectorAll('.keyboard--key');

window.addEventListener('DOMContentLoaded', () => {
  const WRAPPER = document.createElement('div');
  WRAPPER.classList.add('wrapper');
  document.body.prepend(WRAPPER);
  document.querySelector('.wrapper').append(INFO.info);
  document.querySelector('.wrapper').append(TEXTAREA.textArea);
  document.querySelector('.wrapper').append(KEYBOARD.keyboard);
  TEXTAREA.textArea.focus();
  KEYBOARD.keyClick();
  KEYBOARD.mouseClick();
});