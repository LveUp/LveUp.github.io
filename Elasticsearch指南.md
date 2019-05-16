### Elasticsearch指南
* 官网：https://www.elastic.co/
* 开发工具：
	* 界面管理器
		* elasticsearch-head
			* https://github.com/mobz/elasticsearch-head
	* 本地服务端
		* https://www.elastic.co/downloads/elasticsearch
		* 允许跨域访问
			* 在/config/elasticsearch.yml中添加：http.cors.enabled: true 和 http.cors.allow-origin: "*"
	* 客户端：
		* elasticsearch.js
			* 下载地址：https://www.npmjs.com/package/elasticsearch
			* 教程：https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/index.html
		* egg-elasticsearch.js，非推荐
			* https://github.com/brucewar/egg-elasticsearch
* 使用教程
	* Elasticsearch: 权威指南
		* https://www.elastic.co/guide/cn/elasticsearch/guide/current/index.html
	* 阿里云Elasticsearch
		* https://help.aliyun.com/product/57736.html?spm=a2c4g.11186623.6.540.72931add0JpKXQ
