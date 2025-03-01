import React, { FormEvent, useRef, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().min(3, { message: "Name must be atleast 3 charactes" }),
  age: z
    .number({ invalid_type_error: "Age is required" })
    .min(18, { message: "Age must be 18 and over" }),
});

type formData = z.infer<typeof schema>;

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<formData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          {...register("name")}
          id="name"
          type="text"
          className="form-control"
        />
        {errors.name && <p className="text-danger">{errors.name.message}</p>}
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label"></label>
        <input
          {...register("age", { valueAsNumber: true })}
          id="age"
          type="number"
          className="form-control"
        />
        {errors.age && <p className="text-danger">{errors.age.message}</p>}
      </div>
      <button disabled={!isValid} className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

// useState

// const Form = () => {
//   const [person, setPerson] = useState({ name: "", age: "" });
//   const handleSubmit = (event: FormEvent) => {
//     event.preventDefault();
//     console.log(person);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div className="mb-3">
//         <label htmlFor="name" className="form-label">
//           Name
//         </label>
//         <input
//           onChange={(event) =>
//             setPerson({ ...person, name: event.target.value })
//           }
//           value={person.name}
//           id="name"
//           type="text"
//           className="form-control"
//         />
//       </div>
//       <div className="mb-3">
//         <label htmlFor="age" className="form-label"></label>
//         <input
//           onChange={(event) =>
//             setPerson({ ...person, age: event.target.value })
//           }
//           value={person.age}
//           id="age"
//           type="number"
//           className="form-control"
//         />
//       </div>
//       <button className="btn btn-primary" type="submit">
//         Submit
//       </button>
//     </form>
//   );
// };

// Use Ref

// const Form = () => {
//   const nameRef = useRef<HTMLInputElement>(null);
//   const ageRef = useRef<HTMLInputElement>(null);
//   const person = { name: "", age: 0 };

//   const handleSubmit = (event: FormEvent) => {
//     event.preventDefault();
//     if (nameRef.current && ageRef.current !== null) {
//       person.name = nameRef.current.value;
//       person.age = parseInt(ageRef.current.value);
//       console.log(person);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div className="mb-3">
//         <label htmlFor="name" className="form-label">
//           Name
//         </label>
//         <input ref={nameRef} id="name" type="text" className="form-control" />
//       </div>
//       <div className="mb-3">
//         <label htmlFor="age" className="form-label"></label>
//         <input ref={ageRef} id="age" type="number" className="form-control" />
//       </div>
//       <button className="btn btn-primary" type="submit">
//         Submit
//       </button>
//     </form>
//   );
// };

export default Form;
