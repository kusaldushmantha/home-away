'use client'

import React, { useEffect } from "react";
import { useFormState } from "react-dom";
import { toast } from "sonner"
import { actionFunction } from "@/utils/types"

const initialState = {
  message: '',
}

const FormContainer = ({ action, children }: { action: actionFunction, children: React.ReactNode }) => {
  const [state, formAction] = useFormState(action, initialState);

  useEffect(() => {
    if (state.message) {
      toast(state.message);
    }
  }, [state]);

  return <form action={formAction}>
    {children}
  </form>
}

export default FormContainer