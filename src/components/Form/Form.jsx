import { useState } from "react";

const Form = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const [userColor, setUserColor] = useState("border-slate-200");
  const [emailColor, setEmailColor] = useState("border-slate-200");
  const [passwordColor, setPasswordColor] = useState("border-slate-200");
  const [confirmPasswordColor, setConfirmPasswordColor] =
    useState("border-slate-200");

  const validate = (e) => {
    e.preventDefault();

    if (username.length > 8) {
      setUsernameError("");
      setUserColor("border-green-300");
    } else {
      setUsernameError("Username should be 8 letters long!");
      setUserColor("border-red-300");
    }

    if (email.includes("@gmail")) {
      setEmailError("");
      setEmailColor("border-green-300");
    } else {
      setEmailError("Email should have @gmail in it!");
      setEmailColor("border-red-300");
    }

    if (password.length > 8) {
      setPasswordError("");
      setPasswordColor("border-green-300");
    } else {
      setPasswordError("Password should be 8 letters long!");
      setPasswordColor("border-red-300");
    }

    if (password != "" && password == confirmPassword) {
      setConfirmPasswordError("");
      setConfirmPasswordColor("border-green-300");
    } else {
      setConfirmPasswordError("Password is not match!");
      setConfirmPasswordColor("border-red-300");
    }
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen">
        <div className="grid grid-cols-8 justify-items-center bg-white shadow-md rounded-md border border-slate-200 p-4 w-[80%] h-[70vh] items-center">
          <img
            src="/form-pic.svg"
            alt="Form Image"
            className="col-span-4 w-[70%] h-full"
          />
          <form className="col-span-4 flex flex-col gap-4 bg-white shadow-sm border border-slate-200 rounded-md p-2">
            <label className="flex flex-col gap-1">
              <input
                type="text"
                placeholder="Name"
                className={`outline-none border-b ${userColor} py-1 px-3 text-base text-gray-700 font-medium`}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                // style={{ borderColor: userColor }}
              />
              <p className="text-sm font-medium text-red-300">
                {usernameError}
              </p>
            </label>
            <label className="flex flex-col gap-1">
              <input
                type="email"
                placeholder="Email"
                className={`outline-none border-b ${emailColor} py-1 px-3 text-base text-gray-700 font-medium`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ borderColor: emailColor }}
              />
              <p className="text-sm font-medium text-red-300">{emailError}</p>
            </label>
            <label className="flex flex-col gap-1">
              <input
                type="password"
                placeholder="Password"
                className={`outline-none border-b ${passwordColor} py-1 px-3 text-base text-gray-700 font-medium`}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ borderColor: passwordColor }}
              />
              <p className="text-sm font-medium text-red-300">
                {passwordError}
              </p>
            </label>
            <label className="flex flex-col gap-1">
              <input
                type="password"
                placeholder="ConfirmPassword"
                className={`outline-none border-b ${confirmPasswordColor} py-1 px-3 text-base text-gray-700 font-medium`}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                style={{ borderColor: confirmPasswordColor }}
              />
              <p className="text-sm font-medium text-red-300">
                {confirmPasswordError}
              </p>
            </label>

            <button
              className="py-1 px-3 text-base font-medium rounded-md bg-emerald-500 text-white w-full cursor-pointer hover:bg-emerald-600 transition"
              onClick={validate}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
