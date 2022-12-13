export type TSubmitData = {
  [key: string]: string;
};

export type THistory = {
  from: string | { [key: string]: string };
};

export type TFrom = string | { [key: string]: string } | undefined | null;
