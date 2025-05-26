import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { User } from "../../app/models/user";
import { FieldValues } from "react-hook-form";
import agent from "../../app/api/agent";
import { router } from "../../app/router/Routes";
import { toast } from "react-toastify";

interface AccountState {
  user: User | null;
  error: string | null;
}

const initialState: AccountState = {
  user: null,
  error: null,
};

// 🔐 Login thunk
export const signInUser = createAsyncThunk<User, FieldValues>(
  "auth/login",
  async (data, thunkAPI) => {
    try {
      const user = await agent.Account.login(data);
      localStorage.setItem("user", JSON.stringify(user));
      return user;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.data });
    }
  }
);

// 🌐 Auto-fetch user from localStorage
export const fetchCurrentUser = createAsyncThunk<User | null>(
  "auth/fetchCurrentUser",
  async (_, thunkAPI) => {
    try {
      const userString = localStorage.getItem("user");
      if (userString) {
        const user = JSON.parse(userString) as User;
        return user;
      }
      return null;
    } catch (error) {
      console.error("Error fetching current user:", error);
      return null;
    }
  }
);

// 🔓 Logout thunk
export const logoutUser = createAsyncThunk<void>("auth/logout", async () => {
  try {
    localStorage.removeItem("user");
  } catch (error) {
    console.error("Error logging out user:", error);
  }
});

// 🧠 Main slice
export const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    logOut: (state) => {
      state.user = null;
      state.error = null;
      localStorage.removeItem("user");
      router.navigate("/");
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    // ✅ Explicit login only — show success toast
    builder.addCase(signInUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.error = null;
      toast.success("Sign in successful");
    });

    // ❌ Explicit login failed — show error toast
    builder.addCase(signInUser.rejected, (state, action) => {
      const payload = action.payload as any;
      state.error = payload?.error || "Sign in failed. Please try again";
      toast.error(state.error);
    });

    // ✅ Auto-login — no toast
    builder.addCase(fetchCurrentUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.error = null;
    });

    // ❌ Auto-login failed — silent fail
    builder.addCase(fetchCurrentUser.rejected, (state) => {
      state.error = null;
    });

    // 🔓 Logout success — toast info
    builder.addCase(logoutUser.fulfilled, (state) => {
      state.user = null;
      state.error = null;
      toast.info("Logged out successfully");
    });
  },
});

export const { logOut, clearError } = accountSlice.actions;
