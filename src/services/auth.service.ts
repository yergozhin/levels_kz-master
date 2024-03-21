import { IAuthForm, IAuthResponse } from "../types/auth.types";

import { getAccessToken, removeFromStorage, saveTokenStorage } from './auth-token.service.ts'
import { axiosDefault } from '../api/interceptors.ts'

export const authService = {
	async main(type: 'signin' | 'signup', data: IAuthForm) {
		const response = await axiosDefault.post<IAuthResponse>(
			`/auth/${type}`,
			data
		)
		console.log('I AM HERE', response.data)
		console.log('your token is: ', response.data.token)

		if (response.data.token) saveTokenStorage(response.data.token)

		console.log(getAccessToken())
		return response
	},

	async getNewTokens() {
		const response = await axiosDefault.post<IAuthResponse>(
			'/auth/signin'
		)

		if (response.data.token) saveTokenStorage(response.data.token)

		return response
	},

	async logout() {
		const response = await axiosDefault.post<boolean>('/auth/logout')

		if (response.data) removeFromStorage()

		return response
	}
}
