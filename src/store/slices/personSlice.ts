import { IPerson } from "@/interfaces/person/IPerson"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface ActorState {
	loading: boolean,
	error: string,
	person: IPerson
}

const initialState: ActorState = {
	loading: false,
	error: '',
	person: {}
}
export const personSlice = createSlice({
	name:'actor',
	initialState,
	reducers:{
		fecthing(state) {
			state.loading = true
		},
		fetchSuccess(state, action: PayloadAction<IPerson>) {
			state.loading = false
			state.person = action.payload
		},
		fetchError(state, action: PayloadAction<Error>) {
			state.loading = false
			state.error = action.payload.message
		}
	}
})

export default personSlice.reducer
