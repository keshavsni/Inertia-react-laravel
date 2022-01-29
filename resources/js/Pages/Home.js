import React from "react";
import { Inertia } from '@inertiajs/inertia';
import { useForm } from '@inertiajs/inertia-react';

const Home = () => {

  const { data, setData, errors, post, processing } = useForm({
    name: '',
    email: ''
  });

  function handleSubmit(e) {
    e.preventDefault();
    post(route('store.name'));
  }

  return (


    <div class="container">
      <h2>Create User</h2>
      <form onSubmit={handleSubmit}>
        <div class="form-group">
          <label for="pwd">Name:</label>
          <input type="text" class="form-control" id="name" placeholder="Enter Name" name="name" onChange={e => setData('name', e.target.value)} />
            {errors.name && <div style={{color:"red"}}>{errors.name}</div>}
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" class="form-control" id="email" onChange={e => setData('email', e.target.value)} placeholder="Enter email" name="email"/>
            {errors.email && <div style={{color:"red"}}>{errors.email}</div>}
        </div>

        <button type="submit" class="btn btn-default" disabled={processing}>Submit</button>
      </form>
    </div>
  );
};

export default Home;