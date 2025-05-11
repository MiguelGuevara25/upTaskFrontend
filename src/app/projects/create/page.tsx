"use client";
import ProjectForm from "@/components/projects/ProjectForm";
import { ProjectFormData } from "@/interfaces";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { createProject } from "@/api/ProjectAPI";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";

export default function CreateProject() {
  const router = useRouter();

  const initialValues: ProjectFormData = {
    projectName: "",
    clientName: "",
    description: "",
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: initialValues });

  const { mutate } = useMutation({
    mutationFn: createProject,
    onError: () => {
      toast.error("Error al crear el proyecto");
    },
    onSuccess: (data) => {
      toast.success(data);
      router.push("/");
    },
  });

  const handleForm = (formData: ProjectFormData) => mutate(formData);

  return (
    <>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl font-black">Crear Proyecto</h1>
        <p className="text-2xl font-light text-gray-500 mt-5">
          Llena el siguiente formulario para crear un proyecto
        </p>

        <nav className="my-5">
          <Link
            className="bg-purple-400 hover:bg-purple-500 px-10 py-3 text-white font-bold cursor-pointer text-xl transition-colors"
            href="/"
          >
            Volver a Proyectos
          </Link>
        </nav>

        <form
          onSubmit={handleSubmit(handleForm)}
          className="mt-10 bg-white shadow-lg p-10 rounded-lg"
          noValidate
        >
          <ProjectForm register={register} errors={errors} />

          <input
            type="submit"
            value="Crear Proyecto"
            className="bg-fuchsia-600 w-full p-3 text-white uppercase font-bold hover:bg-fuchsia-700 cursor-pointer transition-colors"
          />
        </form>
      </div>
    </>
  );
}
