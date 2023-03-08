function navbar_search_function() {
  var input = document.getElementById("navbar_search_bar");
  var filter = input.value.toLowerCase();
  var nodes = document.getElementsByClassName('card');
  var result_count = document.getElementById("returned_search_results_count")
  let count = 0;
  

  for (i = 0; i < nodes.length; i++) {
    if (nodes[i].innerText.toLowerCase().includes(filter)) {
      nodes[i].style.display = "block";
      count ++;
      document.getElementById("numbResults").innerHTML = count/2;
      result_count.style.display = "inline";
    } else {
      nodes[i].style.display = "none";
    }
  }
}