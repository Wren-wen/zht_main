article 文章文件夹(位于文件夹 public->configuration->article)

article_index.json 索引(位于文件夹 public->configuration->article_index.json)

{
	1: {
		id: 1, 文章唯一标识
		cover: 'cover.png', 展示的封面在图床(位于 public->configuration->image_bed->cover.png)
		title: 'xxx', 文章中文标题
		title_en: 'xxx', 文章英文标题
		timestamp: 12352345, 文章上传的时间戳[可指定]
		tags:{
			1: {
				zh: '公司新闻', 标签的中文展示
				en: 'company news', 标签的英文展示
			}
		}
	}
}

1.json 文章内容(位于文件夹 public->configuration->article->1.json)[文件名只能是数字对应文章id]

{
	id: 1, 文章唯一标识
	cover: 'cover.png', 展示的封面在图床(位于 public->configuration->image_bed->cover.png)
	title: 'xxx', 文章中文标题
	title_en: 'xxx', 文章英文标题
	timestamp: 12352345, 文章上传的时间戳[可指定]
	tags:{
		1: {
			zh: '公司新闻', 标签的中文展示
			en: 'company news', 标签的英文展示
		}
	},
	frame:[ 文章内容布局框架，提供几种基本元素
		{
			type: 1, 元素类型[一段文字]
			txt: 'xxxxxxx', 文字
			txt_en: 'xxxxx', 英文文字
			color: 'red', 可提供css颜色值
			fontSize: '2', 字大小单位px, 在展示端自动/16转rem
			fontWeight: 'normal || bold', 正常或者加粗
			decoration: 0 || 1 ..., 开启则变为有左侧高光线条
		},{
			type: 2, 间距[各组件之间的垂直间距]
			height: '2rem', 间距高
		},{
			type: 3, 图片[图片宽度为满宽高度自动]
			src: 'xxx.png', 图片地址(位于 public->configuration->image_bed->xxx.png)
			href: '/#/product/...', 可设置点击图片转跳的链接[相对路径或http绝对url]
		},{
			type: 4, 视频[不可设置大小]
			src: 'xxx.mp4', 视频地址(位于 public->configuration->image_bed->xxx.mp4)
		},{
			type: 5, 按钮[可设置转跳链接]
			txt: 'xxxxxxx', 文字
			txt_en: 'xxxxx', 英文文字
			color: 'white', 可提供css颜色值
			backgroundColor: 'red', 可提供css背景色值
			href: '/#/product/...', 可设置点击按钮转跳的链接[相对路径或http绝对url]
		},{
			type: 6, 画布容器[可随意布局]
			height: '30rem',
			widget:[ 小组件
				{
					type: 1, 一段文字
					txt: 'xxxxxxx', 文字
					txt_en: 'xxxxx', 英文文字
					color: 'red', 可提供css颜色值
					fontSize: '2', 字大小单位rem
					fontWeight: 'normal || bold', 正常或者加粗
					zIndex: 4,
					top: '5',
					left: '6',
					width: '20', 可指定宽高
					height: '20',
				},{
					type: 2, 图片
					src: 'xxx.png', 图片地址(位于 public->configuration->image_bed->xxx.png)
					href: '/#/product/...', 可设置点击图片转跳的链接[相对路径或http绝对url]
					borderRadius: '5rem',
					zIndex: 4,
					top: '5',
					left: '6',
					width: '20', 可指定宽高
					height: '20',
				},{
					type: 3, 视频
					src: 'xxx.mp4', 视频地址(位于 public->configuration->image_bed->xxx.mp4)
					borderRadius: '5rem',
					zIndex: 4,
					top: '5rem',
					left: '6rem',
					width: '20rem', 可指定宽高
					height: '20rem',
				},{
					type: 4, 按钮[可设置转跳链接]
					txt: 'xxxxxxx', 文字
					txt_en: 'xxxxx', 英文文字
					color: 'white', 可提供css颜色值
					backgroundColor: 'red', 可提供css背景色值
					href: '/#/product/...', 可设置点击按钮转跳的链接[相对路径或http绝对url]
					borderRadius: '5rem',
					zIndex: 4,
					top: '5rem',
					left: '6rem',
					width: '20rem', 可指定宽高
					height: '20rem',
				},
			]
		}
	]
}


picture

picture_index.json

{
	1: {
		id: 1, 图片组唯一标识
		cover: {src:'cover.png'}, 主图
		title: 'xxx', text
		title_en: 'xxx', text
		timestamp: 12352345, 文章上传的时间戳[可指定]
		tags:{
			1: {
				zh: '公司新闻', 标签的中文展示
				en: 'company news', 标签的英文展示
			}
		}
	}
}

1.json 主图组

{
	id: 1, 文
	cover: {src:'cover.png'}, // image第一张自动是主图
	title: 'xxx', 
	title_en: 'xxx', 
	timestamp: 12352345, 
	tags:{
		1: {
			zh: '公司新闻', 标签的中文展示
			en: 'company news', 标签的英文展示
		}
	},
	image:[
		{
			src: '',
		}
	]
}


product

product_index.json



{
	1: {
		id: 1, 
		cover: {src:'cover1.png'}, 
		title: 'xxx',
		title_en: 'xxx',
		timestamp: 12352345,
		path:[
			{
				id: 1, 大树节点id
				zh: '文件夹1',
				en: 'asdf',
			}
		],
	}
}

1.json

{
	id: 1,
	cover: {src:'cover1.png'}, 
	image: [{src:'cover1.png'}], 第一张图片作为封面主图 
	title: 'xxx', 
	title_en: 'xxx', 
	timestamp: 12352345, 
	path:[
		{
			id: 1, 大树节点id
			zh: '文件夹1',
			en: 'asdf',
		}
	],
	tip: [{
		zh: '商品小字单行说明',
		en: '',
	}],
	video: './xxx/',
	table: './xxx/',
	frame:[ 文章内容布局框架，提供几种基本元素
		{
			type: 1, 元素类型[一段文字]
			txt: 'xxxxxxx', 文字
			txt_en: 'xxxxx', 英文文字
			color: 'red', 可提供css颜色值
			fontSize: '2', 字大小单位px, 在展示端自动/16转rem
			fontWeight: 'normal || bold', 正常或者加粗
			decoration: 0 || 1 ..., 开启则变为有左侧高光线条
		},{
			type: 2, 间距[各组件之间的垂直间距]
			height: '2rem', 间距高
		},{
			type: 3, 图片[图片宽度为满宽高度自动]
			src: 'xxx.png', 图片地址(位于 public->configuration->image_bed->xxx.png)
			href: '/#/product/...', 可设置点击图片转跳的链接[相对路径或http绝对url]
		},{
			type: 4, 视频[不可设置大小]
			src: 'xxx.mp4', 视频地址(位于 public->configuration->image_bed->xxx.mp4)
		},{
			type: 5, 按钮[可设置转跳链接]
			txt: 'xxxxxxx', 文字
			txt_en: 'xxxxx', 英文文字
			color: 'white', 可提供css颜色值
			backgroundColor: 'red', 可提供css背景色值
			href: '/#/product/...', 可设置点击按钮转跳的链接[相对路径或http绝对url]
		},{
			type: 6, 画布容器[可随意布局]
			height: '30rem',
			widget:[ 小组件
				{
					type: 1, 一段文字
					txt: 'xxxxxxx', 文字
					txt_en: 'xxxxx', 英文文字
					color: 'red', 可提供css颜色值
					fontSize: '2', 字大小单位rem
					fontWeight: 'normal || bold', 正常或者加粗
					zIndex: 4,
					top: '5',
					left: '6',
					width: '20', 可指定宽高
					height: '20',
				},{
					type: 2, 图片
					src: 'xxx.png', 图片地址(位于 public->configuration->image_bed->xxx.png)
					href: '/#/product/...', 可设置点击图片转跳的链接[相对路径或http绝对url]
					borderRadius: '5rem',
					zIndex: 4,
					top: '5',
					left: '6',
					width: '20', 可指定宽高
					height: '20',
				},{
					type: 3, 视频
					src: 'xxx.mp4', 视频地址(位于 public->configuration->image_bed->xxx.mp4)
					borderRadius: '5rem',
					zIndex: 4,
					top: '5rem',
					left: '6rem',
					width: '20rem', 可指定宽高
					height: '20rem',
				},{
					type: 4, 按钮[可设置转跳链接]
					txt: 'xxxxxxx', 文字
					txt_en: 'xxxxx', 英文文字
					color: 'white', 可提供css颜色值
					backgroundColor: 'red', 可提供css背景色值
					href: '/#/product/...', 可设置点击按钮转跳的链接[相对路径或http绝对url]
					borderRadius: '5rem',
					zIndex: 4,
					top: '5rem',
					left: '6rem',
					width: '20rem', 可指定宽高
					height: '20rem',
				},
			]
		}
	],
	recommend:[
		{
			src: '',
			href: '',
			zh: '',
			en: '',
		}
	]
}


	表头
视频
参数图
	详情
3dObj
frame
recommend
	产品信息
id
分类路径[]
title
title_en
cover []
tips [{
	zh
	en
}]