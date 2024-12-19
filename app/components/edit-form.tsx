"use client";

import { useFormState } from "react-dom";
import { SubmitButton } from "./buttons";
import { updateDokter } from "@/lib/actions";
import type { Dokter } from "@prisma/client";

const UpdateForm = ({ dokter }: { dokter: Dokter }) => {
  const UpdateDokterbyId = updateDokter.bind(null, dokter.id);
  const [state, formAction] = useFormState(UpdateDokterbyId, null);

  return (
    <div>
      <form action={formAction}>
        <div className="mb-5">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-900"
          >
            Full Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Full Name..."
            defaultValue={dokter.name}
          />
          <div id="name-error" aria-live="polite" aria-atomic="true">
            <p className="mt-2 text-sm text-red-500">{state?.Error?.name}</p>
          </div>
        </div>
        <div className="mb-5">
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-900"
          >
            Phone Number
          </label>
          <input
            type="text"
            name="phone"
            id="phone"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Phone Number..."
            defaultValue={dokter.phone}
          />
          <div id="phone-error" aria-live="polite" aria-atomic="true">
            <p className="mt-2 text-sm text-red-500">{state?.Error?.phone}</p>
          </div>
        </div>
        <div className="mb-5">
          <label
            htmlFor="umur"
            className="block text-sm font-medium text-gray-900"
          >
            umur
          </label>
          <input
            type="text"
            name="umur"
            id="umur"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="umur"
            defaultValue={dokter.umur}
          />
          <div id="umur-error" aria-live="polite" aria-atomic="true">
            <p className="mt-2 text-sm text-red-500">{state?.Error?.umur}</p>
          </div>
        </div>
        <div className="mb-5">
          <label
            htmlFor="gender"
            className="block text-sm font-medium text-gray-900"
          >
            gender
          </label>
          <input
            type="text"
            name="gender"
            id="gender"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="gender"
            defaultValue={dokter.gender}
          />
          <div id="gender-error" aria-live="polite" aria-atomic="true">
            <p className="mt-2 text-sm text-red-500">{state?.Error?.gender}</p>
          </div>
        </div>
        <div className="mb-5">
          <label
            htmlFor="Spesialis"
            className="block text-sm font-medium text-gray-900"
          >
            Spesialis
          </label>
          <input
            type="text"
            name="Spesialis"
            id="Spesialis"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Spesialis"
            defaultValue={dokter.Spesialis}
          />
          <div id="Spesialis" aria-live="polite" aria-atomic="true">
            <p className="mt-2 text-sm text-red-500">
              {state?.Error?.Spesialis}
            </p>
          </div>
        </div>
        <div className="mb-5">
          <label
            htmlFor="alamat"
            className="block text-sm font-medium text-gray-900"
          >
            alamat
          </label>
          <input
            type="text"
            name="alamat"
            id="alamatl"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="alamat..."
            defaultValue={dokter.alamat}
          />
          <div id="alamat-error" aria-live="polite" aria-atomic="true">
            <p className="mt-2 text-sm text-red-500">{state?.Error?.alamat}</p>
          </div>
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-900"
          >
            email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="email..."
            defaultValue={dokter.email}
          />
          <div id="email-error" aria-live="polite" aria-atomic="true">
            <p className="mt-2 text-sm text-red-500">{state?.Error?.email}</p>
          </div>
        </div>
        <div id="messege-error" aria-live="polite" aria-atomic="true">
          <p className="mt-2 text-sm text-red-500">{state?.message}</p>
        </div>
        <SubmitButton label="Update" />
      </form>
    </div>
  );
};

export default UpdateForm;
