function moveToNext(event) {
    var target = event.target;
    var maxLength = parseInt(target.attributes.maxLength.value, 10);
    var nextDiv = target.parentElement.nextElementSibling;
    var nextInput = nextDiv.querySelector("input");

    if (target.value.length >= maxLength) {
      nextInput.focus();
    }
  }