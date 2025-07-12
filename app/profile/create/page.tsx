import React from 'react';

const createProfileAction = async (formData: FormData) => {
  "use server"
  console.log(formData);
  const firstName = formData.get("firstName") as string;
  console.log(firstName);
}

const CreateProfile = () => {
  return <section>
    <h1 className="text-2xl font-semibold mb-8 capitalize">New User</h1>
    <div className="border p-8 rounded-md max-w-lg">
      <form action={createProfileAction}>
      </form>
    </div>
  </section>;
};

export default CreateProfile;