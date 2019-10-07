
import { create, persist } from 'mobx-persist';
import { observable } from 'mobx'

class UIStore {
    @observable rehydrated: boolean = false;
}
const uiStore = new UIStore();

const hydrate = create({
    storage: require("localforage")
});
hydrate("authStore", uiStore).then(() => {
    uiStore.rehydrated = true;
}).catch((error) => {
    console.error(error);
});


export { uiStore }