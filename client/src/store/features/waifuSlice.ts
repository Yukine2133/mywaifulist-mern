import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Define the interface for waifu data
export interface Waifu {
  _id: string;
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

// create
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

// read
export const fetchWaifu = createAsyncThunk<Waifu[]>("waifu/fetch", async () => {
  const res = await fetch("http://localhost:8080/waifus");
  const data = await res.json();
  return data;
});

// update
export const updateWaifu = createAsyncThunk<
  Waifu,
  { id: string | undefined; updatedData: Partial<Waifu> }
>("waifu/update", async ({ id, updatedData }) => {
  try {
    const res = await fetch(`http://localhost:8080/waifus/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    });

    if (!res.ok) {
      throw new Error("Error updating waifu");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
});

// delete
export const deleteWaifu = createAsyncThunk<Waifu, string>(
  "waifu/delete",
  async (waifuId) => {
    const res = await fetch(`http://localhost:8080/waifus/${waifuId}`, {
      method: "DELETE",
    });
    const data = await res.json();
    return data;
  }
);

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
      })
      .addCase(deleteWaifu.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteWaifu.fulfilled, (state, action) => {
        state.waifus = state.waifus.filter(
          (waifu) => waifu._id !== action.payload._id
        );
        state.loading = false;
        state.error = null;
      })
      .addCase(deleteWaifu.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "An error occurred.";
      })
      .addCase(updateWaifu.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateWaifu.fulfilled, (state, action) => {
        const updatedIndex = state.waifus.findIndex(
          (waifu) => waifu._id === action.payload._id
        );
        if (updatedIndex !== -1) {
          state.waifus[updatedIndex] = action.payload;
        }
        state.loading = false;
        state.error = null;
      })
      .addCase(updateWaifu.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "An error occurred.";
      });
  },
});

export default waifuSlice.reducer;
