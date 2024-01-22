const Todos = require("../models/todos");

exports.postAddTodos = async (req, res, next) => {
  const Todo = new Todos({
    name:req.body.name,
    description: req.body.description,
    status:req.body.status
  });
  await Todo
    .save()
    .then((todos) => {
      res.status(201).json({ todo:todos });
    })
    .catch((err) => console.log(err));

};

exports.getTodos = async (req, res, next) => {
  await Todos.find()
    .then((todos) => {
      res.status(200).json({ todo: todos });
    })
    .catch((err) => res.status(500).json({ error: err }));
};

exports.deleteTodos = async (req, res, next) => {
  const todoId = req.params.id;
  await Todos.deleteOne({_id: todoId } )
    .then(() => {
      res.sendStatus(200);
    })
    .catch((err) => res.status(500).json(err));
};

exports.postTodosDone = async (req, res, next) => {
const Todo = new Todos({
    name:req.body.name,
    description: req.body.description,
    status:"done"
});
  await Todo.save()
    .then((todos) => {
      res.status(200).json({ todo: todos });
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
};

