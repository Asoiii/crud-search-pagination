import UpdateForm from "@/app/components/edit-form";
import { getDokterbyId } from "@/lib/data";
import { notFound } from "next/navigation";

const UpdateDokterPage = async ({ params }: { params: { id: string } }) => {
  const id = params.id;
  const dokter = await getDokterbyId(id);

  if (!dokter) {
    notFound();
  }
  // penting ya kita membuat validasi data seperti ini untuk agar tidak ketika di eksekusi

  return (
    <div className="max-w-md mx-auto mt-5">
      <h1 className="text-2xl text-center mb-2">Update Dokter </h1>
      <UpdateForm dokter={dokter} />
    </div>
  );
};

export default UpdateDokterPage;
