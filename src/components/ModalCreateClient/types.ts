export interface IFormInputProp {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
}

export interface IModalProp {
  onOpen: boolean;
  onClose: () => void;
}

export interface IFormCreateClientProp {
  onFormSuccess: () => void;
  onFormNext: () => void;
}
