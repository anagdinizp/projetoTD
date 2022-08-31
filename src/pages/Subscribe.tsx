import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { Input, InputPassword } from "../components/Input";
import { useToast } from "../components/Toast";

export function Subscribe() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [locale, setLocale] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [telephone, setTelephone] = useState("");
  const navigate = useNavigate();
  const { showToast } = useToast();

  let user = {
    name: name,
    age: age,
    locale: locale,
    email: email,
    password: password,
  };
  localStorage.setItem("user", JSON.stringify(user));

  const subscription = async (event: FormEvent) => {
    event.preventDefault();

    if (!!name && !!age && !!locale && !!email && !!password && !!telephone)
      navigate("/inicio");
    else showToast("Tem algo errado no seu cadastro!", "red");
  };

  return (
    <div className="md:grid grid-cols-2">
      <div className="hidden md:block visible bg-dogsubscriber bg-cover bg-no-repeat flex-col justify-center items-center" />
      <div className="bg-white-100 bg-cover min-h-screen md:min-h-screen flex flex-col justify-center items-center">
        <div className="bg-white-100 m-auto w-fit h-fit rounded-xl flex flex-col justify-center items-center">
          <strong className="text-black text-3xl mb-4 block text-center">
            Crie a sua conta
          </strong>
          <div className="m-auto p-5">
            <form
              className="flex flex-col gap-2 w-full h-full ml-1 "
              onSubmit={subscription}
            >
              <strong className="text-black text-xl mb-1">Nome</strong>
              <Input
                styleType={{ theme: "light", size: "s" }}
                type={"text"}
                placeholder={"Digite seu nome completo"}
                value={name}
                setState={setName}
              />
              <strong className="text-black text-xl mb-1">Idade</strong>
              <Input
                styleType={{ theme: "light", size: "s" }}
                type={"number"}
                placeholder={"Digite sua data de nascimento"}
                value={age}
                setState={setAge}
              />
              <strong className="text-black text-xl mb-1">Localização</strong>
              <Input
                styleType={{ theme: "light", size: "s" }}
                type={"text"}
                placeholder={"Digite sua cidade e Estado"}
                value={locale}
                setState={setLocale}
              />
              <strong className="text-black text-xl mb-1">Email</strong>
              <Input
                styleType={{ theme: "light", size: "s" }}
                type={"email"}
                placeholder={"Digite seu email"}
                value={email}
                setState={setEmail}
              />
              <strong className="text-black text-xl mb-1">Senha</strong>
              <InputPassword
                value={password}
                setState={setPassword}
                type={"password"}
                style={"light"}
                eyeInput={"light"}
              />
              <strong className="text-black text-xl mb-1">Telefone</strong>
              <Input
                styleType={{ theme: "light", size: "s" }}
                placeholder="(xx) x xxxx-xxxx"
                value={telephone}
                setState={setTelephone}
                type={"number"}
              />
              <Button styleButton={{ color: "nude", size: "m" }}>
                Cadastrar
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
