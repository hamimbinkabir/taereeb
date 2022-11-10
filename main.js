let keys = document.querySelectorAll('.keys');
let spaceKey = document.querySelector('.space_key');
let shift_left = document.querySelector('.shift_left');
let shift_right = document.querySelector('.shift_right');
let caps_lock_key = document.querySelector('.caps_lock_key');
let toggle_circle = document.querySelector('.toggle_circle');
let night_mode = document.querySelector('.night_mode');
let body = document.querySelector('body');
let text_input = document.querySelector('.text');
let change_color = document.querySelector('.change_light_color');
let colors_input = document.querySelector('.colors_input');
let keyboard_lights = document.querySelector('.keyboard_lights');
let keyboard_wrapp = document.querySelector('.keyboard_wrapp');
let arabic_input = document.getElementById('TextInput');



const arabic = new Map();
arabic.set('a' , "ا"); arabic.set('A' , "أ");
arabic.set('b' , "ب"); arabic.set('B' , "پ");
arabic.set('c' , "ص"); arabic.set('C' , "چ");
arabic.set('d' , "د"); arabic.set('D' , "ض");
arabic.set('e' , "ع"); arabic.set('E' , "إ");
arabic.set('f' , "ف"); arabic.set('F' , "ڤ");
arabic.set('g' , "غ"); arabic.set('G' , "گ");
arabic.set('h' , "ه"); arabic.set('H' , "ح");
arabic.set('i' , " ِ"); arabic.set('I' , " ٍ");
arabic.set('j' , "ج"); arabic.set('J' , "ظ");
arabic.set('k' , "ك"); arabic.set('K' , "خ");
arabic.set('l' , "ل"); arabic.set('L' , "ﻻ");
arabic.set('m' , "م"); arabic.set('M' , "ۢ ");
arabic.set('n' , "ن"); arabic.set('N' , "اً");
arabic.set('o' , " ُ"); arabic.set('O' , " ٌ");
arabic.set('p' , "ء"); arabic.set('P' , "آ");
arabic.set('q' , "ق"); arabic.set('Q' , "ئ");
arabic.set('r' , "ر"); arabic.set('R' , "ژ");
arabic.set('s' , "س"); arabic.set('S' , "ش");
arabic.set('t' , "ت"); arabic.set('T' , "ط");
arabic.set('u' , " َ"); arabic.set('U' , " ً");
arabic.set('v' ," ْ");  arabic.set('V' , " ّ");
arabic.set('w' , "و"); arabic.set('W' , "ؤ");
arabic.set('x' , "ث"); arabic.set('X' , "ة");
arabic.set('y' , "ي"); arabic.set('Y' , "ى");
arabic.set('z' , "ز"); arabic.set('Z' , "ذ");
arabic.set(',' , "،"); arabic.set(';' , "؛");
arabic.set('_' , "ـ"); arabic.set('?' , "؟");
arabic.set('l1' , "؛"); arabic.set('L1' , ":");
arabic.set('l2' , `'`); arabic.set('L2' , `"`);
arabic.set('p1' , "["); arabic.set('P1' , "{");
arabic.set('p2' , "]"); arabic.set('P2' , "}");








for(let i = 0; i < keys.length; i++) {
    keys[i].setAttribute('keyname', keys[i].innerText);
    keys[i].setAttribute('lowerCaseName', keys[i].innerText.toLowerCase());
}

for(let i = 0; i < keys.length; i++) {
    if(arabic.has(keys[i].getAttribute('lowerCaseName'))) { keys[i].innerText =  arabic.get(keys[i].getAttribute('lowerCaseName'));   }
}




window.addEventListener('keydown', function(e) {

    for(let i = 0; i < keys.length; i++) {

        if(e.code == 'Space') {
            spaceKey.classList.add('active')
        }
        if(e.code == 'ShiftLeft') {
            shift_right.classList.remove('active')
        }
        if(e.code == 'ShiftRight') {
            shift_left.classList.remove('active')
        }
        if(e.code == 'CapsLock') {
            caps_lock_key.classList.remove('active');
        }

        if(e.key == keys[i].getAttribute('keyname' ) || e.key == keys[i].getAttribute('lowerCaseName')) {
            keys[i].classList.add('active');
              if(arabic.has(e.key)){
                  arabic_input.value  += arabic.get(e.key);
                  e.preventDefault();
              }

        }


    }
})

window.addEventListener('keyup', function(e) {
    for(let i = 0; i < keys.length; i++) {
        if(e.key == keys[i].getAttribute('keyname' ) || e.key == keys[i].getAttribute('lowerCaseName')) {
            keys[i].classList.remove('active')
            keys[i].classList.add('remove')
        }
        if(e.code == 'Space') {
            spaceKey.classList.remove('active');
            spaceKey.classList.add('remove');
        }
        if(e.code == 'ShiftLeft') {
            shift_right.classList.remove('active')
            shift_right.classList.remove('remove')
        }
        if(e.code == 'ShiftRight') {
            shift_left.classList.remove('active')
            shift_left.classList.remove('remove')
        }
        setTimeout(()=> {
            keys[i].classList.remove('remove')
        },200)
    }
})


night_mode.addEventListener('click',function() {
    toggle_circle.classList.toggle('active');
    body.classList.toggle('active');
    night_mode.classList.toggle('active');
    keyboard_wrapp.classList.toggle('active');
    text_input.classList.toggle('active');
    change_color.classList.toggle('active');
    for(let i = 0; i < keys.length; i++) {
        keys[i].classList.toggle('keys_night')
    }
})



 function simulateBackspace(element) {
    var start = element.selectionStart, end = element.selectionEnd, event;

    if (!element.setRangeText) { return; }
    if (start >= end) {
      if (start <= 0 || !element.setSelectionRange) { return; }
      element.setSelectionRange(start - 1, start);
    }

    element.setRangeText("");
    event = document.createEvent("HTMLEvents");
    event.initEvent("input", true, false);
    element.dispatchEvent(event);
}



function WriteToTextArea(key  ) {


       if(key.getAttribute('keyname') == 'Backspace') {
           simulateBackspace(document.getElementById('TextInput'));
       }
       else if(key.getAttribute('keyname') == 'Tab' || key.getAttribute('keyname') == 'Shift' ||  key.getAttribute('keyname') == 'Ctrl'
       ||  key.getAttribute('keyname') == 'Alt'  || key.getAttribute('keyname') == 'Win' ) {
         return;
       }
       else if(key.getAttribute('keyname') == 'Enter') {
          let TextInput = document.getElementById('TextInput');
          TextInput.value = TextInput.value  + '\r\n' + '' ;
       }
       else if(key.getAttribute('keyname') == 'Clear') {
         document.getElementById('TextInput').value = '';
       }
       else if(key.getAttribute('keyname') == '') {
         document.getElementById('TextInput').value = document.getElementById('TextInput').value + ' ';

       }
       else {
         document.getElementById('TextInput').value += key.innerText;
       }
}// end of function


function ChangeKeyboardLayout( key  ) {

  let tab = key.getAttribute('default') ;
  for(let i = 0; i < keys.length; i++) {
      if(tab == 'arabic_uppercase' ) {
        if(arabic.has(keys[i].getAttribute('keyname'))) { keys[i].innerText =  arabic.get(keys[i].getAttribute('keyname'));   }
      }
      else if(tab == 'arabic_lowercase' ) {
        if(arabic.has(keys[i].getAttribute('lowerCaseName'))) { keys[i].innerText =  arabic.get(keys[i].getAttribute('lowerCaseName'));   }
      }
  }// end of for

  if(tab == 'arabic_lowercase')   key.setAttribute('default' , 'arabic_uppercase');
  else if(tab == 'arabic_uppercase')   key.setAttribute('default' , 'arabic_lowercase');

  key.classList.toggle('active');

}// end of function

function mouseDown(key) {
  key.classList.add('active');
}

function mouseUp(key) {
  key.classList.remove('active')

}




function CopyToClipboard(){
  var copyText = document.getElementById("TextInput");
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices
  navigator.clipboard.writeText(copyText.value); // Copy the text inside the text field
}// end of function



function Translate(){
  let term = document.getElementById('TextInput').value;
  window.open('https://translate.google.com/?sl=ar&tl=en&text='+ term);
}// end of function


function Maps(){
  let term = document.getElementById('TextInput').value;
  window.open('https://www.google.com/maps/search/'+ term);
}// end of function


function Youtube(){
  let term = document.getElementById('TextInput').value;
  window.open('https://www.youtube.com/results?search_query='+ term);
}// end of function


function Wikipedia(){
  let term = document.getElementById('TextInput').value;
  window.open('https://en.wikipedia.org/wiki/'+ term);
}// end of function


function Find(){
  let term = document.getElementById('TextInput').value;
  window.open('https://cse.google.com/cse?cx=012744225112026497653:jobr5lexrmf&q='+ term);
}// end of function


function Quran(){
  let term = document.getElementById('TextInput').value;
  window.open('https://quran.com/search?page=1&q='+ term);
}// end of function



