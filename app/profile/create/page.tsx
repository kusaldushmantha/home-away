import React from 'react';
import FormContainer from "@/components/form/form-container";
import FormInput from "@/components/form/form-input";
import { SubmitButton } from "@/components/form/buttons";

const createProfileAction = async (prevState: unknown, formData: FormData) => {
  "use server"
  console.log(formData);
  const firstName = formData.get("firstName") as string;
  console.log(firstName);
  return { message: "Profile Created" }
}

const CreateProfile = () => {
  return <section>
    <h1 className="text-2xl font-semibold mb-8 capitalize text-center">New User</h1>
    <div className="border p-8 rounded-md w-full md:max-w-5/6 mx-auto">
      <FormContainer action={createProfileAction}>
        <div className="space-y-4 md:grid-cols-2">
          <FormInput label="First Name" name="firstName" type="text" placeholder="John"/>
          <FormInput label="Last Name" name="lastName" type="text" placeholder="Doe"/>
          <FormInput label="Username" name="username" type="text" placeholder="johndoe"/>
        </div>
        <SubmitButton text="Create Profile" className="mt-8"/>
      </FormContainer>
    </div>
  </section>;
};

export default CreateProfile;