import {PanelCtrl} from 'app/plugins/sdk';
import Post from './post'

const panelDefaults = {
	baseURL: 'https://jsonplaceholder.typicode.com',
	updateInterval: 10000
}

export class PostCtrl extends PanelCtrl {
  constructor($scope, $injector, $http) {
    super($scope, $injector)
    _.defaultsDeep(this.panel, panelDefaults)
		this.$http = $http

    this.events.on('init-edit-mode', this.onInitEditMode.bind(this))
    this.events.on('panel-teardown', this.onPanelTeardown.bind(this))
    this.events.on('panel-initialized', this.render.bind(this))
		this.initData()

  }

  onInitEditMode() {
		console.log('entering edit mode')
    this.addEditorTab('Options', 'public/plugins/' + this.pluginId + '/partials/editor.html', 2)
  }

  onPanelTeardown() {
		console.log('teared down')
  }

	initData() {
		this.post = new Post(this)
		console.log(this.post)
		this.updateData()
	}
	
	updateData() {
		this.post.getPosts()
    this.nextTickPromise = this.$timeout(this.updateData.bind(this), this.panel.updateInterval);
		console.log(this.post.posts)
	}

  link(scope, elem) {
		console.log('link')
		console.log(scope)
		console.log(elem)
  }

}

PostCtrl.templateUrl = 'partials/module.html';
