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
} from "./signup.styles";

import { FiLock, FiUser, FiChevronLeft, FiMail } from "react-icons/fi";
import { motion } from "framer-motion";
import api from "../../services/api";
import { toast } from "react-toastify";

import logo from "../../assets/logo_white_bg.svg";

const SignUp = () => {
  const formSchema = yup.object().shape({
    username: yup.string().required("Preencha este campo"),
    email: yup.string().required("Preencha este campo").email("Email inválido"),
    password: yup
      .string()
      .required("Preencha este campo")
      .min(6, "Senha deve ter 6 caracteres"),
    pwdConfirm: yup
      .string()
      .required("Preencha este campo")
      .oneOf([yup.ref("password"), null], "Senhas devem ser iguais"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onFormSubmit = ({ username, email, password }) => {
    api
      .post("/users/", {
        username,
        email,
        password,
      })
      .then((_) => {
        toast.success("Conta criada com sucesso!");
        handleNavigation("/login");
      })
      .catch((_) => toast.error("Ops... Algo deu errado"));
  };

  const history = useHistory();

  const handleNavigation = (path) => history.push(path);

  return (
    <Container>
      <Background>
        <h1 className="title_bold">Crie sua</h1>
        <h1>conta</h1>
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
          <form id="signup_form" onSubmit={handleSubmit(onFormSubmit)}>
            <Input
              name="username"
              icon={FiUser}
              placeholder="Usuário"
              register={register}
              error={errors.username?.message}
            />

            <Input
              name="email"
              icon={FiMail}
              placeholder="Email"
              register={register}
              error={errors.email?.message}
            />

            <Input
              name="password"
              icon={FiLock}
              placeholder="Senha"
              register={register}
              error={errors.password?.message}
            />

            <Input
              name="pwdConfirm"
              icon={FiLock}
              placeholder="Confirmar senha"
              register={register}
              error={errors.pwdConfirm?.message}
            />
          </form>

          <Button type="submit" form="signup_form">
            cadastro
          </Button>

          <div className="separator">
            <hr />
            <p>ou</p>
            <hr />
          </div>

          <Button isVanilla onClick={() => handleNavigation("/login")}>
            login
          </Button>
        </Content>
      </MainContainer>
    </Container>
  );
};

export default SignUp;
