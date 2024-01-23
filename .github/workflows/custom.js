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
    filterUsers: ["L1nklink"]
  },

  title: "Link's Blog",
  description: "一期一会",
  customDomain: "",
  base: "/",

  slogan: {
    main: "Link players and games.",
    // sub: "造就有温度的编码。"
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
        name: "Resume",
        link: "/cv"
      }
    ],
    headTitle: ["Done is better than perfect."],
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
    extraFooters: [
      // {
      //   title: "",
      //   text: "@ 蜀 ICP 备 19000509 号 - 1",
      //   link: "https://beian.miit.gov.cn/"
      // }
    ],
    pageCount: true
  },

  head: [
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        href: "https://raw.githubusercontent.com/L1nklink/L1nklink.github.io/main/img/user-avatar.png"
      }
    ]
  ]
}

module.exports = mainConfig
