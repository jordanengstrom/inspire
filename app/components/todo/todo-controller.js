function TodoController() {
	// You will need four methods:
	// COMPLETED: getTodos should request your api/todos and give an array of todos to your callback fn
	// COMPLETED: addTodo takes in a todo and posts it to the server
	// WORKING ON: toggleTodoStatus takes in a todo marks its status as completed and puts it to the server
	// COMPLETED: removeTodo takes in a todoId and sends a delete request to the server
	// **** HINT: Everytime you make a change to any todo don't forget to get the todo list again
	var todoService = new TodoService();

	// Use this getTodos function as your callback for all other edits
	function getTodos() {
		//FYI DONT EDIT ME :)
		todoService.getTodos(draw);
	}

	function draw(todos) {
		console.log(todos);
		var template = '';
		var itemElem = document.getElementById('to-do-items');
		for (var i = 0; i < todos.length; i++) {
			var task = todos[i];
			template += `
			<div class="row">
				<input onclick="app.controllers.todoController.toggleTodoStatus('${task.id}')" class="form-check-input position-static" type="checkbox" id="blankCheckbox" value="done" aria-label="checkbox">
				<p>${task.item}<p>
				<i class="fas fa-minus-circle" onclick="app.controllers.todoController.removeTodo('${task.id}')"></i>
			</div>
			`
		}
		itemElem.innerHTML = template;
	}

	this.addTodoFromForm = function (e) {
		e.preventDefault(); // <-- hey this time its a freebie don't forget this
		var form = e.target;
		var todo = {
			item: form.item.value,
			status: false
		}
		//PASSES THE NEW TODO TO YOUR SERVICE
		//DON'T FORGET TO REDRAW THE SCREEN WITH THE NEW TODO
		//YOU SHOULDN'T NEED TO CHANGE THIS
		todoService.addTodo(todo, getTodos);
		//^^^^^^^ EXAMPLE OF HOW TO GET YOUR TOODOS AFTER AN EDIT
		form.reset();
	}

	this.toggleTodoStatus = function (todoId) {
		// asks the service to edit the todo status
		todoService.toggleTodoStatus(todoId, getTodos)
		// YEP THATS IT FOR ME
	}

	this.removeTodo = function (todoId) {
		// ask the service to run the remove todo with this id
		todoService.removeTodo(todoId,getTodos);
		// ^^^^ THIS LINE OF CODE PROBABLY LOOKS VERY SIMILAR TO THE toggleTodoStatus
	}

	// IF YOU WANT YOUR TODO LIST TO DRAW WHEN THE PAGE FIRST LOADS WHAT SHOULD YOU CALL HERE???
	getTodos();
}
