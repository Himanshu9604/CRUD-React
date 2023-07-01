import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Employees from "./Data";
import { v4 as uuid } from "uuid";
import { Link, useNavigate } from "react-router-dom";

function Edit() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [id, setId] = useState("");

  let history = useNavigate();
  let index = Employees.findIndex((e) => e.id === id);

  const handleSubmit = (e) => {
    e.preventDefault();

    let a = Employees[index];
    a.Name = name;
    a.Age = age;

    history("/");
  };

  useEffect(() => {
    setName(localStorage.getItem("Name"));
    setAge(localStorage.getItem("Age"));
    setId(localStorage.getItem("Id"));
  }, []);

  return (
    <div style={{ background: "#f8f9fa", minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Form className="p-4 bg-white rounded shadow" style={{ width: "300px" }}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Control
            type="text"
            placeholder="Enter your Name"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formAge">
          <Form.Control
            type="text"
            placeholder="Enter your Age"
            value={age}
            required
            onChange={(e) => setAge(e.target.value)}
          />
        </Form.Group>
        <Button onClick={handleSubmit} type="submit" variant="primary" className="w-100">
          Update
        </Button>
      </Form>
    </div>
  );
}

export default Edit;
