(function (request) {

    var saveButton = document.forms.task.commit;
    // Set an event handler for the save/submit button
    saveButton.addEventListener("click", handleSaveButtonClickEvent);

    function handleSaveButtonClickEvent() {
      var formEl = document.forms.task;

      if (!formEl.description.value) {
          return;
      }

      var newTask = {
          description: formEl.description.value,
          state: 1
      };

      request({
          type: 'POST',
          url: 'http://localhost:8080/api/v1/task',
          data: newTask,
          success: function () {

          },
          error: function () {

          }
      });

      formEl.reset();
    }

})(request);
