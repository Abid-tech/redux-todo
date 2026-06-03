# Daily Routine Manager - Todo App

A modern and responsive Todo Application built with **React** and **Redux Toolkit**. This project helps users efficiently manage their daily tasks with features such as task creation, editing, deletion, completion tracking, and a real-time dashboard for productivity insights.

Live at : https://abid-tech.github.io/redux-todo/

## Features

### Task Management

* Add new tasks instantly.
* Edit existing tasks.
* Delete tasks that are no longer needed.
* Mark tasks as completed.
* Prevent accidental modification of completed tasks.

### Dashboard Analytics

The application provides a simple dashboard that displays:

* Total number of tasks.
* Number of completed tasks.
* Number of pending tasks.

### User Experience

* Clean and intuitive interface.
* Real-time state management using Redux Toolkit.
* Keyboard shortcuts for editing:

  * **Enter** → Save changes.
  * **Escape** → Cancel editing.
* Automatic timestamp generation for newly created tasks.

## Technologies Used

* React
* Redux Toolkit
* React Redux
* JavaScript (ES6+)
* HTML5
* CSS3
* Bootstrap

## Project Structure

```text
src/
│
├── components/
│   └── Todo.jsx
│
├── slices/
│   └── todo/
│       └── todoSlice.js
│
├── store/
│   └── store.js
│
└── App.jsx
```

## Redux State Structure

```javascript
{
  todos: [
    {
      id: "unique-id",
      text: "Task description",
      time: "Creation timestamp",
      isCompleted: false,
      isEdit: false
    }
  ]
}
```

## Implemented Redux Actions

| Action         | Description              |
| -------------- | ------------------------ |
| addTodo        | Add a new task           |
| removeTodo     | Delete a task            |
| toggleComplete | Mark a task as completed |
| editTrue       | Enable edit mode         |
| editTodo       | Update task text         |
| cancelEdit     | Cancel editing           |



## Installation

### Clone the Repository

```bash
git clone https://github.com/Abid-tech/redux-todo.git
```

### Navigate to Project Directory

```bash
cd redux-todo
```

### Install Dependencies

```bash
npm install
```

### Run the Development Server

```bash
npm run dev
```

The application will start on:

```text
http://localhost:5173
```

## Learning Objectives

This project demonstrates:

* React Functional Components
* React Hooks
* Redux Toolkit State Management
* Global State Updates
* Immutable State Handling with Redux Toolkit
* CRUD Operations
* Component-Based Architecture

## Future Improvements

* Local Storage persistence.
* Task filtering (All, Completed, Pending).
* Search functionality.
* Due dates and reminders.
* Drag-and-drop task organization.
* Dark mode support.

## Author

**Md. Abid Ali**

GitHub: https://github.com/Abid-tech/

