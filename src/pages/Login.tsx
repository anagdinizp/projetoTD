import { FormEvent, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { Input, InputPassword } from "../components/Input";
import { Logo } from "../components/Logo";
import { useToast } from "../components/Toast";
import UserApi from "../services/user";
import { authenticate } from "../authorizations/Auth";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { showToast } = useToast();

  const enterAccount = async (event: FormEvent) => {
    event.preventDefault();
    if (!!email && !!password) {
      UserApi.login({ email, password })
        .then((res: { data: { token: any } }) => {
          const { token } = res.data;
          authenticate(token);
          navigate("/inicio");
        })
        .catch((error) => {
          showToast("Houve um problema ao entrar na sua conta!", "red");
        });
    } else showToast("Houve um problema ao entrar na sua conta!", "red");
  };
  return (
    <div className="md:grid grid-cols-2">
      <div className="hidden md:flex items-center justify-center visible bg-sorrisomdblend bg-cover bg-no-repeat flex-col">
        <div className="flex flex-col">
          <strong className="mb-1 font-bold text-white-100 text-4xl justify-center text-center">
            Encontre o par perfeito para o seu pet
          </strong>
          <span className="ml-[48px] mr-[48px] text-white-100 font-bold justify-center text-justify">
            Com a nossa ajuda, você vai conseguir encontrar o par perfeito para
            o seu pet e os dois vão conseguir ter vários filhotes
          </span>
        </div>
      </div>
      <div className="bg-white  bg-cover min-h-screen md:min-h-screen flex flex-col justify-center items-center justify-items-center">
        <div>
          <Logo width={"180"} height={"180"} style={"flex items-center justify-center ml-6 -mt-6"} />
        </div>
        <div className="bg-white-100 w-[22rem] h-fit rounded-lg flex flex-col justify-center items-center direct p-5">
          <strong className="text-black text-2xl mb-6 block">
            Entre na sua conta
          </strong>
          <form onSubmit={enterAccount} className="flex flex-col gap-2 w-full">
            <strong className="text-black text-xl mb-1">Email</strong>
            <Input
              styleType={{ theme: "light", size: "s" }}
              placeholder="Digite seu email"
              value={email}
              setState={setEmail}
              type={"email"}
            />
            <strong className="text-black text-xl mb-1">Senha</strong>
            <InputPassword
              value={password}
              setState={setPassword}
              type={"password"}
              style={"light"}
              eyeInput={"light"}
            />
            <Button styleButton={{ color: "nude", size: "m" }}>Entrar</Button>
          </form>
          <span className="text-base text-black mt-4">
            Ainda não tem uma conta?
          </span>
          <a
            href="/cadastro"
            className="font-bold mt-2 text-white-900 text-xl"
          >
            Inscreva-se aqui
          </a>
        </div>
      </div>
    </div>
  );
}
