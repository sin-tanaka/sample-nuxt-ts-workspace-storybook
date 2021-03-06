import { Store } from 'vuex'
import { initialiseStores } from '@apps/utils/store-accessor'
const initializer = (store: Store<any>) => initialiseStores(store)
export const plugins = [initializer]
export * from '@apps/utils/store-accessor'
