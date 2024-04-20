import { useState } from "react";

const useForm = (initial = "") => {
  const [inputs, setInputs] = useState(initial);

  const updateForm = (e) => {
    let { value, name } = e.target;
    setInputs({
      // Copy the existing state
      ...inputs,
      [name]: value,
    });
  };

  const resetForm = () => {
    setInputs(initial);
  };

  // Return the things we want to surface from this custom hook
  return {
    inputs,
    resetForm,
    updateForm,
  };
};

export default useForm;
