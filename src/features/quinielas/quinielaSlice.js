import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import quinielaService from "./quinielaService";

const initialState = {
  quinielas: [],
  quinielaActiva: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

//Get user quinielas
export const getQuinielas = createAsyncThunk(
  "quinielas/getAll",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await quinielaService.getQuinielas(token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getQuinielaData = createAsyncThunk(
  "quinielas/getOne",
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await quinielaService.getQuinielaData(token, id);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const quinielaSlice = createSlice({
  name: "quiniela",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getQuinielas.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getQuinielas.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.quinielas = action.payload;
      })
      .addCase(getQuinielas.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getQuinielaData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getQuinielaData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.quinielaActiva = action.payload;
      })
      .addCase(getQuinielaData.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = quinielaSlice.actions;
export default quinielaSlice.reducer;
