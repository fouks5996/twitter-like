import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import Cookies from "js-cookie";

// To know if user is logged or not
export const getToken = atom(Cookies.get("token"));

// Instance of user infos to change dynamically username and email in edit profile
export const userName = atom("");
export const userEmail = atom("");

// To get  current_userId everywhere in the app
export const userId = atomWithStorage("userid", 0);
