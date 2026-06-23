import axios from "axios";

const API =
  "http://localhost:5000";

export const verifyMission =
  async (
    mission,
    image
  ) => {

    const formData =
      new FormData();

    formData.append(
      "mission",
      mission
    );

    formData.append(
      "image",
      image
    );

    const response =
      await axios.post(
        `${API}/api/missions/verify`,
        formData,
        {
          headers: {
            "Content-Type":
              "multipart/form-data",
          },
        }
      );

    return response.data;
  };