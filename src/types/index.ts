type ApiResponse<T> = {
  status: string;
  code: number;
  data: T;
};

export type ApiError = {
  code: number;
  message: string;
};

export type User = {
  name: string;
  email: string;
};

export type LoginRequest = {
  email: string;
  password: string;
};

export type LoginResponse = {
  user: User;
  token: string;
};

export type RegisterRequest = {
  name: string;
  email: string;
  password: string;
};

export type RegisterResponse = LoginResponse;

// * Contacts

export type NewContact = {
  name: string;
  phone: string;
};

export type EditContact = {
  id: string;
  name: string;
  phone: string;
};

export type Contact = {
  id: string;
  createdAt: string;
  favorite: boolean;
  name: string;
  owner: string;
  phone: string;
};

export type ContactRes = Contact;
export type ContactsListRes = Contact[];
