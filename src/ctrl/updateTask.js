(function () {
  var ID = Utils.queryString('id');
  var formEl = document.forms.task;
  var saveButton = formEl.commit;


  Utils.request({
    type: 'GET',
    url: 'http://localhost:8080/api/v1/task?query={"id": ' + ID + '}',
    success: function (result) {
      formEl.description.value = result[0].description;
      formEl.state.value = result[0].state;
    },
    error: function (error) {
      document.getElementById('res').innerHTML = 'Cannot load the Task ID: ' + ID;
    }

  });

  saveButton.addEventListener("click", handleSaveButtonClickEvent);

  function handleSaveButtonClickEvent() {

    var updateTask = {
          id: ID,
          description: formEl.description.value,
          state: formEl.state.value,
          creation_date: Utils.formatDate(new Date())
        };

        Utils.request({
          type: 'PUT',
          url: 'http://localhost:8080/api/v1/task',
          data: updateTask,
          success: function (result) {
            if (result.id) {
              document.getElementById('res').innerHTML = 'Task ' + result.description + ' created successfully';
            }

          },
          error: function (error) {
            if (error.validationErrors) {
              document.getElementById('res').innerHTML = 'Error occured: ' + error.validationErrors.join(' / ');
            }
          }
        });

  }

})();
