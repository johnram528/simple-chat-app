import { User } from "./user.interface";

export interface Message {
  id?: string,
  datetime?: string,
  body: string,
  sender: User,
  recipient: User
}