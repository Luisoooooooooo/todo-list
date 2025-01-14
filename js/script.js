document.addEventListener('DOMContentLoaded', () => {
	const todoForm = document.getElementById('todo-form');
	const todoInput = document.getElementById('todo-input');
	const todoList = document.getElementById('todo-list');
	const emptyMessage = document.getElementById('empty-message');

	todoForm.addEventListener('submit', (e) => {
		e.preventDefault();
		const taskText = todoInput.value.trim();
		if (taskText === "") return;

		const todoItem = document.createElement('li');
		todoItem.classList.add('todo-item');
		const taskSpan = document.createElement('span');
		taskSpan.textContent = taskText;
		const deleteButton = document.createElement('button');
		deleteButton.textContent = 'Delete';
		deleteButton.addEventListener('click', () => {
			todoList.removeChild(todoItem);
			checkEmptyList();
		});
		todoItem.appendChild(taskSpan);
		todoItem.appendChild(deleteButton);
		todoList.appendChild(todoItem);

		todoInput.value = "";
		emptyMessage.style.display = 'none';
	});
	function checkEmptyList() {
		if (todoList.children.length === 1) {
			emptyMessage.style.display = 'block';
		}
	};
	checkEmptyList();s
});