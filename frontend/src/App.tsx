import { useState } from "react";

interface FormInputProps {
  name: string;
  type?: string;
  callback: (value: string) => void;
  id: string;
}

function FormInput(props: FormInputProps) {
  return (
    <div className="flex flex-col ">
      <label htmlFor={props.id}>{props.name}</label>
      <input
        className=" outline-0 rounded-md  text-sm p-2"
        onChange={(e) => {
          props.callback(e.target.value);
        }}
        type={props.type ?? "text"} //retorna text se o valor for undefined
        id={props.id}
      />
    </div>
  );
}

function App() {
  const [usuario, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function handleSubmitButton() {
    fetch("http://localhost:3000/register", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ nome: usuario, email, senha }),
    });
  }

  return (
    <div className="flex flex-col items-center justify-center sm:h-[500px] h-[450px] sm:w-[350px] w-[270px] backdrop-blur-sm bg-white/30 drop-shadow-lg rounded-[1rem] gap-6">
      <h1 className=" text-center text-[1.3rem] ">Preencha o formulario</h1>
      <FormInput name="Usuario" id="usuario" callback={setUser} />
      <FormInput name="Email" id="email" callback={setEmail} />
      <FormInput name="Senha" id="senha" callback={setSenha} type="password" />
      <button
        className=" border border-black p-2 rounded-md"
        onClick={handleSubmitButton}
      >
        Enviar
      </button>
    </div>
  );
}
export default App;
