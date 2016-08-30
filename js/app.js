$(document).ready(function () {

  var screen = $('#screen');
  var num1, num2;

  $('#buttons-container').on('click', 'span', function () {
    if ($(this).attr('id') === 'equals') {
      // console.log('equals');
      //parse through the stuffz
      var tester = screen.text().split('');
      // console.log(tester);
      var count = 0;
      for (var i = 0; i < tester.length; i++) {
        if (tester[i] === '+') {
          count++;
          var equation = screen.text().split('+');
          screen.text(add(parseInt(equation[0]), parseInt(equation[1])));
        } else if (tester[i] === 'x') {
          count++;
          var equation = screen.text().split('x');
          screen.text(multiply(parseInt(equation[0]), parseInt(equation[1])));
        } else if (tester[i] === '÷') {
          count++;
          var equation = screen.text().split('÷');
          if (parseInt(equation[1]) === 0) {
            screen.text('error');
          } else {
            screen.text(divide(parseInt(equation[0]), parseInt(equation[1])));
          }
        } else if (tester[i] === '-') {
          count++;
          var equation = screen.text().split('-');
          screen.text(subtract(parseInt(equation[0]), parseInt(equation[1])));
        }
      }

      if (count > 1) {
        screen.text('error')
      }





      // screen.text(add(parseInt(nums[0]), parseInt(nums[1])));



    } else if ($(this).attr('id') === 'clear') {
      screen.text('');
    } else {
      var num = $(this).text();
      screen.append(num);
    }
  })

  function add (a, b) {
    return a + b;
  }

  function multiply (a, b) {
    return a * b;
  }

  function divide (a, b) {
    return a / b;
  }

  function subtract (a, b) {
    return a - b;
  }
});
