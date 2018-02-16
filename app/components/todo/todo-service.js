function TodoService() {
	// A local copy of your todos
	var localToDoList = [];
	var baseUrl = 'https://inspire-server.herokuapp.com/api/engstrom/'

	function logError(err) {
		console.error('UMM SOMETHING BROKE: ', err)
		//CAN YOU NOTIFY THE USER IF SOMETHING BREAKS? 
		//do this without breaking the controller/service responsibilities
	}

	this.getTodos = function (cb) {
		$.get(baseUrl)
			.then(function (res) { // <-- WHY IS THIS IMPORTANT????
				localToDoList = res;
				cb(localToDoList)
			})
			.fail(logError)
	}

	this.addTodo = function (todo, cb) {
		//This funciton is for adding todo's to our api
		$.post(baseUrl, todo)
			.then(function(res){ // <-- WHAT DO YOU DO AFTER CREATING A NEW TODO?
				console.log(res);
				localToDoList.unshift(res.data);
				cb();
			}) 
			.fail(logError)
	}

	
	this.toggleTodoStatus = function (todoId, cb) {
		//This function changes the completion status of to do list items in our API
		var toggledTask;
		for (var i = 0; i < localToDoList.length; i ++){
			var task = localToDoList[i];
			if(task.id == todoId){
				if(task.status == "false"){
					task.status = "true";
				} else if (task.status == "true"){
					task.status = "false";
				}

				toggledTask = task;
			}
		}
		//Here is that weird Ajax request because $.put doesn't exist
		$.ajax({
			method: 'PUT',
			contentType: 'application/json',
			url: baseUrl + todoId,
			data: JSON.stringify(toggledTask)
		})
			.then(function (res) {
				//DO YOU WANT TO DO ANYTHING WITH THIS?
				cb(res)
			})
			.fail(logError)
	}

	this.removeTodo = function (id, cb) {
		// Umm this one is on you to write.... It's also unique, like the ajax call above. The method is a DELETE
		$.ajax({
			url: baseUrl + id,
			method: 'DELETE'
		})
			.then(res => {
				cb(res);
			})
	}

}
