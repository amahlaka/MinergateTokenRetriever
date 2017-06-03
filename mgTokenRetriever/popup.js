

 function getCookies(domain, name, callback) {
      chrome.cookies.get({"url": domain, "name": name}, function(cookie) {
         if(callback) {
             callback(cookie.value);
         }
     });
 }


 getCookies("https://minergate.com", "token", function(value) {
     renderStatus(value);
 });


function renderStatus(statusText) {
  document.getElementById('status').textContent = statusText;
  document.getElementById('copys').textContent = "Click me to copy";
}

document.addEventListener('DOMContentLoaded', function() {var copyTextareaBtn = document.querySelector('.js-textareacopybtn');

copyTextareaBtn.addEventListener('click', function(event) {
  var copyTextarea = document.querySelector('.js-copytextarea');
  copyTextarea.select();

  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    console.log('Copying text command was ' + msg);
  } catch (err) {
    console.log('Oops, unable to copy');
  }
});
});
