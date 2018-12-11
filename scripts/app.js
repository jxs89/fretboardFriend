let app = {};

app.keyList = document.querySelector('#keyID');
app.majorModesList = document.querySelector('#majorModes');
app.melodicModesList = document.querySelector('#melodicModes');
app.harmonicminModesList = document.querySelector('#harminModes');

app.qualityList = document.querySelector('#qualityID');
app.fretboardControl = document.getElementById('gtrNeck');



app.wts = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];
app.roots = [7, 0, 5, 10, 2, 7];

// Li containers
app.str1 = document.getElementById('str1');
app.str2 = document.getElementById('str2');
app.str3 = document.getElementById('str3');
app.str4 = document.getElementById('str4');
app.str5 = document.getElementById('str5');
app.str6 = document.getElementById('str6');


const keyboardList = document.querySelector('.keyboards');

app.outputfeild = document.getElementById('outputfeild');
app.outputfeild2 = document.getElementById('outputfeild2');
app.applyBtnElement = document.getElementById('createbtn');
app.neckLink = document.getElementById('gtrNeckChosen');
app.kLink = document.getElementById('keyboardChosen');
app.createKeyboardArray = document.getElementById('keys');
app.btnDisable = true;
app.changeTrigger = false;
app.bingo = true;

// Get Key Value
// Display Time
app.displayTime = function () {
  var str = "";
  var currentTime = new Date()
  var day = currentTime.getDate()
  var hours = currentTime.getHours()
  var minutes = currentTime.getMinutes()
  var seconds = currentTime.getSeconds()

  if (minutes < 10) {
    minutes = "0" + minutes
  }
  if (seconds < 10) {
    seconds = "0" + seconds
  }
  str += day + ": " + hours + ":" + minutes + ":" + seconds + " ";
  if (hours > 11) {
    str += "PM"
  } else {
    str += "AM"
  }
  return str;
}
// CREATING 

// Copy
app.copyTemplate = function (scale) {
  let newScale = scale;
  return newScale;
}
// Re-Order
app.startNote = function (arr, index, offset) {
  return arr[(arr.length + index + (offset % arr.length)) % arr.length];
}
// Create Function USE THIS TO CREATE NEW WTS
app.newWTS = function (array, root) {
  let arrayToUse = app.copyTemplate(array);
  let copyArray = [];
  // Loop through the wts array and ad
  for (let i = 0; i < arrayToUse.length; i++) {
    copyArray[i] = app.startNote(arrayToUse, i, root);
  }
  return copyArray;
}

// FILTERS
// Take Array (WTS Starting From a Root)
// Create new Array with new scale.

// MODE FILTERS

// Ionian
app.ionianScale = function (array) {
  let ionianScaleArr = [];
  ionianScaleArr[0] = array[0];
  ionianScaleArr[1] = array[2];
  ionianScaleArr[2] = array[4];
  ionianScaleArr[3] = array[5];
  ionianScaleArr[4] = array[7];
  ionianScaleArr[5] = array[9];
  ionianScaleArr[6] = array[11];

  return ionianScaleArr;
};
// Dorian
app.dorianScale = function (array) {
  let dorianScaleArr = [];

  dorianScaleArr[0] = array[0];
  dorianScaleArr[1] = array[2];
  dorianScaleArr[2] = array[3];
  dorianScaleArr[3] = array[5];
  dorianScaleArr[4] = array[7];
  dorianScaleArr[5] = array[9];
  dorianScaleArr[6] = array[10];
  return dorianScaleArr;
};
// Phrygian Scale
app.phrygianScale = function (array) {
  let phrygianScaleArr = [];

  phrygianScaleArr[0] = array[0];
  phrygianScaleArr[1] = array[1];
  phrygianScaleArr[2] = array[3];
  phrygianScaleArr[3] = array[5];
  phrygianScaleArr[4] = array[7];
  phrygianScaleArr[5] = array[8];
  phrygianScaleArr[6] = array[10];
  return phrygianScaleArr;
};
// Lydian Scale
app.lydianScale = function (array) {
  let lydianScaleArr = [];

  lydianScaleArr[0] = array[0];
  lydianScaleArr[1] = array[2];
  lydianScaleArr[2] = array[4];
  lydianScaleArr[3] = array[6];
  lydianScaleArr[4] = array[7];
  lydianScaleArr[5] = array[9];
  lydianScaleArr[6] = array[11];

  return lydianScaleArr;
};
app.mixolydianScale = function (array) {
  let mixoArr = [];

  mixoArr[0] = array[0];
  mixoArr[1] = array[2];
  mixoArr[2] = array[4];
  mixoArr[3] = array[5];
  mixoArr[4] = array[7];
  mixoArr[5] = array[9];
  mixoArr[6] = array[10];
  return mixoArr;
};
// Aeolian
app.aeolianScale = function (array) {
  let aeolianScaleArr = [];

  aeolianScaleArr[0] = array[0];
  aeolianScaleArr[1] = array[2];
  aeolianScaleArr[2] = array[3];
  aeolianScaleArr[3] = array[5];
  aeolianScaleArr[4] = array[7];
  aeolianScaleArr[5] = array[8];
  aeolianScaleArr[6] = array[10];
  return aeolianScaleArr;
};
// Locrian
app.locrianScale = function (array) {
  let locrianArr = [];
  locrianArr[0] = array[0];
  locrianArr[1] = array[1];
  locrianArr[2] = array[3];
  locrianArr[3] = array[5];
  locrianArr[4] = array[6];
  locrianArr[5] = array[8];
  locrianArr[6] = array[10];
  return locrianArr;
};

// END MODE FILTERS 
// Compare two arrays
// Creates list with the triad class on the item
app.createFilterList = function (a, b, listParent) {
  console.log(a + b);
  for (let i = 0; i < a.length; i++) {
    const li = document.createElement('li');
    listParent.appendChild(li);
    li.innerHTML = a[i];
    li.classList.add('string-li');
    if (i == 0) {
      li.classList.add('open');
      console.log('i = ' + i);
    }
    for (let j = 0; j < b.length; j++) {
      // console.log('check the array for a match ');
      // console.log(a[i] + b[j]);
      if (a[i] == b[j]) {
        // console.log('note matched');
        app.bingo = true;
        li.classList.add('target-tone');
        j++;
        // j++;
      } else {
        app.bingo = false;
      }
    };
  };
};

// BUILD NECK
// Creates list items based on size of array
app.createGtrString = function (a, listParent) {
  for (let i = 0; i < a.length; i++) {
    const li = document.createElement('li');
    listParent.appendChild(li);
    li.innerHTML = a[i];
  };
};
// Create 6 Lists to represent the fretboard
app.createGtrNeck = function (array) {
  // console.log('Strings Have been created')
  let E = app.newWTS(array, app.roots[0]);
  let A = app.newWTS(array, app.roots[1]);
  let D = app.newWTS(array, app.roots[2]);
  let G = app.newWTS(array, app.roots[3]);
  let B = app.newWTS(array, app.roots[4]);
  app.createGtrString(E, app.str1);
  app.createGtrString(A, app.str2);
  app.createGtrString(D, app.str3);
  app.createGtrString(G, app.str4);
  app.createGtrString(B, app.str5);
  app.createGtrString(E, app.str6);
}
app.btnDisabled = function () {
  if (app.btnDisable == true) {
    app.btnGo.disabled = true
  }
  else {
    app.btnGo.disabled = false
  }
}
app.handleDefaultValue = function () {
  if (app.changeTrigger == true) {
    app.btnGo.disabled = false
  } else {
    app.btnGo.disabled = true
  }
}
app.createKeyboardArray = function (array) {
  let k = app.newWTS(array, app.roots[1])
  app.kElement = document.getElementById('keyboard')
  app.createGtrString(k, app.kElement)
}
// Get Values 
app.getValue = function (e) {
  app.getValueReturn = e.target.getAttribute('value')
  // console.log(app.getValueReturn, app.modeReturnVal);
  return app.getValueReturn;
}
app.getValueName = function (e) {
  app.getValName = e.target.getAttribute('name')
  return app.getValName;
}
app.createBoard = function () {
  app.eStringArr = app.newWTS(app.wts, app.roots[0]);
  app.aStringArr = app.newWTS(app.wts, app.roots[1]);
  app.dStringArr = app.newWTS(app.wts, app.roots[2]);
  app.gStringArr = app.newWTS(app.wts, app.roots[3]);
  app.bStringArr = app.newWTS(app.wts, app.roots[4]);
  app.e2StringArr = app.newWTS(app.wts, app.roots[0]);
}
app.createMode = function (x) {
  app.createFilterList(app.eStringArr, x, app.str1);
  app.createFilterList(app.aStringArr, x, app.str2);
  app.createFilterList(app.dStringArr, x, app.str3);
  app.createFilterList(app.gStringArr, x, app.str4);
  app.createFilterList(app.bStringArr, x, app.str5);
  app.createFilterList(app.e2StringArr, x, app.str6);
}

app.applyMode = function () {
  let value = app.modeReturnVal;
  switch (value) {

    case 'ionian':
      app.clearBoard();
      app.createdIonianScale = app.ionianScale(app.keyReturnArr)
      app.createBoard();
      app.createMode(app.createdIonianScale);
      console.log(app.keyLetterVal + " " + app.modeReturnVal + " Has been applied");
      break;

    case 'dorian':
      app.clearBoard();
      app.createdDorianScale = app.dorianScale(app.keyReturnArr);
      app.createBoard();
      app.createMode(app.createdDorianScale);
      console.log(app.keyLetterVal + " " + app.modeReturnVal + " Has been applied");
      break;
    case 'phrygian':
      app.clearBoard();
      app.createdPhrygianScale = app.phrygianScale(app.keyReturnArr);
      app.createBoard();
      app.createMode(app.createdPhrygianScale);
      console.log(app.keyLetterVal + " " + app.modeReturnVal + " Has been applied");
      break;
    case 'lydian':
      app.clearBoard();
      app.createdLydianScale = app.lydianScale(app.keyReturnArr);
      app.createBoard();
      app.createMode(app.createdLydianScale);
      console.log(app.keyLetterVal + " " + app.modeReturnVal + " Has been applied");
      break;
    case 'mixolydian':
      app.clearBoard();
      app.createdMixolydianScale = app.mixolydianScale(app.keyReturnArr);
      app.createBoard();
      app.createMode(app.createdMixolydianScale);
      console.log(app.keyLetterVal + " " + app.modeReturnVal + " Has been applied");
      break;
    case 'aeolian':
      app.clearBoard();

      app.createdAeolianScale = app.aeolianScale(app.keyReturnArr);
      app.createBoard();
      app.createMode();
      console.log(app.keyLetterVal + " " + app.modeReturnVal + " Has been applied");
      break;
    case 'locrian':
      app.clearBoard();

      app.createdLocrianScale = app.LocrianScale(app.keyReturnArr);
      app.createBoard();
      app.createMode();
      console.log(app.keyLetterVal + " " + app.modeReturnVal + " Has been applied");

      break;
  }
}

app.clearBoard = function () {

  while (app.str1.firstChild) {
    app.str1.removeChild(app.str1.firstChild);
  };

  while (app.str2.firstChild) {
    app.str2.removeChild(app.str2.firstChild);
  };
  while (app.str3.firstChild) {
    app.str3.removeChild(app.str3.firstChild);
  };
  while (app.str4.firstChild) {
    app.str4.removeChild(app.str4.firstChild);
  };
  while (app.str5.firstChild) {
    app.str5.removeChild(app.str5.firstChild);
  };
  while (app.str6.firstChild) {
    app.str6.removeChild(app.str6.firstChild);
  };
  // while (app.kb.firstChild) {
  //   kb.removeChild(kb.firstChild);
  // };

}
app.show = function (elem) {
  elem.classList.add('is-visible');
}
app.hide = function (elem) {
  elem.classList.remove('is-visible');
}
app.toggle1 = function (elem) {
  elem.classList.toggle('is-visible');
}
// EVENT LISTNERS
app.qualityList.addEventListener('click', function(e){
  // e.preventDefault();
  let value = app.getValue(e);

  if(value == 'major') {
    app.toggle1(app.majorModesList);
    // app.hide(app.melodicModesList);
    // app.toggle1(app.melodicModesList);
    // app.toggle1(app.keyList);
    console.log(app.majorModesList.classList);
  }
  if (value == 'melodic') {
    app.toggle1(app.melodicModesList);
    // app.toggle1(app.keyList);
  }
  if (value == 'harmonicmin') {
    app.toggle1(app.harmonicminModesList);
    // app.toggle1(app.keyList);
  }
  if (app.majorModesList.classList === ".is-visible") {
    app.hide(app.melodicModesList);
    app.hide(app.harmonicminModesList);
    console.log('test');
  }

  if (app.melodicModesList.classList == ".is-visible") {
    app.hide(app.majorModesList);
    app.hide(app.harmonicminModesList);
  }

  if (app.harmonicminModesList.classList == ".is-visible") {
    app.hide(app.melodicModesList);
    app.hide(app.majorModesList);
  }



  // if (app.harmonicModesList.classList == "is-visible") {
  //   app.hide(app.harmonicminModesList);
  //   app.hide(app.majorModesList);
  // }

 
  // switch(value){
  //   case 'major':
  //     app.toggle1(app.majorModesList);
  //     // app.toggle1(app.melodicModesList);
  //     app.show(app.keyList);
  //     // app.hide(app.melodicModesList);
  //     // app.hide(app.harmonicModesList);
  //     break;
  //   case 'melodic':
  //     app.toggle1(app.melodicModesList);
  //     app.hide(app.majorModesList);
  //     // app.toggle1(app.keyList);
  //     // app.hide(app.majorModesList);
  //     // app.hide(app.harmonicModesList);
      
  //   break;
  //   case 'harmonicmin':
  //     app.toggle1(app.harmonicminModesList);
  //     // app.toggle1(app.keyList);
  //     // app.hide(app.melodicModesList);
  //     // app.hide(app.majorModesList);
      
  //   break;

  // }
})
app.keyList.addEventListener('click', function (e) {
  e.preventDefault();
  app.keyReturnArr = [];
  app.keyReturnVal = app.getValue(e);
  app.keyLetterVal = app.getValueName(e);
  app.outputfeild2.innerHTML = app.keyLetterVal + app.keyReturnVal;
  app.keyReturnArr = app.newWTS(app.wts, app.keyReturnVal);
})
app.majorModesList.addEventListener('click', function (e) {
  e.preventDefault();
  app.modeReturnVal = app.getValue(e);
  app.outputfeild.innerHTML = app.modeReturnVal;

})


app.applyBtnElement.addEventListener('click', function () {
  app.applyMode();
  app.keyReturnVal = "";
  console.log(app.keyReturnVal);
  app.modeReturnVal = "";
  console.log(app.modeReturnVal);
})

// app.keyList.addEventListener('click', app.getValue);
// app.modeList.addEventListener('click', app.getValue);

// App Initializer
app.init = function () {
  console.log('Init running..set up default behaviours');
  // app.handleDefaultValue();
  app.createGtrNeck(app.wts);
}

// On Page Load
document.addEventListener('DOMContentLoaded', function () {
  // code
  console.log('Application starting at..' + app.displayTime())
  console.log('Loaded app.init')
  app.init()
})
