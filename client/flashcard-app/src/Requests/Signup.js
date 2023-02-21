import axios from "axios";

const handleSignUp = async (
  e,
  email,
  password,
  confPassword,
  navigate,
  setMsg,
  msg
) => {
  e.preventDefault();
  try {
    await axios
      .post("http://localhost:5000/users", {
        email: email,
        password: password,
        confPassword: confPassword,
      })
      .then((res) => {
        console.log(res);
      });
    navigate("/login");
  } catch (error) {
    if (error.response) {
      setMsg(error.response.data.msg);
      console.log(msg);
    }
  }
};

export default handleSignUp;
