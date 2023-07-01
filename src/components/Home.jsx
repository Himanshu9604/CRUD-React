import React, { Fragment } from "react";
import { Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import Employees from "./Data";

function Home() {
  let history = useNavigate();

  const handleEdit = (id, age, name) => {
    localStorage.setItem("Name", name);
    localStorage.setItem("Age", age);
    localStorage.setItem("Id", id);
  };

  const handleDelete = (id) => {
    let index = Employees.map(function (e) {
      return e.id;
    }).indexOf(id);

    Employees.splice(index, 1);
    history("/");
  };

  return (
    <Fragment>
      <div className="container mt-5">
        <Table className="table" striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {Employees && Employees.length > 0 ? (
              Employees.map((item) => (
                <tr key={item.id}>
                  <td>{item.Name}</td>
                  <td>{item.Age}</td>
                  <td>
                    <Link to="/edit">
                      <Button
                        variant="primary"
                        onClick={() =>
                          handleEdit(item.id, item.Name, item.Age)
                        }
                      >
                        Edit
                      </Button>
                    </Link>
                    &nbsp;
                    <Button
                      variant="danger"
                      onClick={() => handleDelete(item.id)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3">No data available</td>
              </tr>
            )}
          </tbody>
        </Table>
        <br />
        <Link className="d-grid gap-2" to="/create">
          <Button className="create-button" size="lg">
            Create
          </Button>
        </Link>
      </div>
    </Fragment>
  );
}

export default Home;
