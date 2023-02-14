import GlobalStyle from "./styles/global";
import styled from "styled-components";
import Form from "./components/form.js";
import Grid from "./components/grid";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios"

const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  border: solid 1px #f0f0f0;
`;

const Title = styled.h2``;

function App() {
const [users, setUsers] = useState([]);
const [onEdit, setOnEdit] = useState(null);

const getUsers = async () => {
try {
  const res = await axios.get("http://localhost:3001");
  setUsers(res.data.sort((a, b) => (a.nome, b.nome ? 1 : -1)));
  } catch (error) {
    toast.error(error);
  }
  };

  useEffect(() => {
    getUsers();
  }, [setUsers]);

  return (
    <>
    <Container>
      <Title>USUÁRIOS</Title>
      <Form />
      <Grid users={users}/>
    </Container>
    <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />
    <GlobalStyle/>
    </>
  );
}

export default App;
