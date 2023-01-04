(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{569:function(e,t,a){"use strict";a.r(t);var v=a(9),_=Object(v.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("blockquote",[a("p",[e._v("点击勘误"),a("a",{attrs:{href:"https://github.com/webVueBlog/learn-webpack/issues",target:"_blank",rel:"noopener noreferrer"}},[e._v("issues"),a("OutboundLink")],1),e._v("，哪吒感谢大家的阅读")])]),e._v(" "),a("h2",{attrs:{id:"模块热替换-hot-module-replacement"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模块热替换-hot-module-replacement"}},[e._v("#")]),e._v(" 模块热替换(hot module replacement)")]),e._v(" "),a("p",[e._v("模块热替换(HMR - hot module replacement)功能会在应用程序运行过程中，替换、添加或删除 模块，而无需重新加载整个页面。主要是通过以下几种方式，来显著加快开发速度：")]),e._v(" "),a("ul",[a("li",[e._v("保留在完全重新加载页面期间丢失的应用程序状态。")]),e._v(" "),a("li",[e._v("只更新变更内容，以节省宝贵的开发时间。")]),e._v(" "),a("li",[e._v("在源代码中 CSS/JS 产生修改时，会立刻在浏览器中进行更新，这几乎相当于在浏览器 devtools 直接更改样式。")])]),e._v(" "),a("h2",{attrs:{id:"这一切是如何运行的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#这一切是如何运行的"}},[e._v("#")]),e._v(" 这一切是如何运行的？")]),e._v(" "),a("p",[e._v("让我们从一些不同的角度观察，以了解 HMR 的工作原理……")]),e._v(" "),a("h2",{attrs:{id:"在应用程序中"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在应用程序中"}},[e._v("#")]),e._v(" 在应用程序中")]),e._v(" "),a("p",[e._v("通过以下步骤，可以做到在应用程序中置换(swap in and out)模块：")]),e._v(" "),a("ol",[a("li",[e._v("应用程序要求 HMR runtime 检查更新。")]),e._v(" "),a("li",[e._v("HMR runtime 异步地下载更新，然后通知应用程序。")]),e._v(" "),a("li",[e._v("应用程序要求 HMR runtime 应用更新。")]),e._v(" "),a("li",[e._v("HMR runtime 同步地应用更新。")])]),e._v(" "),a("p",[e._v("你可以设置 HMR，以使此进程自动触发更新，或者你可以选择要求在用户交互时进行更新。")]),e._v(" "),a("h2",{attrs:{id:"在-compiler-中"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在-compiler-中"}},[e._v("#")]),e._v(" 在 compiler 中")]),e._v(" "),a("p",[e._v('除了普通资源，compiler 需要发出 "update"，将之前的版本更新到新的版本。"update" 由两部分组成：')]),e._v(" "),a("ol",[a("li",[e._v("更新后的 manifest (JSON)")]),e._v(" "),a("li",[e._v("一个或多个 updated chunk (JavaScript)")])]),e._v(" "),a("p",[a("code",[e._v("manifest")]),e._v(" 包括新的 "),a("code",[e._v("compilation hash")]),e._v(" 和所有的 "),a("code",[e._v("updated chunk")]),e._v(" 列表。\n每个 "),a("code",[e._v("chunk")]),e._v(" 都包含着全部更新模块的最新代码（或一个 "),a("code",[e._v("flag")]),e._v(" 用于表明此模块需要被移除）。")]),e._v(" "),a("p",[a("code",[e._v("compiler")]),e._v(" 会确保在这些构建之间的模块 "),a("code",[e._v("ID")]),e._v(" 和 "),a("code",[e._v("chunk ID")]),e._v(" 保持一致。\n通常将这些 "),a("code",[e._v("ID")]),e._v(" 存储在内存中（例如，使用 "),a("code",[e._v("webpack-dev-server")]),e._v(" 时），但是也可能会将它们存储在一个 JSON 文件中。")]),e._v(" "),a("h2",{attrs:{id:"在模块中"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在模块中"}},[e._v("#")]),e._v(" 在模块中")]),e._v(" "),a("p",[e._v("HMR 是可选功能，只会影响包含 HMR 代码的模块。\n举个例子，通过 style-loader 为 style 追加补丁。\n为了运行追加补丁，style-loader 实现了 HMR 接口；当它通过 HMR 接收到更新，它会使用新的样式替换旧的样式。")]),e._v(" "),a("p",[e._v("类似的，当在一个模块中实现了 HMR 接口，你可以描述出当模块被更新后发生了什么。\n然而在多数情况下，不需要在每个模块中强行写入 HMR 代码。如果一个模块没有 HMR 处理函数，更新就会冒泡(bubble up)。这意味着某个单独处理函数能够更新整个模块树。如果在模块树的一个单独模块被更新，那么整组依赖模块都会被重新加载。")]),e._v(" "),a("p",[e._v("有关 module.hot 接口的详细信息，请查看 HMR API 页面。")]),e._v(" "),a("h2",{attrs:{id:"在-runtime-中"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在-runtime-中"}},[e._v("#")]),e._v(" 在 runtime 中")]),e._v(" "),a("p",[e._v("这件事情比较有技术性……如果你对其内部不感兴趣，可以随时跳到 HMR API 页面 或 HMR 指南。")]),e._v(" "),a("p",[e._v("对于模块系统运行时(module system runtime)，会发出额外代码，来跟踪模块 parents 和 children 关系。在管理方面，runtime 支持两个方法 check 和 apply。")]),e._v(" "),a("p",[e._v("check 方法，发送一个 HTTP 请求来更新 manifest。如果请求失败，说明没有可用更新。如果请求成功，会将 updated chunk 列表与当前的 loaded chunk 列表进行比较。每个 loaded chunk 都会下载相应的 updated chunk。当所有更新 chunk 完成下载，runtime 就会切换到 ready 状态。")]),e._v(" "),a("p",[e._v("apply 方法，将所有 updated module 标记为无效。对于每个无效 module，都需要在模块中有一个 update handler，或者在此模块的父级模块中有 update handler。否则，会进行无效标记冒泡，并且父级也会被标记为无效。继续每个冒泡，直到到达应用程序入口起点，或者到达带有 update handler 的 module（以最先到达为准，冒泡停止）。如果它从入口起点开始冒泡，则此过程失败。")]),e._v(" "),a("p",[e._v("之后，所有无效 module 都会被（通过 dispose handler）处理和解除加载。然后更新当前 hash，并且调用所有 accept handler。runtime 切换回 idle 状态，一切照常继续。")]),e._v(" "),a("h2",{attrs:{id:"起步"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#起步"}},[e._v("#")]),e._v(" 起步")]),e._v(" "),a("p",[e._v("在开发环境，可以将 HMR 作为 LiveReload 的替代。webpack-dev-server 支持 hot 模式，在试图重新加载整个页面之前，hot 模式会尝试使用 HMR 来更新。更多细节请查看 模块热替换 指南。")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"title"}),a("p",[e._v("Tip\n与许多其他功能一样，webpack 的强大之处在于它的可定制化。取决于特定项目需求，会有 许多方式 来配置 HMR。然而，对于多数项目的实现目的来说，webpack-dev-server 都能够很好适应，可以帮助你在项目中快速应用 HMR。")])])])}),[],!1,null,null,null);t.default=_.exports}}]);