import { Component } from "react";
import {
  Stack,
  Typography,
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
  List,
  ListItem,
} from "@mui/material";

let currIndex = 2;

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = { todoInput: "", todoList: [] };
  }

  calculateRemaining = () => {
    return this.state.todoList.filter((todo) => !todo.done).length;
  };

  handleInputKeyDown = (event) => {
    if (event.key === "Enter") {
      this.setState((prev) => {
        this.remaining++;
        return {
          todoList: [
            ...prev.todoList,
            {
              id: currIndex++,
              todo: prev.todoInput,
              done: false,
            },
          ],
        };
      });
    }
  };

  handleClearCompleted = () => {
    this.setState((prev) => {
      return {
        todoList: prev.todoList.map((todo) => ({ ...todo, done: false })),
      };
    });
  };

  handleMarkAllDone = (e) => {
    this.setState((prev) => {
      return {
        todoList: prev.todoList.map((todo) => ({
          ...todo,
          done: e.target.checked,
        })),
      };
    });
  };

  handleToggleTodo = (checked, todoId) => {
    this.setState((prev) => {
      return {
        todoList: prev.todoList.map((todo) => {
          if (todo.id === todoId) {
            todo.done = checked;
          }
          return todo;
        }),
      };
    });
  };

  render() {
    const remaining = this.calculateRemaining();
    const markAllDoneChecked =
      this.state.todoList.length !== 0 && remaining === 0;
    return (
      <Stack alignItems="center">
        <Stack direction="column" spacing={3}>
          <Typography variant="h3" fontWeight="bold">
            Todos - ReactJs
          </Typography>
          <TextField
            placeholder="Type a todo and hit Enter"
            inputProps={{ sx: { padding: 1 } }}
            value={this.state.todoInput}
            onChange={(event) =>
              this.setState({ todoInput: event.target.value })
            }
            onKeyDown={this.handleInputKeyDown}
          />
          <Stack direction="row" justifyContent="space-between">
            <Typography>{remaining} remaining</Typography>
            <Button
              variant="outlined"
              sx={{ textTransform: "none" }}
              onClick={this.handleClearCompleted}
            >
              Clear Completed Todos
            </Button>
          </Stack>
          <FormControlLabel
            control={
              <Checkbox
                sx={{ paddingLeft: 0, marginLeft: "-3px" }}
                onChange={this.handleMarkAllDone}
                checked={markAllDoneChecked}
              />
            }
            label="Mark All Done"
          />
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          >
            {this.state.todoList.map((todo) => {
              return (
                <ListItem key={todo.id}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        onChange={(e) =>
                          this.handleToggleTodo(e.target.checked, todo.id)
                        }
                      />
                    }
                    label={todo.todo}
                    key={todo.id + "label"}
                    checked={todo.done}
                  />
                </ListItem>
              );
            })}
          </List>
        </Stack>
      </Stack>
    );
  }
}
