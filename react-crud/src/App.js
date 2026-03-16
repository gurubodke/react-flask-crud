import React, { useState, useEffect } from "react";
import axios from "axios";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import {
  Container,
  TextField,
  Button,
  Typography,
  Card,
  CardContent,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody
} from "@mui/material";

const API = "http://localhost:5000/users";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
});

function App() {

  const [users, setUsers] = useState([]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });

  // READ USERS
  const getUsers = () => {
    axios.get(API).then(res => {
      setUsers(res.data);
    });
  };

  useEffect(() => {
    getUsers();
  }, []);

  // CREATE USER
  const onSubmit = (data) => {

    axios.post(API, data)
      .then(() => {
        getUsers();
        reset(); // clear form
      })
      .catch(err => {
        alert(err.response?.data?.error || "Error occurred");
      });
  };

  // DELETE USER
  const deleteUser = (id) => {
    axios.delete(`${API}/${id}`)
      .then(() => {
        getUsers();
      });
  };

  return (
    <Container maxWidth="md">

      <Typography variant="h4" sx={{ mt: 4 }}>
        User Management
      </Typography>

      <Card sx={{ mt: 3 }}>
        <CardContent>

          <form onSubmit={handleSubmit(onSubmit)}>

            <TextField
              label="Name"
              fullWidth
              margin="normal"
              {...register("name")}
              error={!!errors.name}
              helperText={errors.name?.message}
            />

            <TextField
              label="Email"
              fullWidth
              margin="normal"
              {...register("email")}
              error={!!errors.email}
              helperText={errors.email?.message}
            />

            <Button
              type="submit"
              variant="contained"
              sx={{ mt: 2 }}
            >
              Add User
            </Button>

          </form>

        </CardContent>
      </Card>

      <Table sx={{ mt: 4 }}>

        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>

          {users.map(user => (
            <TableRow key={user.id}>

              <TableCell>{user.id}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>

              <TableCell>
                <Button
                  color="error"
                  onClick={() => deleteUser(user.id)}
                >
                  Delete
                </Button>
              </TableCell>

            </TableRow>
          ))}

        </TableBody>

      </Table>

    </Container>
  );
}

export default App;