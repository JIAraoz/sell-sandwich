import axios from "axios";
import { useForm } from "react-hook-form";
import Nav from "./Nav";

export default function Form() {
  interface formData {
    name: string;
    price: number;
    image: File | null;
  }


  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<formData>();

  // 👀 Observar el archivo seleccionado
  const selectedImage = watch("image");
  console.log(selectedImage);
  

  const onSubmit = handleSubmit((data) => {
  

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("price", data.price.toString());

    if (data.image) {
      formData.append("image", data.image);
    }

    console.log("Formulario enviado:", formData);

    axios
      .post("https://sell-sandwich-2.onrender.com/products/createProduct", formData)
      .then(({ data }) => {
        console.log("Respuesta del servidor:", data);
        window.location.reload()
      })
      .catch((error) => {
        console.error("Error al enviar el formulario", error);
      });
  });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    console.log("Archivo seleccionado:", file);

    // ✅ Actualiza el valor correctamente
    setValue("image", file, { shouldValidate: true });
  };

  return (
    <div>
      <Nav></Nav>
      <form
        className="flex align-middle items-center flex-col"
        encType="multipart/form-data"
        onSubmit={onSubmit}
      >
        <h3>Crear producto</h3>

        <input
          type="text"
          placeholder="Nombre"
          {...register("name", {
            required: { value: true, message: "El nombre es obligatorio" },
            maxLength: { value: 20, message: "Máximo 20 caracteres" },
          })}
        />
        {errors.name && <span className="text-red-600">{errors.name.message}</span>}

        <input
          type="number"
          placeholder="Precio"
          {...register("price", {
            required: { value: true, message: "El precio es obligatorio" },
            min: { value: 1, message: "El precio debe ser mayor a 0" },
          })}
        />
        {errors.price && <span className="text-red-600">{errors.price.message}</span>}

        <label htmlFor="imagen">Imagen:</label>
        <input type="file" accept="image/*" onChange={handleImageChange} />

   

        {errors.image && <span className="text-red-600">{errors.image.message}</span>}

        <button type="submit">Crear</button>
      </form>
    </div>
  );
}
