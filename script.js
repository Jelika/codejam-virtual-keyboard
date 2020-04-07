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

window.addEventListener('DOMContentLoaded', () => {
  const WRAPPER = document.createElement('div');
  WRAPPER.classList.add('wrapper');
  document.body.prepend(WRAPPER);
  document.querySelector('.wrapper').append(INFO);
  document.querySelector('.wrapper').append(TEXTAREA);

  document.querySelector('.wrapper').append(KEYBOARD);
  TEXTAREA.focus();
});

function initialTextArea() {
  const textArea = document.createElement('textarea');
  textArea.className = 'textArea';
  textArea.setAttribute('placeholder', 'Type your text here...');
  return textArea;
}
function createInfo() {
  const info = document.createElement('div')
  info.className = 'info-block';
  info.innerHTML = `<h1>Virtual Keyboard</h1><div>Change language: 'Shift' + 'Alt'</div>`;
  return info;
}

class Key {
  //initial keys
  constructor(keyProperties) {
    const Button = document.createElement('div');
    Button.classList.add('keyboard--key');
    Button.id = keyProperties.id;
    if (keyProperties.Value === undefined && Button.id !== 'Language') {
      Button.classList.add('key');
      if (language !== 'eng') {
        Button.innerText = keyProperties.rus[0];
      } else
        Button.innerText = keyProperties.eng[0];
    } else {
      Button.classList.add('functional_keys');
      Button.innerText = keyProperties.Value;
    }
    return Button;
  }
}

function createRow(rowNumber) {
  const Row = document.createElement('div');
  Row.classList.add('keyboard--row');
  keyboardList[rowNumber].forEach((keyProperties) => {
    const key = new Key(keyProperties);
    Row.appendChild(key);
  });
  return Row;
}

function createKeyboard() {
  const Keyboard = document.createElement('div');
  Keyboard.classList.add('keyboard');
  for (let index = 0; index < keyboardList.length; index++) {
    const newRow = createRow(index);
    newRow.classList.add(`row-${index}`);
    Keyboard.appendChild(newRow);
  }
  return Keyboard;
}


const KEYBOARD = createKeyboard();
const TEXTAREA = initialTextArea();
const INFO = createInfo();
const NO_FUNCTIONAL_BUTTONS = KEYBOARD.querySelectorAll('.key');
const BUTTONS = KEYBOARD.querySelectorAll('.keyboard--key');




function deleteClick() {
  while (!TEXTAREA.selectionStart === TEXTAREA.selectionEnd)
    TEXTAREA.setRangeText('', TEXTAREA.selectionStart, TEXTAREA.selectionEnd + 1);
}
function backspaceClick() {
  while (!TEXTAREA.selectionStart === 0 && !TEXTAREA.selectionEnd === 0) {
    TEXTAREA.setRangeText('', TEXTAREA.selectionStart - 1, TEXTAREA.selectionEnd);
  }
}
function updateKeyboard() {
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

function capsLockClick() {
  const capsLockButton = document.querySelector('#CapsLock');
  if (capsLockButton.classList.contains('CapsLock-active')) {
    capsLockButton.classList.remove('CapsLock-active');
  } else { capsLockButton.classList.add('CapsLock-active'); }
  updateKeyboard();
}

function shiftClick() {
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

function enterClick() {
  TEXTAREA.value += '\n';
}

function tabClick() {
  TEXTAREA.value += '    ';
}

function spaceClick() {
  TEXTAREA.value += ' ';
}

function languageChange() {
  language = (language === 'eng') ? 'rus' : 'eng';
  localStorage.value = language;
  document.querySelector('#Language').innerText = (language === 'eng') ? 'En' : 'Ру';
  updateKeyboard();
}

document.addEventListener('keydown', (event) => {
  BUTTONS.forEach((button) => {
    if (button.id === event.code) {
      button.classList.add('active');
      if (button.classList.contains('functional_keys')) {
        if (event.code === 'Backspace') {
          TEXTAREA.focus();
          backspaceClick();
        }
        if (event.code === 'Enter') {
          event.preventDefault();
          enterClick();
        }
        if (event.code === 'Delete') {
          deleteClick();
        }
        if (event.code === 'Tab') {
          event.preventDefault();
          tabClick();
        }
        if (event.code === 'Space') {
          event.preventDefault();
          spaceClick();
        }
        if (event.code.substring(0, 5) === 'Arrow') {
          event.preventDefault();
          TEXTAREA.value += button.innerText;
        }
        if (event.code.substring(0, 5) === 'Shift') {
          shiftClick();
        }
        if ((event.code.substring(0, 5) === 'Shift' && event.altKey === true) ||
          (event.code.substring(0, 3) === 'Alt' && event.shiftKey === true)) {
          languageChange();
        }
      } else {
        event.preventDefault();
        TEXTAREA.value += button.innerText;
      }
    }
  });
})

document.addEventListener('keyup', (event) => {
  BUTTONS.forEach((button) => {
    button.classList.remove('active')
  });
  if (event.code === 'CapsLock') {
    capsLockClick();
  }
  if (event.code === 'ShiftRight' || event.code === 'ShiftLeft') {
    updateKeyboard();
  }
})

KEYBOARD.addEventListener('dblclick', (event) => {
  if (event.target.id.substring(0, 5) === 'Shift') {
    shiftClick();
  }
})
KEYBOARD.addEventListener('mousedown', (event) => {
  if (event.target.id.substring(0, 5) === 'Shift') {
    updateKeyboard();
  }
})

KEYBOARD.addEventListener('click', (event) => {
  if (event.target.classList.contains('key') || event.target.id.substring(0, 5) === 'Arrow') {
    TEXTAREA.value += event.target.innerText;
    TEXTAREA.focus();
  }
  if (event.target.id === 'Space') {
    spaceClick();
    TEXTAREA.focus();

  }
  if (event.target.id === 'Backspace') {
    if (TEXTAREA.selectionStart === 0) return;
    TEXTAREA.setRangeText('', TEXTAREA.selectionStart - 1, TEXTAREA.selectionEnd);
  }
  if (event.target.id === 'Delete') {
    deleteClick();
  }
  if (event.target.id === 'Tab') {
    tabClick();
    TEXTAREA.focus();

  }
  if (event.target.id === 'CapsLock') {
    capsLockClick();
  }
  if (event.target.id === 'Enter') {
    enterClick();
    TEXTAREA.focus();

  }
  if (event.target.id === 'Language') {
    languageChange();
  }

})


