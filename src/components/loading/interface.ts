import { ReactNode } from "react";

export interface LoadingItem {
  loading: boolean;
  children: ReactNode;
  customColor?: string;
}
