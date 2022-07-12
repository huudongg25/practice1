import MainLayout from "./layout/mainLayout";
import UserForm from "./components/userForm";
import TodoList from "./components/todoList";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={<MainLayout headerName="Home"></MainLayout>}
          />
          <Route
            path="/todo"
            element={
              <MainLayout headerName="Todo App">
                <TodoList />
              </MainLayout>
            }
          />
          <Route
            path="/user"
            element={
              <MainLayout headerName="User Form">
                <UserForm />
              </MainLayout>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
