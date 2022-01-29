import React from "react";
import { Inertia } from '@inertiajs/inertia';
import { useForm, usePage } from '@inertiajs/inertia-react';

const Edit = () => {
    const {user} = usePage().props;
  const { data, setData, errors, post, processing } = useForm({
    name: user.name,
    email: user.email
  });

  function handleSubmit(e) {
    e.preventDefault();
    post(route('update.name',user.id));
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" onChange={e => setData('name', e.target.value)} value={data.name} /><br />
      {errors.name && <div>{errors.name}</div>}
      <input type="text" name="email" onChange={e => setData('email', e.target.value)} value={data.email} />
      {errors.email && <div>{errors.email}</div>}
      <button type="submit" className="" disabled={processing}>Submit</button>
    </form>
  );
};

export default Edit;