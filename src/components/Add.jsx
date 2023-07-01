import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Employees from "./Data";
import { v4 as uuid } from "uuid";
import { Link, useNavigate } from "react-router-dom";

function Add() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  let history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const ids = uuid();
    let uniqueId = ids.slice(0, 8);

    let a = name,
      b = age;

    Employees.push({ id: uniqueId, Name: a, Age: b });
    history("/");
  };

  return (
    <div
      style={{
        background: "#f1f8ff",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Form className="p-4 bg-light rounded shadow" style={{ width: "300px" }}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your Name"
            required
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formAge">
          <Form.Label>Age</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your Age"
            required
            onChange={(e) => setAge(e.target.value)}
          />
        </Form.Group>
        <Button
          onClick={handleSubmit}
          type="submit"
          variant="info"
          className="w-100"
        >
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Add;
