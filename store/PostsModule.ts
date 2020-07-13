import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { IPost } from '~/types/main.ts'
import { $axios } from '~/utils/api'

@Module({
  name: 'PostsModule',
  stateFactory: true,
  namespaced: true
})
export default class PostsModule extends VuexModule {
  posts: Array<IPost> = []
  post: IPost = {
    title: '',
    content: '',
    user: ''
  }

  @Mutation
  setPosts(posts: Array<IPost>) {
    this.posts = posts
  }

  @Mutation
  setPost(post: IPost) {
    this.post = post
  }

  get getPosts() {
    return this.posts
  }

  get getPost() {
    return this.post
  }

  @Action({ commit: 'setPosts', rawError: true })
  async loadPosts() {
    const posts = await $axios.$get('/api/posts')
    return posts
  }

  @Action({ commit: 'setPost', rawError: true })
  async loadPost(id: string) {
    const post = await $axios.$get(`/api/posts/${id}`)
    return post
  }

  @Action({ rawError: true })
  async sendPost(payload: any) {
    const post = await $axios.$post('/api/posts', payload)
    return post
  }

  @Action({ rawError: true })
  async updatePost(payload: any) {
    console.log(payload)
    const post = await $axios.$put(`/api/posts/${payload.id}`, payload)
    return post
  }
}
