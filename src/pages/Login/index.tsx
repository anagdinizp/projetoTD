import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authenticate } from "../../authorizations/Auth";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { useToast } from "../../components/Toast";
import UserApi from "../../services/user";
import {
  ContainerTwoSides,
  ContainerLoginForm,
  ContainerSlogan,
  DogSideLogin,
  FormSide,
  LoginAnchor,
  LoginForm,
  LoginSpan,
  LoginTitle,
  SloganSubtitle,
  SloganTitle,
} from "./style";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { showToast } = useToast();

  const enterAccount = async (event: any) => {
    event.preventDefault();
    if ((/\S+@\S+\.\S+/.test(email)) && !!password) {
      UserApi.login({ email, password })
        .then((res: { data: { token: any, id: string; name:string; } }) => {
          const { token } = res.data;
          authenticate(token);
          console.log(token)
          showToast("Conta válida!", "green");
          navigate("/inicio");
        })
    } else showToast("Houve um problema ao entrar na sua conta!", "red");
  };
  return (
    <ContainerTwoSides>
      <DogSideLogin>
        <ContainerSlogan>
          <SloganTitle>Encontre o par perfeito para o seu pet</SloganTitle>
          <SloganSubtitle>
            Com a nossa ajuda, você vai conseguir encontrar o par perfeito para
            o seu pet e os dois vão conseguir ter vários filhotes
          </SloganSubtitle>
        </ContainerSlogan>
      </DogSideLogin>
      <FormSide>
        <ContainerLoginForm>
          <LoginTitle>Entre na sua conta</LoginTitle>
          <LoginForm onSubmit={enterAccount}>
            <Input
              title="Email"
              inputStyle="primary"
              placeholder="Digite seu email"
              value={email}
              setState={setEmail}
            />
            <Input
              title="Senha"
              inputStyle="primary"
              value={password}
              placeholder="Digite sua senha"
              setState={setPassword}
              password
            />
            <Button buttonStyle="primary">Entrar</Button>
          </LoginForm>
          <LoginSpan>Ainda não tem uma conta?</LoginSpan>
          <LoginAnchor href="/cadastro">Inscreva-se aqui</LoginAnchor>
        </ContainerLoginForm>
      </FormSide>
    </ContainerTwoSides>
  );
}
