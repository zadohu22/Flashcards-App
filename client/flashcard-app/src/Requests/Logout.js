import axios from "axios";

const Logout = async (navigate) => {
  try {
    await axios.delete("http://localhost:5000/logout");
    navigate("/");
  } catch (error) {
    console.log(error);
  }
};

export default Logout;
