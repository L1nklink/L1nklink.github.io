/**
 * @file: custom config
 */

let mainConfig = {
  vssueConfig: {
    owner: "L1nklink",
    repo: "L1nklink.github.io",
    clientId: "2783a4b752f56c0ed912",
    clientSecret: "c8d9116fcade901567ff34aa1fb09216731683a3"
  },

  repoConfig: {
    owner: "L1nklink",
    repo: "L1nklink.github.io",
    pushBranch: "main",
    email: "327360102@qq.com",
    filterUsers: []
  },

  title: "Link's Blog",
  description: "一期一会",
  customDomain: "",
  base: "/",

  slogan: {
    main: "有逻辑的灵魂，",
    sub: "造就有温度的编码。"
  },

  themeConfig: {
    nav: [
      {
        name: "首页",
        link: "/"
      },
      {
        name: "Github",
        link: "https://github.com/L1nklink"
      },
      {
        name: "CV",
        link: "/cv.html"
      }
    ],
    headTitle: ["暮春早夏的月亮", "原是情人的月亮，不比秋冬是诗人的月亮"],
    friendLinks: [
          {
              name: "baidu",
              link: "https://baidu.com"
          },
          //   {
          //     name: "ycjgg",
          //     link: "https://ycjgg.github.io"
          //   }
    ],
    // extraFooters: [
    //   {
    //     title: "",
    //     text: "@ 蜀 ICP 备 19000509 号 - 1",
    //     link: "https://beian.miit.gov.cn/"
    //   }
    // ],
    pageCount: true
  },

  head: [
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        href: "https://avatars2.githubusercontent.com/u/16968934?s=460&v=4"
      }
    ]
  ]
}

module.exports = mainConfig
