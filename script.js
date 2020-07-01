function sendMessage1() {

    var contentText = document.getElementById('').value;
    var URL = document.getElementById('webhookURL').value;
    var username = document.getElementById('webhookUsername').value;
    var avatar = document.getElementById('webhookAvatar').value;

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