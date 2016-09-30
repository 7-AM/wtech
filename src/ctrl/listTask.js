(function (request) {

  var tableBodyEl = document.querySelector("table#books>tbody");

  request({
      type: 'GET',
      url: 'http://localhost:8080/api/v1/task',
      success: function (data) {
        console.log(data);
      },
      error: function (error) {
        console.log(error);
      }
  });
   // load all book objects

   // for each book, create a table row with cells for the 3 attributes
  //  for (i=0; i < keys.length; i++) {
  //    key = keys[i];
  //    row = tableBodyEl.insertRow();
  //    row.insertCell(-1).textContent = Book.instances[key].isbn;
  //    row.insertCell(-1).textContent = Book.instances[key].title;
  //    row.insertCell(-1).textContent = Book.instances[key].year;
  //  }
   //
   //
  //   var saveButton = document.forms.task.commit;
  //   // Set an event handler for the save/submit button
  //   saveButton.addEventListener("click", handleSaveButtonClickEvent);
   //
  //   function handleSaveButtonClickEvent() {
  //     var formEl = document.forms.task;
   //
  //     if (!formEl.description.value) {
  //         return;
  //     }
   //
  //     var newTask = {
  //         description: formEl.description.value,
  //         state: 1
  //     };
   //
  //     formEl.reset();
  //   }

})(request);
