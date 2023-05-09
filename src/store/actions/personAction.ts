import axios from "@/axios"
import { AppDispatch } from "../store"

export const fetchPerson = (id?: string) => {
	return async (dispath: AppDispatch) => {
		try {
			const response = await axios.get(`person/1`)
			console.log(response.data)
		} catch (e) {
			console.log(e)
		}
	}
}
