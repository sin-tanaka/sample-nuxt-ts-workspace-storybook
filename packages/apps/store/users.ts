import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators'
import { User } from 'types'

@Module({
  name: 'users',
  stateFactory: true,
  namespaced: true
})
export default class UsersModule extends VuexModule {
  users: User[] = []

  @Mutation
  setUsers(val: User[]) {
    this.users = val
  }

  @Action
  async fetchUsers() {
    await setTimeout(() => new Promise((resolve) => resolve()), 1000)
    const mockUsers = [
      { name: 'Giorno Giovana', age: 20 },
      { name: 'John Mayer', age: 30 },
      { name: 'Michel Jackson', age: 44440 }
    ]
    this.setUsers(mockUsers)
  }
}
