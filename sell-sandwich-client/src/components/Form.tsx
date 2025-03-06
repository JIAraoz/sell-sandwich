/* import axios from "axios";
import {useForm} from "react-hook-form"
export default function Form(){
    interface formData {
        name: string,
        price: Number,
        image: File | null
      }
    
      const {
        register,
        handleSubmit,
        formState:{errors},
        setValue
    
      } = useForm<formData>()
    
      const onSubmit = handleSubmit( (data) =>{
        console.log(data.image);
        const formData = new FormData()
        formData.append("name", data.name)
        formData.append("price", data.price.toString())
        if (data.image) {
            formData.append("image", data.image);
          }

        console.log(formData);
        
          axios.post("http://localhost:3000/products/createProduct", formData )
          .then(({data}) => {
            console.log("se envio " + data);
            
          })
          .catch(error => {
            console.error("Error al enviar el formulario", error);
          });
        
        
      }
    
    
    )

    const handleImageChange = (e : React.ChangeEvent<HTMLInputElement>)=>{
        console.log(e.target.files);
        const file = e.target.files?.[0] || null;
        console.log(file);
        
        setValue("image", file)
      }
        return(
            <div >
                
                <form className="flex align-middle items-center flex-col" encType="multipart/form-data" onSubmit={onSubmit}>
                 <h3>Crear producto</h3>
                 <input type="text" placeholder="Nombre" {...register("name",{
                    required:{
                        value:true,
                        message:"El nombre es obligatorio"
                    },
                    maxLength:{
                        value:20,
                        message:"El nombre no puede ser de mas de 20 caracteres"
                    }
                 })}/>
                 {
                    errors.name && <span className="text-red-600">{String(errors.name.message)}</span>
                 }
                  
                    <input type="number" placeholder="Precio" {
                        ...register("price",{
                            required:{
                                value:true,
                                message:"El precio no puede estar vacio"
                            },
                            min:{
                               value:1,
                               message:"El precio no puede ser 0 o negativo"
                            }
                       })
                    }/>
                    {
                        errors.price && <span className="text-red-600">{String(errors.price.message)}</span>
                    }
                    <label htmlFor="imagen">Imagen:</label>
                    <input type="file" {...register("image",{
                        required:{
                            value:true,
                            message:"Debes seleccionar una imagen" 
                        }
                    })} onChange={
                    handleImageChange
                    }/>
                    {
                        errors.image && <span className="text-red-600">{String(errors.image.message)}</span>
                    }
                 <button type="submit">Crear</button>
                </form>  
            </div>
        )    
} */
        import axios from "axios";
        import { useForm } from "react-hook-form";
        
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
        
          const onSubmit = handleSubmit((data) => {
          
        
            const formData = new FormData();
            formData.append("name", data.name);
            formData.append("price", data.price.toString());
        
            if (data.image) {
              formData.append("image", data.image);
            }
        
            console.log("Formulario enviado:", formData);
        
            axios
              .post("http://localhost:3000/products/createProduct", formData)
              .then(({ data }) => {
                console.log("Respuesta del servidor:", data);
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
        