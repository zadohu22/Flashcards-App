import axios from "axios";

const Authenticate = async (e, email, password, setMsg, navigate) => {
  e.preventDefault();
  try {
    await axios
      .post("http://localhost:5000/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        console.log(res);
      });

    navigate("/home");
  } catch (error) {
    if (error.response) {
      setMsg(error.response.data.msg);
    }
  }
};

export default Authenticate;
