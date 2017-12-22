export default class Post {
  constructor(ctrl) {
		this.ctrl = ctrl
		this.http = ctrl.$http
		return this
	}
	
	getPosts() {
		return this.http({
        method: 'GET',
        url: `${this.ctrl.panel.baseURL}/posts`
      }).then(response => {
				this.posts = response.data
				console.log(this.posts)
			}).then(() => {
				return this.http({
					method: 'GET',
					url: `${this.ctrl.panel.baseURL}/posts/${this.posts[0].id}`
				})
			}).then(response => {
				this.firstPost = response.data
				console.log(this.firstPost)
			}).catch(err => {
				console.log(err)
			})
	}
}
