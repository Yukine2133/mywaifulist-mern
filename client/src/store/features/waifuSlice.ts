import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Define the interface for waifu data
export interface Waifu {
  id: string;
  name: string;
  imageURL: string;
  from: string;
}

interface WaifuState {
  waifus: Waifu[];
  loading: boolean;
  error: string | null;
}

const initialState: WaifuState = {
  waifus: [],
  loading: false,
  error: null,
};

// Async thunk for fetching a single waifu based on ID
// export const fetchSingleWaifu = createAsyncThunk<Waifu, number>(
//   "single-waifu/fetch",
//   async (id) => {
//     const res = await fetch(`/api/waifus/${id}`, {
//       method: "GET",
//     });
//     const data = await res.json();
//     return data;
//   }
// );

// Async thunk for fetching all waifus
export const fetchWaifu = createAsyncThunk<Waifu[]>("waifu/fetch", async () => {
  const res = await fetch("http://localhost:8080/waifus");
  const data = await res.json();
  return data;
});

export const createWaifu = createAsyncThunk<Waifu, Omit<Waifu, "id">>(
  "waifu/create",
  async (waifuData) => {
    try {
      const res = await fetch("http://localhost:8080/waifus", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(waifuData),
      });

      if (!res.ok) {
        throw new Error("Error creating waifu");
      }

      const data = await res.json();
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
);

// export const updateWaifu = createAsyncThunk<
//   Waifu,
//   { id: number; formData: FormData }
// >("waifu/update", async ({ id, formData }) => {
//   try {
//     const res = await fetch(`/api/waifus/${id}/update/`, {
//       method: "PUT",
//       body: formData,
//     });
//     const data = await res.json();
//     return data;
//   } catch (error) {
//     console.error(error);
//     throw error;
//   }
// });

// export const deleteWaifu = createAsyncThunk<Waifu, number>(
//   "waifu/delete",
//   async (id) => {
//     const res = await fetch(`api/waifus/${id}/delete`, {
//       method: "DELETE",
//     });
//     const data = await res.json();
//     return data;
//   }
// );

export const waifuSlice = createSlice({
  name: "waifu",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder

      .addCase(createWaifu.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createWaifu.fulfilled, (state, action) => {
        state.waifus.push(action.payload);
        state.loading = false;
        state.error = null;
      })
      .addCase(createWaifu.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "An error occurred.";
      })
      .addCase(fetchWaifu.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWaifu.fulfilled, (state, action) => {
        state.waifus = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchWaifu.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "An error occurred.";
      });
  },
});

export default waifuSlice.reducer;
