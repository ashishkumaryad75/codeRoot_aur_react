class Todo {
  id: string;
  text: string;

  constructor(todoText: string) {
    this.text = todoText;
    this.id = Math.floor(Math.random() * 10).toString();
  }
}

export default Todo;
