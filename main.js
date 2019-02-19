class List {
  constructor() {
    this.data = [];
  }

  add(data) {
    this.data.push(data);
    console.log(this.data);
  }
}
class TodoList extends List {
  constructor() {
    super();

    this.usuario = "Carlos";
  }

  mostraUduario() {
    console.log(this.usuario);
  }
}

var MinhaLista = new TodoList();

document.getElementById("addTodos").onclick = function() {
  MinhaLista.add("Novo todo");
};

MinhaLista.mostraUduario();
