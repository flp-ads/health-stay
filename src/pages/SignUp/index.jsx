import Input from "../../components/Global_Input";
import Button from "../../components/Global_Button";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Link } from "react-router-dom";
import { useHistory } from "react-router";

import {
  Container,
  Background,
  Content,
  HeaderContainer,
  MainContainer,
} from "./signup.styles";

import { FiLock, FiUser, FiChevronLeft, FiMail } from "react-icons/fi";

const Login = () => {
  const formSchema = yup.object().shape({
    username: yup.string().required("Preencha este campo"),
    email: yup.string().required('Preencha este campo').email('Email inválido'),
    password: yup.string().required("Preencha este campo"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onFormSubmit = ({ username, password }) => {

  };

  const history = useHistory();

  const handleNavigation = (path) =>  history.push(path)

  return (
    <Container>
      <Background>
        <h1 className="title_bold">Crie sua</h1>
        <h1>conta</h1>
      </Background>

      <MainContainer>
        <HeaderContainer>
          <button
            onClick={() => handleNavigation('/home')}>
            <FiChevronLeft /> return
          </button>

          <h1>Logo</h1>
        </HeaderContainer>

        <Content>
          <form>
            <Input icon={FiUser} placeholder="Usuário" />

            <Input icon={FiMail} placeholder="Email" />

            <Input icon={FiLock} placeholder="Senha" />

            <Input icon={FiLock} placeholder="Confirmar senha" />
          </form>

          <Button
            type='submit'>
              cadastro
          </Button>

          <div className="separator">
            <hr />
            <p>ou</p>
            <hr />
          </div>

          <Button
            isVanilla
            onClick={() => handleNavigation('/login')}>
              login
          </Button>

        </Content>
      </MainContainer>

    </Container>
  );
};

export default Login;
