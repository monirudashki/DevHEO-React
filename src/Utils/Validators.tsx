export const minLength = (
  e: React.ChangeEvent<HTMLInputElement>,
  min: number,
  setter: any,
  formValues: any
) => {
  setter((state: any) => ({
    ...state,
    [e.target.name]: formValues[e.target.name].length < min,
  }));
};

export const emailValidator = (
  e: React.ChangeEvent<HTMLInputElement>,
  setter: any,
  formValues: any
) => {
  const pattern = /^.{3,}@gmail\.(bg|com)$/;

  setter((state: any) => ({
    ...state,
    [e.target.name]: !pattern.test(formValues[e.target.name]),
  }));
};

export const imageUrlValidator = (
  e: React.ChangeEvent<HTMLInputElement>,
  setter: any,
  formValues: any
) => {
  setter((state: any) => ({
    ...state,
    [e.target.name]:
      !formValues.imageUrl.startsWith("http") ||
      !formValues.imageUrl.startsWith("https"),
  }));
};

export const passwordsMatch = (
  e: React.ChangeEvent<HTMLInputElement>,
  setter: any,
  formValues: any
) => {
  setter((state: any) => ({
    ...state,
    [e.target.name]: !(formValues.password === formValues.rePass),
  }));
};

export {};
