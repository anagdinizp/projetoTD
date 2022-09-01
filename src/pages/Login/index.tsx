import { FormEvent, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { authenticate } from "../../authorizations/Auth";
import { Button } from "../../components/Button";
import { Input, InputPassword } from "../../components/Input";
import { Logo } from "../../components/Logo/Logo";
import { useToast } from "../../components/Toast";
import {
  ContainerSlogan,
  InputTittle,
  LoginAnchor,
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

  const enterAccount = async (event: FormEvent) => {
    event.preventDefault();
    //if (!!email && !!password) {
      //UserApi.login({ email, password })
      // .then((res: { data: { token: any } }) => {
      // const { token } = res.data;
      //authenticate(token);
      //navigate("/inicio");
      //})
      //.catch((error) => {
      //  showToast("Houve um problema ao entrar na sua conta!", "red");
      //});
      //} else showToast("Houve um problema ao entrar na sua conta!", "red");
    //}
    return (
      <div className="md:grid grid-cols-2">
        <div className="hidden md:flex items-center justify-center visible bg-sorrisomdblend bg-cover bg-no-repeat flex-col">
          <ContainerSlogan>
            <SloganTittle>Encontre o par perfeito para o seu pet</SloganTittle>
            <SloganSubtittle>
              Com a nossa ajuda, você vai conseguir encontrar o par perfeito
              para o seu pet e os dois vão conseguir ter vários filhotes
            </SloganSubtittle>
          </ContainerSlogan>
        </div>
        <div className="bg-white bg-cover min-h-screen md:min-h-screen flex flex-col justify-center items-center justify-items-center">
          <div>
            <Logo
              width={"180"}
              height={"180"}
              style={"flex items-center justify-center ml-6 -mt-6"}
            />
          </div>
          <div className="bg-white-100 w-[22rem] h-fit rounded-lg flex flex-col justify-center items-center direct p-5">
            <LoginTittle>Entre na sua conta</LoginTittle>
            <form
              onSubmit={enterAccount}
              className="flex flex-col gap-2 w-full"
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
            </form>
            <LoginSpan>Ainda não tem uma conta?</LoginSpan>
            <LoginAnchor href="/cadastro">Inscreva-se aqui</LoginAnchor>
          </div>
        </div>
      </div>
    );
  };
}
