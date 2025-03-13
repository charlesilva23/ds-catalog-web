


export interface AuthState {
    isAuthenticated: boolean,
    authenticate: (data: { accessToken: string, refreshToken: string }) => void,
    checkAuthentication: () => void,
    logout: () => void,
    refreshToken: () => Promise<void>
}

export const useAuth = create<AuthState>((set) => ({
    isAuthenticated: false,
    authenticate: (data) => {
        setCookie('@dsCatalog:accessToken', data.accessToken, 30)
        setCookie('@dsCatalog:refreshToken', data.refreshToken, 7)
        api.defaults.Authorization = `Bearer ${data.accessToken}`
        set({ isAuthenticated: true })
    },

    checkAuthentication: () => {
        const accessToken = getCookie('@dsCatalog:accessToken')
        api.defaults.Authorization = `Bearer ${accessToken}`
    }


}))