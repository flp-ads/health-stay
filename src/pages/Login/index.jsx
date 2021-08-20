import Input from "../../components/Global_Input";
import Button from "../../components/Global_Button";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { useHistory } from "react-router";

import {
  Container,
  Background,
  Content,
  HeaderContainer,
  MainContainer,
} from "./login.styles";

import { FiLock, FiUser, FiChevronLeft } from "react-icons/fi";
import { motion } from "framer-motion";

import { useLogin } from "../../providers/User";

import logo from "../../assets/logo_white_bg.svg";

const Login = () => {
  const formSchema = yup.object().shape({
    username: yup.string().required("Preencha este campo"),
    password: yup.string().required("Preencha este campo"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const { userLogin } = useLogin();

  const onFormSubmit = ({ username, password }) => {
    userLogin({ username, password });
  };

  const history = useHistory();

  const handleNavigation = (path) => history.push(path);

  return (
    <Container>
      <Background>
        <h1>Bem-vindo</h1>
        <h1 className="title_bold">de volta</h1>
      </Background>

      <MainContainer>
        <HeaderContainer>
          <button onClick={() => handleNavigation("/")}>
            <FiChevronLeft /> voltar
          </button>

          <h1 className="logo">
            <img src={logo} alt="logo" />
          </h1>
        </HeaderContainer>

        <Content
          as={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <form id="login_form" onSubmit={handleSubmit(onFormSubmit)}>
            <Input
              name="username"
              icon={FiUser}
              placeholder="Usuário"
              register={register}
              error={errors.username?.message}
            />

            <Input
              name="password"
              icon={FiLock}
              placeholder="Senha"
              register={register}
              error={errors.password?.message}
            />
          </form>

          <Button type="submit" form="login_form">
            login
          </Button>

          <div className="separator">
            <hr />
            <p>ou</p>
            <hr />
          </div>

          <Button isVanilla onClick={() => handleNavigation("/signup")}>
            cadastro
          </Button>
        </Content>
      </MainContainer>
    </Container>
  );
};

export default Login;
