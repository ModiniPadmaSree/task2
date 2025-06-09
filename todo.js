document.getElementById('addBtn').addEventListener('click', addTask);

    function addTask() {
      const input = document.getElementById('taskInput');
      const taskText = input.value.trim();

      if (taskText === '') return;

      // ✅ 4. Create new list item
      const li = document.createElement('li');

      const span = document.createElement('span');
      span.textContent = taskText;
      span.classList.add('task-text');

      // ✅ 5. Toggle complete class
      span.addEventListener('click', () => {
        span.classList.toggle('completed');
      });
      const removeBtn = document.createElement('button');
      removeBtn.textContent = 'Remove';
      removeBtn.classList.add('remove-btn');
      removeBtn.addEventListener('click', () => {
        li.remove(); // ✅ 7–8. Remove from UI without reload
      });

      li.appendChild(span);
      li.appendChild(removeBtn);

      document.getElementById('taskList').appendChild(li);

      input.value = ''; // Clear input
      input.focus(); // Refocus
    }