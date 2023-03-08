function navbar_search_function() {
  var input = document.getElementById("navbar_search_bar");
  var filter = input.value.toLowerCase();
  var nodes = document.getElementsByClassName('card');

  for (i = 0; i < nodes.length; i++) {
    if (nodes[i].innerText.toLowerCase().includes(filter)) {
      nodes[i].style.display = "block";
    } else {
      nodes[i].style.display = "none";
    }
  }
}