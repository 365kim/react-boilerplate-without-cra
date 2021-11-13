interface Option {
  token: string;
  body: any;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
}

const getOptions = ({ token, body, method }: Option) => {
  return {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: body ? JSON.stringify(body) : null,
    method,
  };
};

export const httpRequest = {
  get: (url: string, options: Option) => fetch(url, getOptions({ ...options })),
  post: (url: string, options: Option) => fetch(url, getOptions({ ...options, method: 'POST' })),
  put: (url: string, options: Option) => fetch(url, getOptions({ ...options, method: 'PUT' })),
  delete: (url: string, options: Option) => fetch(url, getOptions({ ...options, method: 'DELETE' })),
};
