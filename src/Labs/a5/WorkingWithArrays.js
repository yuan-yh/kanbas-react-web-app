import React, { useState, useEffect } from "react";
import axios from "axios";

function WorkingWithArrays() {
  const [errorMessage, setErrorMessage] = useState(null);

  const API_BASE = "https://kanbas-node-server-app-t170.onrender.com";
  const API = `${API_BASE}/a5/todos`;
  const [todo, setTodo] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    completed: false,
  });

  const [todos, setTodos] = useState([]);

  const postTodo = async () => {
    const response = await axios.post(API, todo);
    setTodos([...todos, response.data]);
    setErrorMessage(null);
  };

  const fetchTodos = async () => {
    const response = await axios.get(API);
    setTodos(response.data);
    setErrorMessage(null);
  };
  useEffect(() => { fetchTodos(); }, []);

  const removeTodo = async (todo) => {
    const response = await axios
      .get(`${API}/${todo.id}/delete`);
    setTodos(response.data);
    setErrorMessage(null);
  };

  const createTodo = async () => {
    const response = await axios.get(`${API}/create`);
    setTodos(response.data);
    setErrorMessage(null);
  };

  // const createDetailedTodo = async (title, description, due, completed) => {
  //   const response = await axios.get(
  //     `${API}/create/${title}`);
  //   setTodos(response.data);
  //   setErrorMessage(null);
  // };

  const fetchTodoById = async (id) => {
    const response = await axios.get(`${API}/${id}`);
    setTodo(response.data);
    setErrorMessage(null);
  };

  const updateTitle = async () => {
    const response = await axios.get(
      `${API}/${todo.id}/title/${todo.title}`);
    setTodos(response.data);
    setErrorMessage(null);
  };

  const deleteTodo = async (todo) => {
    try {
      await axios.delete(
        `${API}/${todo.id}`);
      setTodos(todos.filter((t) => t.id !== todo.id));
    } catch (error) {
      console.log(error);
      setErrorMessage(error.response.data.message);
    }
  };

  const updateTodo = async () => {
    try {
      await axios.put(
        `${API}/${todo.id}`, todo);
      setTodos(todos.map((t) => (
        t.id === todo.id ? todo : t)));
    } catch (error) {
      console.log(error);
      setErrorMessage(error.response.data.message);
    }
  };

  return (
    <div>
      <h3>Working with Arrays</h3>
      <input value={todo.id} className="form-control mb-2"
        onChange={(e) => setTodo({ ...todo, id: e.target.value })} />
      <input value={todo.title} className="form-control mb-2"
        onChange={(e) => setTodo({ ...todo, title: e.target.value })} />
      <textarea className="form-control mb-2"
        onChange={(e) => setTodo({
          ...todo,
          description: e.target.value
        })}
        value={todo.description} type="text"
      />
      <input className="form-control mb-2"
        onChange={(e) => setTodo({
          ...todo, due: e.target.value
        })}
        value={todo.due} type="date"
      />
      <label className="mb-2">
        <input className="m-2"
          onChange={(e) => setTodo({
            ...todo, completed: e.target.checked
          })}
          value={todo.completed} type="checkbox"
        />
        Completed
      </label>
      <button onClick={postTodo}
        className="btn btn-warning mb-2 mt-2 w-100">
        Post Todo
      </button>
      <button
        onClick={() => deleteTodo(todo)}
        className="btn btn-danger mb-2 mt-2 w-100">
        Delete
      </button>
      <button onClick={updateTodo}
        className="btn btn-success mb-2 mt-2 w-100">
        Update Todo
      </button>
      <button onClick={createTodo}
        className="btn btn-primary mb-2 mt-2 w-100">
        Create Todo
      </button>
      <button onClick={updateTitle}
        className="btn btn-success mb-2 w-100">
        Update Title
      </button>
      {errorMessage && (
        <div className="alert alert-danger mb-2 mt-2">
          {errorMessage}
        </div>
      )}
      <ul className="list-group">
        {todos.map((todo) => (
          <li key={todo.id} className="list-group-item">
            <button
              onClick={() => fetchTodoById(todo.id)}
              className="btn btn-warning me-2 float-end" >
              Edit
            </button>
            <button
              onClick={() => removeTodo(todo)}
              className="btn btn-danger float-end" >
              Remove
            </button>
            <input
              checked={todo.completed}
              type="checkbox" readOnly
            />
            {todo.title}
            <p>{todo.description}</p>
            <p>{todo.due}</p>
          </li>
        ))}
      </ul>

      <h4>Retrieving Arrays</h4>
      <a href={API} className="btn btn-primary me-2">
        Get Todos
      </a>
      <h4>Retrieving an Item from an Array by ID</h4>
      <input
        className="form-control"
        value={todo.id}
        onChange={(e) => setTodo({
          ...todo,
          id: e.target.value
        })} />
      <a href={`${API}/${todo.id}`}
        className="btn btn-primary me-2">
        Get Todo by ID
      </a>
      <h3>Filtering Array Items</h3>
      <a href={`${API}?completed=true`}
        className="btn btn-primary me-2" >
        Get Completed Todos
      </a>
      <h4>Creating new Items in an Array</h4>
      <a href={`${API}/create`}
        className="btn btn-primary me-2">
        Create Todo
      </a>
      <input
        value={todo.title}
        onChange={(e) => setTodo({
          ...todo, title: e.target.value
        })}
        className="form-control mb-2"
        type="text"
      />
      <h3>Updating Title for an Item in an Array</h3>
      <a
        href={`${API}/${todo.id}/title/${todo.title}`}
        className="btn btn-primary me-2" >
        Update Title ID: {todo.id}
      </a>
      <input
        value={todo.description}
        onChange={(e) => setTodo({
          ...todo, description: e.target.value
        })}
        className="form-control mb-2"
        type="text"
      />
      <h3>Updating Description for an Item in an Array (Extra Credit)</h3>
      <a
        href={`${API}/${todo.id}/description/${todo.description}`}
        className="btn btn-primary me-2" >
        Update Description ID: {todo.id}
      </a>
      <br />
      <input
        checked={todo.completed}
        onChange={(e) => setTodo({
          ...todo, completed: e.target.checked
        })}
        className="mb-2"
        type="checkbox"
      />
      <h3>Updating Complted for an Item in an Array (Extra Credit)</h3>
      <a
        href={`${API}/${todo.id}/completed/${todo.completed}`}
        className="btn btn-primary me-2" >
        Update Completed ID: {todo.id}
      </a>
      <input
        value={todo.id}
        onChange={(e) => setTodo({
          ...todo, id: e.target.value
        })}
        className="form-control mb-2"
        type="number"
      />
      <h3>Deleting from an Array</h3>
      <a href={`${API}/${todo.id}/delete`}
        className="btn btn-primary me-2">
        Delete Todo with ID = {todo.id}
      </a>
    </div>
  );
}
export default WorkingWithArrays;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// function WorkingWithArrays() {
//   const [id, setId] = useState(1);
//   const [title, setTitle] = useState("Go to work");
//   const [complete, setComplete] = useState(useState({ completed: false }));
//   const [description, setDescription] = useState("Sleep in the sea");
//   const [todos, setTodos] = useState([]);
//   const [todo, setTodo] = useState({}); // {id: 1, title: "Go to work"
//   <input
//     className="form-control"
//     value={id}
//     onChange={(e) => setTodo({ ...todo, id: e.target.value })}
//   />;

//   const TODOS_API = "http://localhost:4000/a5/todos";

//   const fetchTodosPromise = () => {
//     const promise = axios.get(TODOS_API);
//     promise.then((response) => {
//       setTodos(response.data);
//     });
//   };

//   const createTodo = async () => {
//     const response = await axios.get("http://localhost:4000/a5/todos/create");
//     setTodos(response.data);
//   };

//   const postTodo = async () => {
//     const response = await axios.post("http://localhost:4000/a5/todos", {
//       title: title,
//     });
//     setTodos(response.data);
//   };

//   const fetchTodos = async () => {
//     const response = await axios.get("http://localhost:4000/a5/todos");
//     setTodos(response.data);
//   };

//   const fetchTodoById = async (id) => {
//     const response = await axios.get(`${TODOS_API}/${id}`);
//     setTodo(response.data);
//   };

//   const removeTodo = async (id) => {
//     const response = await axios.get(`${TODOS_API}/${id}/delete`);
//     setTodos(response.data);
//   };

//   const deleteTodo = async (id) => {
//     const response = await axios.delete(`${TODOS_API}/${id}`);
//     setTodos(response.data);
//   };

//   const updateTitle = async (id, title) => {
//     const response = await axios.get(`${TODOS_API}/${id}/title/${title}`);
//     setTodos(response.data);
//   };

//   const updateComplete = async (id, complete) => {
//     const response = await axios.get(`${TODOS_API}/${id}/completed/${complete}`);
//     setTodos(response.data);
//   };

//   useEffect(() => {
//     // fetchTodosPromise();
//     fetchTodos();
//   }, []);

//   return (
//     <div>
//       <h1>Working with Arrays + Extra Credits</h1>
//       <h2>Todos from server</h2>
//       <button
//         className="btn btn-primary"
//         onClick={() => updateTitle(id, title)}
//       >
//         Update Todo Title
//       </button>
//       <button className="btn btn-primary" onClick={createTodo}>
//         Create Todo
//       </button>
//       <button className="btn btn-primary" onClick={postTodo}>
//         Post Todo
//       </button>
//       <button className="btn btn-primary" onClick={updateComplete}>
//         Update Todo Completed
//       </button>
//       <input
//         className="form-control"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//       />
//       <ul className="list-group">
//         {todos.map((todo) => (
//           <li className="list-group-item" key={todo.id}>
//             <button
//               className="btn btn-danger float-end"
//               onClick={() => deleteTodo(todo.id)}
//             >
//               Remove
//             </button>
//             <button
//               onClick={() => fetchTodoById(todo.id)}
//               className="btn btn-warning me-2 float-end" >
//               Edit
//             </button>
//             {todo.title}
//             {/* <hr />
//             Task ID: {todo.id} */}
//           </li>
//         ))}
//       </ul>
//       <h2>Update item title/Description/Complete</h2>
//       <input
//         className="form-control"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//       />
//       <a
//         href={`http://localhost:4000/a5/todos/${id}/title/${title}`}
//         className="btn btn-primary"
//       >
//         Update Todo Title
//       </a>

//       <input
//         className="form-control"
//         value={description}
//         onChange={(e) => setDescription(e.target.value)}
//       />
//       <a
//         href={`http://localhost:4000/a5/todos/${id}/description/${description}`}
//         className="btn btn-primary"
//       >
//         Update Todo Description
//       </a>
//       <div>
//         <input
//           onChange={(e) => setTodo({
//             ...todo, completed: e.target.checked
//           })}
//           value={false}
//           checked={todo.completed}
//           type="checkbox"
//         /></div>
//       <a
//         href={`http://localhost:4000/a5/todos/${id}/completed/${todo.completed !== undefined ? todo.completed : false}`}
//         className="btn btn-primary"
//       >
//         Update Todo Complete
//       </a>


//       <h2>Fetch item by id</h2>
//       <input
//         className="form-control"
//         value={id}
//         onChange={(e) => setTodo({ ...todo, id: e.target.value })}
//       />

//       <input
//         className="form-control"
//         value={id}
//         onChange={(e) => setId(e.target.value)}
//       />
//       <a
//         href={`http://localhost:4000/a5/todos/${id}`}
//         className="btn btn-primary"
//       >
//         Fetch Todo {id}
//       </a>
//       <h2>Fetch Array</h2>
//       <a href="http://localhost:4000/a5/todos" className="btn btn-primary">
//         Fetch Todos
//       </a>
//     </div>
//   );
// }

// export default WorkingWithArrays;
