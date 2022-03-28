function formValidate() {
  let x = document.forms["newform"]["fname"].value;
  if (x == "") {
    alert("Need first Name");
    return false;
  }
}
