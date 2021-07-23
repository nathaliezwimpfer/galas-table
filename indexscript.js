let square = document.getElementById('main');
let link = document.getElementById('link');

square.addEventListener('click', function() {

  let pw = prompt("What's the password?", 'Password');
    if (pw.toLowerCase() === "mseaves") {
    } else if (pw == null || pw == '') {
      location.reload();
    }
    else {
      alert("This password is wrong");
      link.href = './index.html';
    }
})

/*


square.addEventListener('click', function() {
  do{
    let pw = prompt("What's the password?");
      if (pw.toLowerCase() === "mseaves") {
      } else if (pw = null) {
        link.href = './index.html';
      }
      else {
        alert("This password is wrong");
        link.href = './index.html';
      }
  }while(pw == null || pw == "" );
})
*/
