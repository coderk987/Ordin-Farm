import { writable } from "svelte/store";

export const user = writable(null);
export const dbUser = writable(null);
export const tab = writable("home");
