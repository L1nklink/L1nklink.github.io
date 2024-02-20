---
layout: ResumeLayout

content:
  header:
    author: 叶泽南
    contact:
    - 邮箱：znye1996@gmail.com
    # - 主页：L1nklink.github.io
    # - Github：github.com/L1nklink
    # interest: Just Code It
    dob: 1996/08/29
    city: Shanghai, China
  education:
    name: 教育背景
    content:
    # - degree: 硕士
    #   school: 电子科技大学
    #   major: 计算机科学与工程学院，计算机科学专业
    #   time: 2018.09 - 2021.06
    - degree: 学士
      school: 中国科学技术大学
      major: 电子科学与技术系
      time: 2014.08 - 2018.06
#   honor:
#     name: 荣誉奖项
#     content:
#     - name: 研究生二等学业奖学金
#       time: '2019.10'
#     - name: OPPO AI 挑战赛人像分割任务 决赛优秀奖
    #   time: '2019.04'
    # - name: 研究生一等学业奖学金
    #   time: '2018.10'
    # - name: 美国大学生数学建模竞赛 H 奖
    #   time: '2017.02'
  experience:
    name: 工作经历
    content:
    - name: 后端开发工程师 @ 上海瞬已网络科技有限公司
      time: 2021.05 - 至今
      content:
      - 业务CoreNet的控制进程开发工作， 主要包括与平台以及数据转发进程的消息协议设计与实现、基于共享内存的进程主备和数据缓存、线程管理、原始路径树解析、实时路径选择算法、无锁消息队列、数据埋点等模块
      - 业务CoreNet节点的数据转发进程开发工作， 主要包括消息协议解析模块，和一部分转发模块性能调优工作等。
      - 业务CoreNet的核心传输协议的部分开发工作， 主要包括FEC网络编解码模块设计与实现、反馈链路发包参数的调整策略、内存池形式的进程内存管理等。
      - 从头参与了CoreNet开发到上线生产环境的全过程，并完成相关代码的维护和升级工作。对负责的代码，均完成开发、单元测试编写、设计测试用例、跟踪维护、按需求调优和文档记录工作。
     
    - name: 硬件开发工程师 @ 上海鹰觉科技有限公司
      time: 2018.07 - 2019.05
      content:
      - 优化雷达信息采集模块, 实现高速AD采集和以太网通信的基本方法;个人负责AD采集模块的优化、测试和调通；
      - 使用Zlib压缩算法对雷达实时采集数据进行压缩并通过UDP协议传输完整雷达数据。个人负责代码迭代工作；
      - 为满足降低雷达功耗和减少冗余数据采集的需求，设计了可用户自定义的雷达扇区静默模块并测试通过；个人负责FPGA程序编写以及实地安装测试工作
    #    CI/CD、报警管理、服务治理、监控等功能。
    #  - 负责猿辅导基础架构的基建能力建设，为公司内部各个业务项目提供静态文档站的技术方案支持，开发基于Gitlab API 的文档系统。负责猿辅导基础架构的基建能力建设，为公司内部各个业务项目提供静态文档站的技术方案支持，开发基于
    #    Gitlab API 的文档系统。
    # - name: 软件开发实习生 @ 亚马逊北京
    #   time: 2020.07 - 2020.11
    #   content:
    #   - 负责移动端基础架构部存储相关的功能调研、设计和开发，基于微信开源的 MMKV 框架重构亚马逊购物客户端的本地存储机制。
    # - name: 算法开发实习生 @ 腾讯深圳 AI Lab Robotics X 实验室
    #  time: 2019.11 - 2020.06
    #  content:
    #  - 负责设计并开发基于三维重建算法的虚拟现实同步展示系统，使用三维重建算法对现实世界进行实时重建并在 Steam VR 中高效渲染。优化 Elastic
    #    Fusion 三维重建算法，编写 C++ 版本的 Kinect 相机驱动，同时负责 VoxBlox 三维重建算法与 ORB-SLAM 系统对接，使用
    #    C++ 编写高性能 ROS 数据传输接口。
    #  - 负责优化 GPU 到 CPU 之间的数据同步性能，开发实时点云数据流传输以及渲染算法，配合实时动态标定，实现虚拟环境下的机器臂控制操作，并对其实时性、丢包率等性能设计实验进行验证。
    # - name: '前端开发工程师（在校远程兼职）@ 尘微科技 '
    #   time: 2017.12 - 2019.03
    #   content:
    #   - 主要负责小程序首屏和社区动态流页面的开发，协调团队进行需求分析并开发上线的全套流程，在 mp-vue 技术栈下解决高性能 CSS 动效实现、首屏动态布局和
    #     Feed 流长列表优化等技术难点。
    # - name: 前端开发实习生 @ 百度北京
    #   time: 2016.12 - 2017.05
    #   content:
    #   - 参与百度凤巢的广告智能推荐系统的前端页面开发，负责智能词条推荐界面的开发并参与该功能的上线和后续维护工作，使用 React & Redux 构建用户页面。
  coding:
    name: 编程能力
    content:
     - name : 语言：熟练使用C、C#、C++11特性及部分后续新特性，可以使用脚本语言如python、lua完成部分工作的自动化。工作经验以C++为主。
     - name : 数据结构：熟悉常用算法和数据结构(链表、栈、队列、哈希表、二叉树);了解部分数据结构的基本原理（B/B+树、红黑树等);参考DPDK文档亲手实践过无锁数据结构。
     - name : 操作系统：熟悉Linux操作系统及其常见问题定位方法和工具包。熟悉Linux环境下的多进程多线程编程，掌握常用线程间同步与互斥手段，对多线程性能调优有一定经验。
     - name : 网络编程：有一定的网络编程通讯协议设计经验，掌握FEC编码，了解Reed-Solomon编码原理。了解五大IO模型以及常见多路复用技术。
     - name : 其他：了解常见设计模式，有MySQL及Redis使用经验,了解MySQL查询性能优化相关技术。熟练使用vim、gdb、git、cmake、meson等常见工具链
    # - name: github.com/Yidadaa/Learn-uGit
    #   link: https://github.com/Yidadaa/Learn-uGit
    #   info: "(Python) ~ 500 lines"
    #   time: '2021.08'
    #   desc: 使用 Python 实现 git 的基础功能，包括 commit / branch / merge / push / pull 等能力。
    # - name: github.com/Yidadaa/Eye-Tracking-Mouse
    #   link: https://github.com/Yidadaa/Eye-Tracking-Mouse
    #   info: "(Python) ~ 1200 lines"
    #   time: '2021.05'
    #   desc: 用神经网络来估计面部朝向和视线注视方向，从而取代实体鼠标，双手无需离开键盘即可操作任何 GUI 软件。
    # - name: github.com/Yidadaa/Issue-Blog-With-Github-Action
    #   link: https://github.com/Yidadaa/Issue-Blog-With-Github-Action
    #   info: "(Vue / Javascript) ~ 1000 lines"
    #   time: '2020.01'
    #   desc: 基于 VuePress 和 Github Actions 功能构建的免服务器部署、SEO 友好的博客系统。
    # - name: github.com/Yidadaa/Pytorch-Video-Classification
    #   link: https://github.com/Yidadaa/Pytorch-Video-Classification
    #   info: "(Python / Pytorch) ~ 500 lines"
    #   time: '2019.04'
    #   desc: 基于 CNN-RNN 架构的视频动作分类⽹络，在 UCF101 上达到 80% 的准确率。
    # - name: github.com/Yidadaa/Parallel-Programming-On-GPU
    #   link: https://github.com/Yidadaa/Parallel-Programming-On-GPU
    #   info: "(CUDA / C++) ~ 200 lines"
    #   desc: 使用 CUDA 加速 n-body 模拟程序，加速比 ~ 3000
    #   time: '2018.11'
    # - name: github.com/Yidadaa/Captcha-Deep-Learning
    #   link: https://github.com/Yidadaa/Captcha-Deep-Learning
    #   info: "(Python / Keras / Tensorflow) ~ 500 lines"
    #   desc: 端到端的动态验证码识别网络，分别使用 Keras 和 Tensorflow 实现，可以达到 98% 的准确率。
    #   time: '2018.01'
    # - name: github.com/Yidadaa/OPPO-Human-Segmentation
    #   link: https://github.com/Yidadaa/OPPO-Human-Segmentation
    #   info: "(C++ / Dart) ~ 1000 lines"
    #   desc: OPPO AI 挑战赛 Demo 源码，将人像语义分割网络经过腾讯开源的 ncnn 框架转换后部署到移动端。
    #   time: '2019.03'
    # - name: github.com/Yidadaa/HUAWEI-Codecraft-2019
    #   link: https://github.com/Yidadaa/HUAWEI-Codecraft-2019
    #   info: "(C++) ~ 1000 lines"
    #   desc: 华为软件精英挑战赛代码，车辆路径智能规划，包含完整的单元测试，严格遵循 Google C++ Style Guide 规范。
    #   time: '2019.05'
    # - name: github.com/Yidadaa/P2P-Message
    #   link: https://github.com/Yidadaa/P2P-Message
    #   info: "(Dart) ~ 1000 lines"
    #   desc: 基于 Flutter 开发的 P2P 聊天程序，在良好的 NAT 环境下实现纯文字聊天。
    #   time: '2018.11'

---
