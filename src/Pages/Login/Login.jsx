import { useState } from "react";
import { useLoginStore } from "./useLoginStore";
import useFlashMessageStore from "../../Components/FlashMessages/useFlashMessageStore";
import { useNavigate } from "react-router-dom";
import { Page } from "../../Components/Layout/Page";
import { Styled_Form } from "../../Styles/Form_Styled";
import { Button_Styled } from "../../Styles/Button_Styled";
import { Input_Styled } from "../../Styles/Input_Styled";
import { LoginPage } from "./LoginPage.Styled";

const Login = () => {
  const { setLoggedIn, loggedIn } = useLoginStore();
  const { setFlashMessage } = useFlashMessageStore();
  const navigate = useNavigate();

  console.log(loggedIn);

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleChange = (evt) => {
    const value = evt.target.value;
    setUser({
      ...user,
      [evt.target.name]: value,
    });
  };

  const LogMeIn = (e) => {
    e.preventDefault();

    const endPoint = "https://api.mediehuset.net/token";
    const username = user.username;
    const password = user.password;
    const data = { username, password };

    fetch(endPoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "Ok") {
          setFlashMessage("Velkommen");
          data.user.user_id = data.user_id;
          setLoggedIn(true, data.user, data.username, data.access_token);
        } else {
          setFlashMessage("Ingen brugere med disse kriterier");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return loggedIn ? (
    navigate("/")
  ) : (
    <LoginPage>
      <header>
        <h1>Log ind</h1>
        <h2>Indtast brugernavn og adgangskode for at logge på</h2>
      </header>

      <Styled_Form onSubmit={LogMeIn}>
        <label>Brugernavn:</label>
        <Input_Styled type="text" name="username" onChange={(e) => handleChange(e)} />
        <label>Adgangskode:</label>
        <Input_Styled type="password" name="password" onChange={(e) => handleChange(e)} />
        <Button_Styled>Log ind</Button_Styled>
      </Styled_Form>
    </LoginPage>
  );
};

export default Login;
