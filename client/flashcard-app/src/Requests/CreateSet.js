import axios from "axios";

const CreateSet = async (newCardGroupInput, userId, getSets, setMsg) => {
  // setNewcardGroupOverlay(false);
  try {
    await axios.post("http://localhost:5000/addSet", {
      name: newCardGroupInput,
      userId: userId,
    });
    getSets();
  } catch (error) {
    if (error.response) {
      setMsg(error.response.data.msg);
    }
  }
};

export default CreateSet;
