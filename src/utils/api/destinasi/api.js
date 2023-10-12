import axiosWithConfig from "../axiosWithConfig";

export const getDestinations = async () => {
  try {
    const response = await axiosWithConfig.get("/destinations");

    return response.data;
  } catch (error) {
    throw Error("Failed to get destinations");
  }
};

export const getDetailDestinations = async (id_destination) => {
  try {
    const response = await axiosWithConfig.get(
      "/destinations/" + id_destination
    );

    return response.data;
  } catch (error) {
    throw Error("Failed to get a destination");
  }
};

export const createDestination = async (data) => {
  try {
    const newData = {
      ...data,
      image:
        "https://img.freepik.com/free-photo/temple-gates-lempuyang-luhur-temple-bali-indonesia_335224-363.jpg?w=996&t=st=1696990096~exp=1696990696~hmac=6c0af4a075a91949d144c6038d051d0e95ddf495554ec56a75665fb8145690ee",
    };
    const response = await axiosWithConfig.post("/destinations", newData);

    return response.data;
  } catch (error) {
    throw Error("Failed to create a new destination");
  }
};

export const updateDestination = async (data) => {
  const { id } = data;
  try {
    const newData = {
      ...data,
      image:
        "https://img.freepik.com/free-photo/temple-gates-lempuyang-luhur-temple-bali-indonesia_335224-363.jpg?w=996&t=st=1696990096~exp=1696990696~hmac=6c0af4a075a91949d144c6038d051d0e95ddf495554ec56a75665fb8145690ee",
    };
    const response = await axiosWithConfig.put(`/destinations/${id}`, newData);

    return response.data;
  } catch (error) {
    throw Error("Failed to update a destination");
  }
};

export const deleteDestination = async (id_destination) => {
  try {
    const response = await axiosWithConfig.delete(
      "/destinations/" + id_destination
    );

    return response.data;
  } catch (error) {
    throw Error("Failed to delete a product");
  }
};
