import { create, persist } from 'mobx-persist';
import { observable } from 'mobx'

class AuthStore {
    @persist @observable authToken: string = "";
    @persist @observable email: string = "";
    @observable qrCodeUrl: string = "";
    @observable rehydrated: boolean = false;
}
const authStore = new AuthStore();

const hydrate = create({
    storage: require("localforage")
});
hydrate("authStore", authStore).then(() => {
    authStore.rehydrated = true;
    console.error(666, authStore.authToken);
}).catch((error) => {
    console.error(error);
});


export { authStore }