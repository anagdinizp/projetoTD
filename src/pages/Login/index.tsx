import { FormEvent, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { authenticate } from "../../authorizations/Auth";
import { Button } from "../../components/Button";
import { Input, InputPassword } from "../../components/Input";
import { Logo } from "../../components/Logo/Logo";
import { useToast } from "../../components/Toast";
import {
  ContainerLogin,
  ContainerLoginForm,
  ContainerSlogan,
  DogSide,
  FormSide,
  InputTittle,
  LoginAnchor,
  LoginForm,
  LoginSpan,
  LoginTittle,
  SloganSubtittle,
  SloganTittle,
} from "./style";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { showToast } = useToast();

  const enterAccount = async (event: FormEvent) => {}
    //event.preventDefault();
    //if (!!email && !!password) {
      //UserApi.login({ email, password })
      //.then((res: { data: { token: any } }) => {
      //const { token } = res.data;
      //authenticate(token);
      //navigate("/inicio");
    //})
      //.catch((error) => {
        //showToast("Houve um problema ao entrar na sua conta!", "red");
      //});
      //} else showToast("Houve um problema ao entrar na sua conta!", "red");
    //}
    return (
      <ContainerLogin>
        <DogSide>
          <ContainerSlogan>
            <SloganTittle>Encontre o par perfeito para o seu pet</SloganTittle>
            <SloganSubtittle>
              Com a nossa ajuda, você vai conseguir encontrar o par perfeito
              para o seu pet e os dois vão conseguir ter vários filhotes
            </SloganSubtittle>
          </ContainerSlogan>
        </DogSide>
        <FormSide>
        <ContainerLoginForm>
            <LoginTittle>Entre na sua conta</LoginTittle>
            <LoginForm
              onSubmit={enterAccount}
            >
              <InputTittle>Email</InputTittle>
              <Input
                styleType={{ theme: "light", size: "s" }}
                placeholder="Digite seu email"
                value={email}
                setState={setEmail}
                type={"email"}
              />
              <InputTittle>Senha</InputTittle>
              <InputPassword
                value={password}
                setState={setPassword}
                type={"password"}
                style={"light"}
                eyeInput={"light"}
              />
              <Button styleButton={{ color: "nude", size: "m" }}>Entrar</Button>
            </LoginForm>
            <LoginSpan>Ainda não tem uma conta?</LoginSpan>
            <LoginAnchor href="/cadastro">Inscreva-se aqui</LoginAnchor>
          </ContainerLoginForm>
        </FormSide>
      </ContainerLogin>
    );
  };
