import { acceptHMRUpdate, defineStore } from 'pinia';

interface LocationResponse {
    status: string
    country: string
    countryCode: string
    region: string
    regionName: string
    city: string
    zip: string
    lat: number
    lon: number
    timezone: string
    isp: string
    org: string
    as: string
    query: string
}

interface State {
    location?: LocationResponse
}

export const useLocation = defineStore('location', {
    state: (): State => ({
        location: undefined,
    }),

    actions: {
        async getLocation() {
            if (!this.location) {
                const response = await $fetch<LocationResponse>('http://ip-api.com/json');

                this.location = response;
            }

            return this.location;
        },
    },
});

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useLocation, import.meta.hot));
}
