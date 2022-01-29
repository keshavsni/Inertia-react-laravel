import React from 'react';
import { InertiaLink, usePage } from '@inertiajs/inertia-react';


const Users = () => {
  const { users,flash } = usePage().props;
  const {
    data
  } = users;
  return (
    <div className='row'>
        <div className='container'>
        <h1 className="mb-8 text-3xl font-bold">Users</h1>
        <div className="text-right justify-between mb-6">
        <InertiaLink
          className="btn btn-info"
          href={route('users.create')}
        >
          <span>Create</span>
          <span className="hidden md:inline"> User</span>
        </InertiaLink>
        <content>
        {flash.msg && (
          <div class="alert alert-success">{flash.msg}</div>
        )}
      </content>
      </div>
        <table className="w-full whitespace-nowrap table table-hover">
          <thead>
            <tr className="font-bold text-left">
            <th className="px-6 pt-5 pb-4">#</th>
              <th className="px-6 pt-5 pb-4">Name</th>
              <th className="px-6 pt-5 pb-4">Email</th>
            </tr>
          </thead>
          <tbody>
          {users.map(( data) => {
              return (
                <tr
                  key={data.id}
                  className="hover:bg-gray-100 focus-within:bg-gray-100"
                >
                  <td>{data.id}</td>
                  <td className="border-t">
                    <InertiaLink
                      tabIndex="-1"
                      href={route('users.edit', data.id)}
                      className="flex items-center px-6 py-4 focus:text-indigo focus:outline-none"
                    >
                      {data.name}
                    </InertiaLink>
                  </td>
                  <td className="border-t">
                    <InertiaLink
                      tabIndex="-1"
                      href={route('users.edit', data.id)}
                      className="flex items-center px-6 py-4 focus:text-indigo focus:outline-none"
                    >
                      {data.email}
                    </InertiaLink>
                  </td>
                 
                </tr>
              );
            })}
            {users.length === 0 && (
              <tr>
                <td className="px-6 py-4 border-t" colSpan="4">
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
        </div>
      </div>
  );
};


export default Users;
