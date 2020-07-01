function sendMessage1() {

    var contentText = document.getElementById('').nodeValue;
    var URL = document.getElementById('webhookURL').nodeValue;
    var username = document.getElementById('webhookUsername').nodeValue;
    var avatar = document.getElementById('webhookAvatar').nodeValue;

    var request = new XMLHttpRequest(URL);
    request.open("POST", "");

    request.setRequestHeader('Content-type', 'application/json');

    var params1 = {
      username: username,
      avatar_url: avatar,
      content: contentText

    }

    request.send(JSON.stringify(params1));
  }