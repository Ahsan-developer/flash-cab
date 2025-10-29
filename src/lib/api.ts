import axios, { AxiosInstance, AxiosError, InternalAxiosRequestConfig } from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000';

const api: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = sessionStorage.getItem('auth_token') || localStorage.getItem('auth_token');
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error: AxiosError) => {
    if (error.response?.status === 401) {
      sessionStorage.removeItem('auth_token');
      window.location.href = '/admin-login';
    }
    return Promise.reject(error);
  }
);

const apiClient = {
  auth: {
    signUp: (data: { email: string; password: string; fullName?: string }) =>
      api.post('/api/auth/signup', data),
    signIn: (data: { email: string; password: string }) =>
      api.post('/api/login', data),
    signOut: () =>
      api.post('/api/auth/signout'),
    getProfile: () =>
      api.get('/api/auth/profile'),
  },
  bookings: {
    getAll: () =>
      api.get('/api/bookings'),
    updateStatus: (id: string, status: string) =>
      api.put(`/api/bookings/${id}`, { status }),
  },
  invoices: {
    getAll: () =>
      api.get('/api/invoices'),
    updatePaymentStatus: (id: string, status: string) =>
      api.patch(`/api/invoices/${id}/payment-status`, { status }),
  },
  analytics: {
    getDashboard: () =>
      api.get('/api/analytics/bookings'),
  },
  payments: {
    createIntent: (data: { amount: number; currency: string; metadata: Record<string, any> }) =>
      api.post('/api/payments/create-intent', data),
    verifySession: (sessionId: string) =>
      api.get(`/api/payments/verify-session/${sessionId}`),
  },
};

export { api, apiClient };
