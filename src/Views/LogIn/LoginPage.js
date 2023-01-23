import React from "react";
import FormLogin from "../../components/Forms/FormLogin";
import { BoxLogin, ScreenLogin} from "./LoginStyle";


export default function LoginPage() {
  return (
    <>
    <ScreenLogin>
      <BoxLogin>
        <FormLogin />
      </BoxLogin>
      </ScreenLogin>
    </>
  );
}
