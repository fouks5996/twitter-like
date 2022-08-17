import { atom } from "jotai";
import Cookies from "js-cookie";
import { atomWithStorage } from "jotai/utils";

export const getToken = atom(Cookies.get("token"));

export const loggedOrnot = atom((get) => {
	get(getToken);
});

export const userName = atom("");
export const userEmail = atom("");
export const userId = atomWithStorage("userid", 0);
export const reducerFunction = atom();
