// Inputs vanney id ma we have the user's input
var x = document.getElementById("inputs");

var letter = "";
var str = "";
var newstr = "";
var count = 0;


//Checks if any key is pressed inside the Documents

document.addEventListener('keydown', (event) => {
  userInput(event.key);
});



// Checking what the user has pressed and how many times have they pressed the key

function userInput(n) {

  setTimeout(function() {

    if (n != "Enter") {
      //For Key 2 pressed
      if (n == 2) {
        count++;
        if (count == 1) {
          document.getElementById('preview').innerHTML = "A";
          letter = "A";
        }

        else if (count == 2) {
          document.getElementById('preview').innerHTML = "B";
          letter = "B";
        }

        else if (count == 3) {
          document.getElementById('preview').innerHTML = "C";
          letter = "C";
        }
        else if (count == 4) {
          document.getElementById('preview').innerHTML = "2";
          letter = "2";
          count = 0;
        }
      }
      //Key 3 press condition
      else if (n == 3) {
        count++;
        if (count == 1) {
          document.getElementById('preview').innerHTML = "D";
          letter = "D";
        }

        else if (count == 2) {
          document.getElementById('preview').innerHTML = "E";
          letter = "E";
        }

        else if (count == 3) {
          document.getElementById('preview').innerHTML = "F";
          letter = "F";
        }
        else if (count == 4) {
          document.getElementById('preview').innerHTML = "3";
          letter = "3";
          count = 0;
        }
      }
      //Key 4 press condition
      else if (n == 4) {
        count++;
        if (count == 1) {
          document.getElementById('preview').innerHTML = "G";
          letter = "G";
        }

        else if (count == 2) {
          document.getElementById('preview').innerHTML = "H";
          letter = "H";
        }

        else if (count == 3) {
          document.getElementById('preview').innerHTML = "I";
          letter = "I";
        }
        else if (count == 4) {
          document.getElementById('preview').innerHTML = "4";
          letter = "4";
          count = 0;
        }
      }

      //Key 5 press condition
      else if (n == 5) {
        count++;
        if (count == 1) {
          document.getElementById('preview').innerHTML = "J";
          letter = "J";
        }

        else if (count == 2) {
          document.getElementById('preview').innerHTML = "K";
          letter = "K";
        }

        else if (count == 3) {
          document.getElementById('preview').innerHTML = "L";
          letter = "L";
        }
        else if (count == 4) {
          document.getElementById('preview').innerHTML = "5";
          letter = "5";
          count = 0;
        }
      }
      //Key 6 press condition
      else if (n == 6) {
        count++;
        if (count == 1) {
          document.getElementById('preview').innerHTML = "M";
          letter = "M";
        }

        else if (count == 2) {
          document.getElementById('preview').innerHTML = "N";
          letter = "N";
        }

        else if (count == 3) {
          document.getElementById('preview').innerHTML = "O";
          letter = "O";
        }
        else if (count == 4) {
          document.getElementById('preview').innerHTML = "6";
          letter = "6";
          count = 0;
        }
      }

      //Key 7 press condition
      else if (n == 7) {
        count++;
        if (count == 1) {
          document.getElementById('preview').innerHTML = "P";
          letter = "P";
        }

        else if (count == 2) {
          document.getElementById('preview').innerHTML = "Q";
          letter = "Q";
        }

        else if (count == 3) {
          document.getElementById('preview').innerHTML = "R";
          letter = "R";
        }

        else if (count == 4) {
          document.getElementById('preview').innerHTML = "S";
          letter = "S";
        }

        else if (count == 5) {
          document.getElementById('preview').innerHTML = "8";
          letter = "8";
          count = 0;
        }
      }

      //Key 8 press condition
      else if (n == 8) {
        count++;
        if (count == 1) {
          document.getElementById('preview').innerHTML = "T";
          letter = "T";
        }

        else if (count == 2) {
          document.getElementById('preview').innerHTML = "U";
          letter = "U";
        }

        else if (count == 3) {
          document.getElementById('preview').innerHTML = "V";
          letter = "V";
        }

        else if (count == 4) {
          document.getElementById('preview').innerHTML = "8";
          letter = "8";
          count = 0;
        }
      }

      //Key 9 press condition
      if (n == 9) {
        count++;
        if (count == 1) {
          document.getElementById('preview').innerHTML = "W";
          letter = "W";
        }

        else if (count == 2) {
          document.getElementById('preview').innerHTML = "X";
          letter = "X";
        }

        else if (count == 3) {
          document.getElementById('preview').innerHTML = "Y";
          letter = "Y";
        }

        else if (count == 4) {
          document.getElementById('preview').innerHTML = "Z";
          letter = "Z";
        }

        else if (count == 5) {
          document.getElementById('preview').innerHTML = "9";
          letter = "9";
          count = 0;
        }
      }

      //Key 0 press condition
      else if (n == 0) {
        document.getElementById('preview').innerHTML = "0";
        letter = "0";
      }

      //Key 1 press condition
      else if (n == 1) {
        document.getElementById('preview').innerHTML = "1";
        letter = "1";
      }

      console.log(count);
    }
    else if (n == "Enter") {
      count = 0;
      newstr = str + letter;
      str = newstr;
      document.getElementById("output").innerHTML = newstr;
    }
  }, 2000);

}
