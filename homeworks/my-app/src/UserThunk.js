import { createAsyncThunk } from "@reduxjs/toolkit";
import { getUsers, getUserById } from "./UserService";

export const fetchUserByIdThunk = createAsyncThunk(
    "users/fetchUserById",
    async (id) => {
        const user = await getUserById(id);
        console.log("user", user);
        return user;
    }
    );

export const fetchUserThunk = createAsyncThunk(
    "users/fetchUser",
    async () => {
        const users = await getUsers();
        return users;
    }
    );