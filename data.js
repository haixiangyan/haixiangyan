const data = {
  socials: [
    {name: '公众号：【写代码的海怪】', url: './gongzhonghao.gif'},
    {name: '知乎', url: 'https://www.zhihu.com/people/haixiangyan'},
    {name: '掘金', url: 'https://juejin.cn/user/272334614432887'},
    {name: '简书', url: 'https://www.jianshu.com/u/0340be4082b5'},
    {name: 'Medium', url: 'https://medium.com/@haixiang6123'},
  ],
  books: [
    {
      logo: '🃏',
      name: '《Jest 前端测试上车之路》',
      desc: '【开发中...】前端最全的 Jest 上手指南，一个项目贯穿前端测试的暗坑和测试技巧 ',
      url: 'https://github.com/haixiangyan/jest-starter',
      badges: []
    },
    {
      logo: '🐛',
      name: '《坑》',
      desc: '我在开发过程中遇到的坑',
      url: 'https://github.com/haixiangyan/keng',
      badges: []
    },
    {
      logo: '👮',
      name: '《前端 Linter 上手完全指南》',
      desc: '前端最全的关于 Linter 的上手小书',
      url: 'https://github.yanhaixiang.com/linter-guide/',
      badges: ['https://img.shields.io/github/stars/haixiangyan/linter-guide?style=flat-square)']
    },
    {
      logo: '🔥',
      name: '《一天学习一个 npm 轮子，十天后变成轮子哥》',
      desc: '前端进阶必看的造轮子小书',
      url: 'https://github.com/haixiangyan/one-day-one-npm-lib',
      badges: [
        'https://img.shields.io/github/stars/Haixiang6123/one-day-one-npm-lib?style=flat-square',
        'https://img.shields.io/github/forks/haixiangyan/one-day-one-npm-lib?style=flat-square',
      ]
    },
  ],
  projects: [
    {
      logo: '🎧',
      repo: 'ttplayer',
      desc: '千千静听',
      github: 'https://github.com/haixiangyan/ttplayer',
      preview: 'https://github.yanhaixiang.com/ttplayer/',
      badges: ['https://img.shields.io/github/stars/haixiangyan/ttplayer?style=flat-square'],
    },
    {
      logo: '🏠',
      repo: 'wecom-sidebar',
      desc: '企业微信侧边栏开发指南',
      github: 'https://github.com/wecom-sidebar',
      preview: 'https://wecom-sidebar.github.io/',
      badges: ['https://img.shields.io/github/stars/wecom-sidebar?style=flat-square'],
    },
    {
      logo: '🐱',
      repo: 'nest-todo',
      desc: '一个 Nest.js 的练手项目',
      github: 'https://github.com/haixiangyan/nest-todo',
      preview: '',
      badges: ['https://img.shields.io/github/stars/haixiangyan/nest-todo?style=flat-square'],
    },
    {
      logo: '👦',
      repo: 'me',
      desc: '个人主页',
      github: 'https://github.com/haixiangyan/me',
      url: 'https://yanhaixiang.com',
      badges: ['https://img.shields.io/github/stars/haixiangyan/me?style=flat-square'],
    },
    {
      logo: '🎮',
      repo: 'overwatch-ui',
      desc: '守望先锋 UI 库',
      github: 'https://github.com/haixiangyan/overwatch-ui',
      preview: 'https://github.yanhaixiang.com/overwatch-ui-doc/#/',
      badges: [
        'https://img.shields.io/github/stars/haixiangyan/overwatch-ui?style=flat-square',
        'https://img.shields.io/npm/dm/overwatch-ui?style=flat-square',
      ],
    },
    {
      logo: '💅',
      repo: 'codeblock-beautifier',
      desc: '一个用于美化网页代码块的 Chrome 插件',
      github: 'https://github.com/haixiangyan/codeblock-beautifier',
      preview: 'https://chrome.google.com/webstore/detail/code-block-beautifier/gpcjjddhdnilcbddlonlfgdbejfboonn',
      badges: [
        'https://img.shields.io/github/stars/Haixiang6123/codeblock-beautifier?style=flat-square',
        'https://img.shields.io/github/stars/haixiangyan/codeblock-beautifier?style=flat-square',
        'https://img.shields.io/chrome-web-store/stars/gpcjjddhdnilcbddlonlfgdbejfboonn?style=flat-square',
      ],
    },
    {
      logo: '🎸',
      repo: 'guitar-editor',
      desc: '一个在线吉他谱编辑器',
      github: 'https://github.com/haixiangyan/guitar-editor',
      preview: 'https://github.yanhaixiang.com/guitar-editor/#/',
      badges: ['https://img.shields.io/github/stars/haixiangyan/guitar-editor?style=flat-square'],
    },
    {
      logo: '🧾',
      repo: 'weixin-cash',
      desc: '仿微信记账网页版',
      github: 'https://github.com/haixiangyan/weixin-cash',
      preview: 'https://github.yanhaixiang.com/weixin-cash/',
      badges: ['https://img.shields.io/github/stars/haixiangyan/weixin-cash?style=flat-square'],
    },
    {
      logo: '🎨',
      repo: 'sketch-book',
      desc: '迷你小绘板',
      github: 'https://github.com/haixiangyan/sketch-book',
      preview: 'https://github.yanhaixiang.com/sketch-book/',
      badges: ['https://img.shields.io/github/stars/haixiangyan/sketch-book?style=flat-square'],
    },
    {
      logo: '🖕',
      repo: 'wtf-cli',
      desc: '一个查询英文简写/缩写的命令行工具',
      github: 'https://github.com/haixiangyan/wtf-cli',
      preview: 'https://github.yanhaixiang.com/wtf-cli',
      badges: ['https://img.shields.io/github/stars/haixiangyan/wtf-cli?style=flat-square'],
    },
    {
      logo: '🧔🏿',
      repo: 'tenet',
      desc: '一个让你可以反着写代码的 VsCode 插件',
      github: 'https://github.com/haixiangyan/tenet',
      preview: 'https://marketplace.visualstudio.com/items?itemName=HaixiangYan.tenet',
      badges: [
        'https://img.shields.io/github/stars/haixiangyan/tenet?style=flat-square',
        'https://img.shields.io/visual-studio-marketplace/i/HaixiangYan.tenet?style=flat-square',
        'https://img.shields.io/visual-studio-marketplace/stars/HaixiangYan.tenet',
      ],
    },
    {
      logo: '🍌',
      repo: 'banana',
      desc: '一只可爱的香蕉',
      github: 'https://github.com/haixiangyan/banana',
      preview: 'https://github.yanhaixiang.com/banana/',
      badges: [],
    },
    {
      logo: '🐱🐶👩',
      repo: 'cat-dog-lover',
      desc: '做只猫做只狗不做情人',
      github: 'https://github.com/haixiangyan/cat-dog-lover',
      preview: 'https://github.yanhaixiang.com/cat-dog-lover/',
      badges: [],
    },
  ]
}

module.exports = data;
