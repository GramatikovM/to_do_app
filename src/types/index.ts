import { MouseEventHandler } from "react";

export type Button = {
  text: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  isRed?: boolean;
  className?: string;
};

export type NoteData = {
  id?: string;
  setNotes?: React.Dispatch<unknown>;
  title: string;
  description: string;
};

export type PaginationProps = {
  nPages: number;
  currentPage: number;
  setCurrentPage: React.Dispatch<number>;
};
