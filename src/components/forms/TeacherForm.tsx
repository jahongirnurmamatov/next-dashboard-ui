"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import InputField from "../InputField";
import Image from "next/image";

const schema = z.object({
  username: z
    .string()
    .min(3, { message: "Username must be at least 3 characters" })
    .max(20, { message: "Username must be at most 20 characters long" }),
  email: z.string().email({ message: "Invalid email adress" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" }),
  firstname: z.string().min(1, { message: "First name is required" }),
  lastname: z.string().min(1, { message: "Last name is required" }),
  phone: z.string().min(1, { message: "Phone  is required" }),
  address: z.string().min(1, { message: "Address  is required" }),
  bloodType: z.string().min(1, { message: "BloodType  is required" }),
  birthday: z.date({ message: "Birhtday  is required" }),
  sex: z.enum(["male", "female"], { message: "Sex is required" }),
  img: z.instanceof(File, { message: "Image is required" }),
});

type Inputs = z.infer<typeof schema>;

const TeacherForm = ({
  type,
  data,
}: {
  type: "create" | "update";
  data?: any;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });
  return (
    <form className="flex flex-col gap-8" onSubmit={onSubmit}>
      <h1 className="font-semibold text-xl">Create a new teacher</h1>
      <span className="text-gray-500 font-medium">
        Authentication information
      </span>
      <div className="flex justify-between flex-wrap gap-4">
        <InputField
          label="Username"
          name="username"
          defaultValue={data?.username}
          register={register}
          error={errors.username}
        />
        <InputField
          label="Email"
          name="email"
          defaultValue={data?.email}
          register={register}
          error={errors.email}
        />
        <InputField
          label="Password"
          type="password"
          name="password"
          defaultValue={data?.password}
          register={register}
          error={errors.password}
        />
      </div>
      <p className=" text-gray-400 font-medium">Personal information</p>
      <div className="flex justify-between flex-wrap gap-4">
        <InputField
          label="Firstname"
          name="firstname"
          defaultValue={data?.firstname}
          register={register}
          error={errors.firstname}
        />
        <InputField
          label="Lastname"
          name="lastname"
          defaultValue={data?.lastname}
          register={register}
          error={errors.lastname}
        />
        <InputField
          label="Phone"
          name="phone"
          defaultValue={data?.phone}
          register={register}
          error={errors.phone}
        />
        <InputField
          label="Address"
          name="address"
          defaultValue={data?.address}
          register={register}
          error={errors.address}
        />
        <InputField
          label="BloodType"
          name="bloodType"
          defaultValue={data?.bloodType}
          register={register}
          error={errors.bloodType}
        />
        <InputField
          label="Birthday"
          name="birthday"
          type="date"
          defaultValue={data?.birthday}
          register={register}
          error={errors.birthday}
        />

        <div className="flex flex-col gap-2 w-full md:w-1/4 ">
          <label className="text-xs text-gray-400">Gender</label>
          <select
            {...register("sex")}
            className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
            defaultValue={data?.sex}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        {/* upload button */}
        <div className="flex flex-col gap-2 w-full md:w-1/4 ">
          <label
            className="text-xs text-gray-400 flex items-center gap-2 cursor-pointer"
            htmlFor="img"
          >
            <Image src={"/upload.png"} width={28} height={28} alt="" />
            <span>Upload a photo</span>
          </label>
          <input
            id="img"
            type="file"
            {...register("img")}
            className="hidden"
            defaultValue={data?.img}
          />
        </div>
      </div>
      <button className="bg-blue-400 text-white rounded-md p-2">
        {type === "create" ? "Creat" : "Update"}
      </button>
    </form>
  );
};

export default TeacherForm;
