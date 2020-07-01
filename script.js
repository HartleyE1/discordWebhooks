function sendMessage1() {

    var contentText = document.getElementById('webhookContent');
    var URL = document.getElementById('webhookURL');
    var username = document.getElementById('webhookUsername');
    var avatar = document.getElementById('webhookAvatar');

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