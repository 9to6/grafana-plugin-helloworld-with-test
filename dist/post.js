'use strict';

System.register([], function (_export, _context) {
	"use strict";

	var _createClass, Post;

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}

	return {
		setters: [],
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

			Post = function () {
				function Post(ctrl) {
					_classCallCheck(this, Post);

					this.ctrl = ctrl;
					this.http = ctrl.$http;
					return this;
				}

				_createClass(Post, [{
					key: 'getPosts',
					value: function getPosts() {
						var _this = this;

						return this.http({
							method: 'GET',
							url: this.ctrl.panel.baseURL + '/posts'
						}).then(function (response) {
							_this.posts = response.data;
							console.log(_this.posts);
						}).then(function () {
							return _this.http({
								method: 'GET',
								url: _this.ctrl.panel.baseURL + '/posts/' + _this.posts[0].id
							});
						}).then(function (response) {
							_this.firstPost = response.data;
							console.log(_this.firstPost);
						}).catch(function (err) {
							console.log(err);
						});
					}
				}]);

				return Post;
			}();

			_export('default', Post);
		}
	};
});
//# sourceMappingURL=post.js.map
