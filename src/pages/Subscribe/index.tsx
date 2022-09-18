import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { useToast } from "../../components/Toast";
import { ContainerTwoSides} from "../Login/style";
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
              <Input
                title="Nome"
                inputStyle="primary"
                placeholder={"Digite seu nome completo"}
                value={name}
                setState={setName}
              />
              <Input
                title="Idade"
                inputStyle="primary"
                placeholder={"Digite sua data de nascimento"}
                value={age}
                setState={setAge}
              />
              <Input
                title="Localização"
                inputStyle="primary"
                placeholder={"Digite sua cidade e Estado"}
                value={locale}
                setState={setLocale}
              />
              <Input
                title="Email"
                inputStyle="primary"
                placeholder={"Digite seu email"}
                value={email}
                setState={setEmail}
              />
              <Input
                title="Telefone"
                inputStyle="primary"
                placeholder="(xx) x xxxx-xxxx"
                value={telephone}
                setState={setTelephone}
              />
              <Input
                title="Senha"
                inputStyle="primary"
                value={password}
                setState={setPassword}
                password
              />
              <Button buttonStyle={"primary"}>Cadastrar</Button>
            </FormSubscribe>
          </FormSubscribeContainer>
        </SubscribeForm>
      </WhiteSide>
    </ContainerTwoSides>
  );
}
