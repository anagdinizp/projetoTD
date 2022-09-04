import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { Input, InputPassword } from "../../components/Input";
import { useToast } from "../../components/Toast";
import { EditFormTittle } from "../EditDogProfile/style";
import { ContainerTwoSides, FormSide } from "../Login/style";
import {
  DogSideSubscribe,
  FormSubscribe,
  FormSubscribeContainer,
  SubscribeForm,
  SubscribeTittle,
  WhiteSide,
} from "./style";

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
    <ContainerTwoSides>
      <DogSideSubscribe />
      <WhiteSide>
        <SubscribeForm>
          <SubscribeTittle>Crie a sua conta</SubscribeTittle>
          <FormSubscribeContainer>
            <FormSubscribe onSubmit={subscription}>
              <EditFormTittle>Nome</EditFormTittle>
              <Input
                styleType={{ theme: "light", size: "s" }}
                type={"text"}
                placeholder={"Digite seu nome completo"}
                value={name}
                setState={setName}
              />
              <EditFormTittle>Idade</EditFormTittle>
              <Input
                styleType={{ theme: "light", size: "s" }}
                type={"number"}
                placeholder={"Digite sua data de nascimento"}
                value={age}
                setState={setAge}
              />
              <EditFormTittle>Localização</EditFormTittle>
              <Input
                styleType={{ theme: "light", size: "s" }}
                type={"text"}
                placeholder={"Digite sua cidade e Estado"}
                value={locale}
                setState={setLocale}
              />
              <EditFormTittle>Email</EditFormTittle>
              <Input
                styleType={{ theme: "light", size: "s" }}
                type={"email"}
                placeholder={"Digite seu email"}
                value={email}
                setState={setEmail}
              />
              <EditFormTittle>Senha</EditFormTittle>
              <InputPassword
                value={password}
                setState={setPassword}
                type={"password"}
                style={"light"}
                eyeInput={"light"}
              />
              <EditFormTittle>Telefone</EditFormTittle>
              <Input
                styleType={{ theme: "light", size: "s" }}
                placeholder="(xx) x xxxx-xxxx"
                value={telephone}
                setState={setTelephone}
                type={"number"}
              />
              <Button buttonStyle={"primary"}>Cadastrar</Button>
            </FormSubscribe>
          </FormSubscribeContainer>
        </SubscribeForm>
      </WhiteSide>
    </ContainerTwoSides>
  );
}
