# Changelog

## v1.0.0

- 从角色卡 v30.8 抽离为独立 ES Module。
- 保留 11 个真实地点、69 个子区域与三级搜索。
- 保留即时结算、防重 Roll、待收取缓存、时间推进、地点资源扣减和 S11 固定发现逻辑。
- 提供 `mountExplore/openExplore/getExploreSummary/getExploreDiagnostics` 模块接口。
- 保持 `window.MuchiExplore` 宿主 API，兼容地图 v2.5.4 与状态栏 v30.8。
