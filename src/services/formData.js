import { httpAxios } from "../helper/httpHelper";

export async function sendFormData(data) {
  try {
    const result = await httpAxios
      .post("/api/contact", data)
      .then((response) => response.data);
    return result;
  } catch (error) {
    console.log(error.message);
  }
}

export async function subscribe(data) {
  try {
    const result = await httpAxios
      .post("/api/newsletter", { data })
      .then((response) => response.data);
    return result;
  } catch (error) {
    console.log(error.message);
  }
}
