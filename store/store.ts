import { acceptHMRUpdate, defineStore } from 'pinia';

export const useStore = defineStore('store', {
    actions: {
        async doRequest(): Promise<void> {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve();
                }, 100);
            });
        },
    },
});

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useStore, import.meta.hot));
}
