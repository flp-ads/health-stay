import Input from '../../components/Global_Input';
import Button from '../../components/Global_Button';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Link } from "react-router-dom";

import { Container, Background, Content } from './styles';

import { FiLock, FiMail } from "react-icons/fi";

const Login = () => {

    const formSchema = yup.object().shape({
        email: yup
            .string()
            .required('E-mail required')
            .email('Invalid e-mail'),
        password: yup
            .string()
            .required('Password required'),
    })

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(formSchema)
    })

    const onFormSubmit = () => {

    }

    return (
        <Container>
            <Background>
                <h1>Bem-vindo</h1>
                <h1 className='title_bold'>de volta</h1>
            </Background>

            <Content>
                <form>
                    <Input
                        icon={FiMail}
                        placeholder='Usuário' />

                    <Input
                        icon={FiLock}
                        placeholder='Senha' />
                </form>

                <Button>
                    login
                </Button>

                <div className='separator'>
                    <hr />
                    <p>ou</p>
                    <hr />
                </div>

                <Button
                    isVanilla>
                    cadastro
                </Button>

            </Content>
        </Container>
    )
}

export default Login
