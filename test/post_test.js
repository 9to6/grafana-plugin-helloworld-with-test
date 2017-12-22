import Post from '../src/post'
import axios from 'axios'
import moxios from 'moxios'

describe('The post RESTful API TEST', () => {
	
	beforeEach(() => {
		moxios.install()
	})

	afterEach(() => {
		moxios.uninstall()
	})
	
	it('should equal Stacks on GET', (done) => {
		let ctrl = {
			panel: {
				appName: 'TEST_APP',
				baseURL: 'https://jsonplaceholder.typicode.com'
			},
			$http: axios
		}
		let stackInfo = new StackInfo(ctrl)
		
		moxios.stubRequest(`${ctrl.panel.baseURL}/posts`, {
			status: 200,
			responseText: `[{"id": 1}]`
		})
	
		moxios.stubRequest(`${ctrl.panel.baseURL}/posts/1`, {
			status: 200,
			responseText: `[{"id": 1, "title": "ABC"}]`
		})

		stackInfo.getStackInfo().then(() => {
			expect(stackInfo.firstPost.id).to.equal(1)
			done()
		})
	})
})
