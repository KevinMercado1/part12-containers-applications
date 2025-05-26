import PropTypes from 'prop-types';

const TodoList = ({ todos, deleteTodo, completeTodo }) => {
  const onClickDelete = (todo) => () => {
    deleteTodo(todo);
  };

  const onClickComplete = (todo) => () => {
    completeTodo(todo);
  };

  const renderTodoItem = (todo) => {
    const doneInfo = (
      <>
        <span>This todo is done</span>
        <span>
          <button onClick={onClickDelete(todo)}> Delete </button>
        </span>
      </>
    );

    const notDoneInfo = (
      <>
        <span>This todo is not done</span>
        <span>
          <button onClick={onClickDelete(todo)}> Delete </button>
          <button onClick={onClickComplete(todo)}> Set as done </button>
        </span>
      </>
    );

    return (
      <div
        key={todo.id}
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          maxWidth: '70%',
          margin: 'auto',
        }}
      >
        <span>{todo.text}</span>
        {todo.done ? doneInfo : notDoneInfo}
      </div>
    );
  };

  return (
    <>
      {todos.length === 0 ? (
        <p>No todos yet!</p>
      ) : (
        todos.map(renderTodoItem).reduce((acc, cur, index) => {
          if (index === 0) {
            return [cur];
          }
          return [...acc, <hr key={`hr-${cur.key}`} />, cur];
        }, [])
      )}
    </>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      done: PropTypes.bool.isRequired,
    })
  ).isRequired,
  deleteTodo: PropTypes.func.isRequired,
  completeTodo: PropTypes.func.isRequired,
};

export default TodoList;
