(function () {

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
          state: 1,
          creation_date: Utils.formatDate(new Date())
      };

      Utils.request({
          type: 'POST',
          url: 'http://localhost:8080/api/v1/task',
          data: newTask,
          success: function (result) {
             if (result.id) {
                document.getElementById('res').innerHTML = 'Task ' + result.description + ' created successfully';
            }

          },
          error: function (error) {
             document.getElementById('res').innerHTML = 'Error occured: ' + error.validationErrors.join(' / ');
          }
      });

      formEl.reset();
    }

})();
