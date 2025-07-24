export interface HealthCheckResponse {
  status: {
    code: string;
    message: string;
  };
  healthCheck: {
    uptime: number;
    message: string;
    timestamp: number;
  };
}

export interface IResponse {
  status: string;
  status_code: string;
  data?: any;
  message?: string;
}
