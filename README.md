# Muchi Explore Engine

暮迟市现场探索引擎。独立于地图与 MR-87 收音机发布，避免版本 Tag / Release 相互占用。

## 推荐仓库

角色卡 v30.9 默认从下面的仓库名加载：

`AliceNekoqqq/Muchi-Explore-Engine`

如果你使用其他仓库名，需要同步修改角色卡里的“暮迟现场探索引擎 Loader v1.0.0”三条 URL。

## 仓库结构

```text
Muchi-Explore-Engine/
├─ index.js
├─ README.md
├─ TESTING.md
└─ CHANGELOG.md
```

## 发布

1. 新建公开 GitHub 仓库 `Muchi-Explore-Engine`。
2. 将本压缩包里的文件上传到仓库根目录，默认分支为 `main`。
3. 第一次测试时不用先创建 Release。角色卡会先尝试 `v1.0.0`，不存在时自动回退 `main`。
4. 测试通过后创建 Git Tag `v1.0.0`，以后 Explore 使用自己的独立版本号。

## 运行边界

- 探索规则、即时 UI、随机池与防重 Roll 由本引擎处理。
- 剧情状态仍写入当前聊天的 MVU：`stat_data.地图.探索系统`。
- 不使用 localStorage 保存剧情探索状态，避免换对话串档。
- 地图插件只调用 `MuchiExplore` API，不拥有探索结算逻辑。
- MR-87 与本仓库互不依赖。

## 当前 API

模块导出：

- `mountExplore()`：挂载/重挂载引擎。
- `openExplore(options)`：打开现场探索界面。
- `closeExplore()`：关闭界面。
- `getExploreSummary(location, statData)`：读取地点探索摘要。
- `getExploreDiagnostics()`：检查是否成功挂载。

挂载后还会在宿主窗口暴露 `MuchiExplore`，供地图和状态栏联动。
