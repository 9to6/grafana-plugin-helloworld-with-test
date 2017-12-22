'use strict';

System.register(['app/plugins/sdk', './post'], function (_export, _context) {
		"use strict";

		var PanelCtrl, Post, _createClass, panelDefaults, PostCtrl;

		function _classCallCheck(instance, Constructor) {
				if (!(instance instanceof Constructor)) {
						throw new TypeError("Cannot call a class as a function");
				}
		}

		function _possibleConstructorReturn(self, call) {
				if (!self) {
						throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				}

				return call && (typeof call === "object" || typeof call === "function") ? call : self;
		}

		function _inherits(subClass, superClass) {
				if (typeof superClass !== "function" && superClass !== null) {
						throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
				}

				subClass.prototype = Object.create(superClass && superClass.prototype, {
						constructor: {
								value: subClass,
								enumerable: false,
								writable: true,
								configurable: true
						}
				});
				if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
		}

		return {
				setters: [function (_appPluginsSdk) {
						PanelCtrl = _appPluginsSdk.PanelCtrl;
				}, function (_post) {
						Post = _post.default;
				}],
				execute: function () {
						_createClass = function () {
								function defineProperties(target, props) {
										for (var i = 0; i < props.length; i++) {
												var descriptor = props[i];
												descriptor.enumerable = descriptor.enumerable || false;
												descriptor.configurable = true;
												if ("value" in descriptor) descriptor.writable = true;
												Object.defineProperty(target, descriptor.key, descriptor);
										}
								}

								return function (Constructor, protoProps, staticProps) {
										if (protoProps) defineProperties(Constructor.prototype, protoProps);
										if (staticProps) defineProperties(Constructor, staticProps);
										return Constructor;
								};
						}();

						panelDefaults = {
								baseURL: 'https://jsonplaceholder.typicode.com',
								updateInterval: 10000
						};

						_export('PostCtrl', PostCtrl = function (_PanelCtrl) {
								_inherits(PostCtrl, _PanelCtrl);

								function PostCtrl($scope, $injector, $http) {
										_classCallCheck(this, PostCtrl);

										var _this = _possibleConstructorReturn(this, (PostCtrl.__proto__ || Object.getPrototypeOf(PostCtrl)).call(this, $scope, $injector));

										_.defaultsDeep(_this.panel, panelDefaults);
										_this.$http = $http;

										_this.events.on('init-edit-mode', _this.onInitEditMode.bind(_this));
										_this.events.on('panel-teardown', _this.onPanelTeardown.bind(_this));
										_this.events.on('panel-initialized', _this.render.bind(_this));
										_this.initData();

										return _this;
								}

								_createClass(PostCtrl, [{
										key: 'onInitEditMode',
										value: function onInitEditMode() {
												console.log('entering edit mode');
												this.addEditorTab('Options', 'public/plugins/' + this.pluginId + '/partials/editor.html', 2);
										}
								}, {
										key: 'onPanelTeardown',
										value: function onPanelTeardown() {
												console.log('teared down');
										}
								}, {
										key: 'initData',
										value: function initData() {
												this.post = new Post(this);
												console.log(this.post);
												this.updateData();
										}
								}, {
										key: 'updateData',
										value: function updateData() {
												this.post.getPosts();
												this.nextTickPromise = this.$timeout(this.updateData.bind(this), this.panel.updateInterval);
												console.log(this.post.posts);
										}
								}, {
										key: 'link',
										value: function link(scope, elem) {
												console.log('link');
												console.log(scope);
												console.log(elem);
										}
								}]);

								return PostCtrl;
						}(PanelCtrl));

						_export('PostCtrl', PostCtrl);

						PostCtrl.templateUrl = 'partials/module.html';
				}
		};
});
//# sourceMappingURL=post_ctrl.js.map
