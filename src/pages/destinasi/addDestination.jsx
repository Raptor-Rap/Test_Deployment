import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Input, TextArea } from "../../components/input";
import Layout from "../../components/layout";
import Button from "../../components/button";
import Swal from "../../utils/swal";
import {
  createDestination,
  deleteDestination,
  getDestinations,
  updateDestination,
} from "../../utils/api/destinasi/api";

const MAX_FILE_SIZE = 500000;
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

export const schema = z.object({
  id: z.string().optional(),
  title: z.string().min(1, { message: "Please enter a valid title" }),
  image: z
    .any()
    .refine(
      (files) => files?.[0]?.size <= MAX_FILE_SIZE,
      `Max image size is 5MB.`
    )
    .refine(
      (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      "Only .jpg, .jpeg, .png and .webp formats are supported."
    ),
  description: z
    .string()
    .min(1, { message: "Please enter a valid description" }),
  price: z.number().min(1, { message: "Please enter a valid price" }),
});

export default function AddDestination() {
  const [selectedId, setSelectedId] = useState("");
  const [destination, setDestination] = useState([]);

  const {
    reset,
    setValue,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      price: 0,
    },
  });

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const result = await getDestinations();
      setDestination(result);
    } catch (error) {
      console.log(error.toString());
    }
  }

  async function onSubmit(data) {
    try {
      await createDestination(data);
      Swal.fire({
        title: "Success",
        text: "Successfully created a new destination",
        showCancelButton: false,
      });
      reset();
      fetchData();
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: error.message,
        showCancelButton: false,
      });
    }
  }

  async function onSubmitEdit(data) {
    try {
      await updateDestination({ ...data, id: selectedId });
      Swal.fire({
        title: "Success",
        text: "Successfully updated the destination",
        showCancelButton: false,
      });
      setSelectedId("");
      reset();
      fetchData();
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: error.message,
        showCancelButton: false,
      });
    }
  }

  function onClickEdit(data) {
    setSelectedId(data.id);
    setValue("title", data.title);
    setValue("image", data.image);
    setValue("description", data.description);
    setValue("price", data.price);
  }

  async function onClickDelete(id_destinasi) {
    try {
      await deleteDestination(id_destinasi);
      Swal.fire({
        title: "Success",
        text: "Successfully deleted the destination",
        showCancelButton: false,
      });
      fetchData();
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: error.message,
        showCancelButton: false,
      });
    }
  }

  return (
    <Layout>
      <div className="add-destination">
        <div className="destination min-vh-100">
          <form
            onSubmit={handleSubmit(selectedId == "" ? onSubmit : onSubmitEdit)}
            aria-label="destination-form"
          >
            <Input
              id="input-title-name"
              aria-label="input-title-name"
              label="Destination Title"
              name="title"
              register={register}
              error={errors.title?.message}
            />
            <Input
              id="input-destination-image"
              aria-label="input-destination-image"
              label="Destination Image"
              name="image"
              type="file"
              register={register}
              error={errors.image?.message}
            />
            <TextArea
              id="input-destination-description"
              aria-label="input-destination-description"
              label="Destination Description"
              role="input"
              name="description"
              register={register}
              error={errors.description?.message}
            />
            <Input
              id="input-destination-price"
              aria-label="input-destination-price"
              label="Destination Price"
              name="price"
              type="number"
              register={register}
              error={errors.price?.message}
            />
            <Button
              id="btn-submit"
              aria-label="btn-submit"
              label="Submit"
              type="submit"
              disabled={isSubmitting}
            />
          </form>
        </div>
      </div>
    </Layout>
  );
}
