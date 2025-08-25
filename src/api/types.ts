export interface User {
  lamps: number;
  taps: number;
}

export interface RatingItem {
  name: string;
  lamps: number;
}

export interface TapSession {
  timestamps: number[];
}

export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
}