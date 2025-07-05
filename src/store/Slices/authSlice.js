import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../helpers/axiosInstance";
import { toast } from "react-toastify";

const initialState = {
    loading: false,
    status: false,
    userData: null,
};

export const createAccount = createAsyncThunk("register",async(data)=>{

    const formData = new FormData();
    if (data.avatar && data.avatar.length > 0) {
      formData.append("avatar", data.avatar[0]);
    }
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("fullname", data.fullname);
    // console.log(formData)

    try {
        const response = await axiosInstance.post("/auth/register", formData);
        // console.log(response.data);
        // toast.success("Registered successfully!!!")
        return response.data;
    } catch (error) {
        const message = error?.response?.data?.error || "Registration failed.";
        toast.success(error?.response?.data?.error)
        // console.log(error?.response?.data?.error);


        // return rejectWithValue({ message });
    }
})

export const verifyEmail = createAsyncThunk("verifyEmail",async(token)=>{
    
    try {
        const response = await axiosInstance.get(`/auth/verify/${token}`);
        console.log(response)
        return response.data.data;
    } catch (error) {
        const message = error?.response?.data?.error || "Registration failed.";
        console.log(message)

        toast.success(error?.response?.data?.error)
        // return rejectWithValue({ message });   
    }
})

export const userLogin = createAsyncThunk("login", async (data) => {
    // console.log(data)
    try {
        const response = await axiosInstance.post("/auth/login", data);
        return response.data.data.user;
    } catch (error) {
        toast.error(error?.response?.data?.error);
        throw error;
    }
});

export const googleLogin = createAsyncThunk("googleLogin", async (data) => {
    // console.log(data)
    try {
        const response = await axiosInstance.post("/auth/login/google", data);
        return response.data.data.user;
    } catch (error) {
        toast.error(error?.response?.data?.error);
        throw error;
    }
});

export const userLogout = createAsyncThunk("logout", async (data) => {
    try {
        const response = await axiosInstance.post("/auth/logout",data);
        toast.success(response.data?.message);
        return response.data;
    } catch (error) {
        toast.error(error?.response?.data?.error);
        throw error;
    }
});

export const logoutAll = createAsyncThunk("logoutAll", async () => {
    try {
        const response = await axiosInstance.post("/auth/logout/all");
        toast.success(response.data?.message);
        return response.data;
    } catch (error) {
        toast.error(error?.response?.data?.error);
        throw error;
    }
});

export const fetchUser = createAsyncThunk("fetchUser",async()=>{
    const response = await axiosInstance.get("/auth/profile");
    return response.data.data;
})




const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(createAccount.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(createAccount.fulfilled, (state) => {
            state.loading = false;
        });
        builder.addCase(verifyEmail.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(verifyEmail.fulfilled, (state, action) => {
            state.loading = false;
        });
        builder.addCase(fetchUser.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchUser.fulfilled, (state, action) => {
            state.loading = false;
            state.status = true;
            state.isLoggedIn = true;
            state.userData = action.payload;
        });
        builder.addCase(fetchUser.rejected, (state) => {
            state.loading = false;
            state.status = false;
            state.isLoggedIn = false;
            state.userData = null;
        });
        builder.addCase(userLogin.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(userLogin.fulfilled, (state, action) => {
            state.loading = false;
            state.status = true;
            state.userData = action.payload;
        });
        builder.addCase(googleLogin.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(googleLogin.fulfilled, (state, action) => {
            state.loading = false;
            state.status = true;
            state.userData = action.payload;
        });
        builder.addCase(userLogout.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(userLogout.fulfilled, (state) => {
            state.loading = false;
            state.status = false;
            state.userData = null;
        });
        builder.addCase(logoutAll.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(logoutAll.fulfilled, (state) => {
            state.loading = false;
            state.status = false;
            state.userData = null;
        });
       
    },
});

// export const { updateUser } = authSlice.actions;

export default authSlice.reducer;