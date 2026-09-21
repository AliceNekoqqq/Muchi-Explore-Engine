# Changelog

## 1.5.2
- 修复手机端现场探索无法纵向滚动、右侧内容被裁切的问题。
- visualViewport 改为左上角直接锚定，避免部分 Android 浏览器的二次偏移。
- 移动端地点条强化横向触摸滚动。
- 搜索卡强制 `min-width:0`，改为 2+1 布局，彻底消除宿主主题 `button min-width` 导致的溢出。
