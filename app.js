
function myFunction() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("search-input");
    filter = input.value.toUpperCase();
    table = document.getElementById("tbl-container");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
    var abc = 0;
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) == 0) {
          abc = 1;
        } else {
         
        }
      } 
      td1 = tr[i].getElementsByTagName("td")[1];
      if (td1) {
        txtValue = td1.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) == 0) {
          abc = 1;
        } else {
          
        }
      }
      if (abc == 1) {
          tr[i].style.display = "";
        }
        else
        {
        tr[i].style.display = "none";
        }
    }
  }