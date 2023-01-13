import axios from "axios";
import jwt_decode from "jwt-decode";

const RefreshToken = async (setToken, setExpire, setUserId, navigate) => {
  try {
    const response = await axios.get("http://localhost:5000/token");
    setToken(response.data.accessToken);
    const decoded = jwt_decode(response.data.accessToken);
    setExpire(decoded.exp);
    setUserId(decoded.userId);
  } catch (error) {
    if (error.response) {
      navigate("/");
    }
  }
};

export default RefreshToken;
