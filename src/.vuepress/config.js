const sidebar = require('./sidebar.js');

const config = {
	title: 'NezukoChan guide',
	description: 'A guide to use NezukoChan#8098.',
	head: [
		['meta', { charset: 'utf-8' }],
		['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],
		['link', { rel: 'icon', href: '/favicon.png' }],
		['meta', { name: 'theme-color', content: '#42b983' }],
		['meta', { name: 'twitter:card', content: 'summary' }],
		['meta', { property: 'og:title', content: 'NezukoChan' }],
		['meta', { property: 'og:description', content: 'A guide to use NezukoChan#8098.' }],
		['meta', { property: 'og:type', content: 'website' }],
		['meta', { property: 'og:url', content: 'https://guide.nezukochan.tech' }],
		['meta', { property: 'og:locale', content: 'en_US' }],
		['meta', { property: 'og:image', content: '/meta-image.png' }],
	],
	plugins: [],
	theme: 'yuu',
	themeConfig: {
		repo: 'nezuchan/guide',
		docsDir: 'guide',
		sidebarDepth: 3,
		editLinks: true,
		lastUpdated: true,
		nav: [
			{
				text: 'Home',
				link: '/',
			},
			{
				text: 'Invite',
				link: 'https://top.gg/bot/616169470293049344/invite/',
			},
			{
				text: 'Vote',
				link: 'https://top.gg/bot/616169470293049344/vote/',
			},
		],
		sidebar,
	},
	configureWebpack: {
		resolve: {
			alias: {
				'@': '../',
			},
		},
	},
};

for (const group of Object.values(config.themeConfig.sidebar)) {
	for (const section of group) {
		if (section.collapsable) continue;
		section.collapsable = false;
	}
}


module.exports = config;
