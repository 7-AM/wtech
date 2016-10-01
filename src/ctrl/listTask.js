(function () {

  var tableBodyEl = document.querySelector("table#books>tbody");

  Utils.request({
      type: 'GET',
      url: 'http://localhost:8080/api/v1/task',
      success: function (data) {

        for (var i = 0; i < data.length; i++) {

          row = tableBodyEl.insertRow();
          row.insertCell(-1).textContent = data[i].description;
          row.insertCell(-1).textContent = data[i].state === 1 ? 'Active' : 'Done';
          row.insertCell(-1).textContent = data[i].creation_date;
          row.insertCell(-1).appendChild( Utils.createElementLink('Edit', "/src/view/updateTask.html?id=" + data[i].id) );
          row.insertCell(-1).appendChild( Utils.createElementButton('Delete', 'deleteBtn', data[i].id) );

        }

        // Attach click events to all buttons with class 'deleteBtn' -----------
        var deleteBtn = document.querySelectorAll('.deleteBtn');

        for (var j = 0; j < deleteBtn.length; j++) {
          deleteBtn[j].addEventListener("click", handleDeleteClickEvent);
        }
        // ---------------------------------------------------------------------

      },
      error: function (error) {
        console.log(error);
      }
  });


  function handleDeleteClickEvent(e) {
    var id = e.target.getAttribute('data-id');

    Utils.request({
      type: 'DELETE',
      url: 'http://localhost:8080/api/v1/task/' + id,
      success: function (result) {
        console.log(result);
      },
      error: function (error) {
        alert(error);
      }
    });

  }


})();
