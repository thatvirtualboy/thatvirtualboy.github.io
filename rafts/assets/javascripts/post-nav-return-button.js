function myParseQueryString() {

  function getFromInfo() {
    var searchStr = window.location.search;
    if (!searchStr)
      return null;
    if (searchStr[0] === "?")
      searchStr = searchStr.substring(1);
    var params = searchStr.split("&");

    console.log("params: " + params);

    for (var i = 0; i < params.length; i++) {
      var elements = params[i].split("=");
      if (elements.length === 2 && elements[0] === "from")
        return elements[1];
    }
    return null;
  }

  function toggleClass(node, className, include) {
    var classNames = node.className.split(" ");
    var index = classNames.indexOf(className);
    if (include) {
      if (index < 0) {
        classNames.push(className);
      }
    } else {
      if (index >= 0) {
        classNames.splice(index, 1);
      }
    }
    node.className = classNames.join(" ");
  }

  function setupReturnButton(url, text) {
    var returnButton = document.getElementById("returnButton");
    returnButton.href = url;
    returnButton.querySelector("#returnButtonText").innerText = text;
    toggleClass(returnButton, "hidden", false);

    var navButtons = document.getElementsByClassName("navButton");
    for (var i = 0; i < navButtons.length; i++) {
      toggleClass(navButtons[i], "hidden", true);
    }
  }

  var fromInfo = getFromInfo();
  if (!fromInfo)
    return;

  console.log("fromInfo = '" + fromInfo + "'");

  switch (fromInfo) {
    case "articles":
      setupReturnButton("/articles/", "Back to Articles");
      break;
    case "sawstop":
      setupReturnButton("/sawstop/", "Back to SawStop");
      break;
    default:
      console.log("Unknown fromInfo");
  }

}

myParseQueryString();
