import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import UsersModule from '@apps/store/users'

/* eslint import/no-mutable-exports: 0 */
let usersModule: UsersModule

function initialiseStores(store: Store<any>): void {
  usersModule = getModule(UsersModule, store)
}

export { initialiseStores, usersModule }
