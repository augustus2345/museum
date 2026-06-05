# 拾光匣 · 任务清单

> 详细背景见 [PLAN.md](PLAN.md)。每完成一项按 CLAUDE.md §4 流程:写测试 → 实现 → `flutter analyze` + `flutter test` → 勾选 + 写完成时间 → 输出摘要。

## M0 — 项目初始化

- [x] T0.1 在仓库根运行 `flutter create . --org com.shiguangxia --project-name shiguangxia --platforms=android,ios,web,macos --description "拾光匣 — 收藏每一件值得记住的小事"`

  **完成时间**: 2026-06-05
- [x] T0.2 写 `pubspec.yaml` 依赖(见计划)

  **完成时间**: 2026-06-05
  **变更**: intl 由 `^0.19.0` 升到 `^0.20.2`(Flutter SDK 强制);`flutter_localizations` 一并加入,供 T0.5 l10n 使用
- [ ] T0.3 写 `analysis_options.yaml`
- [ ] T0.4 下载 5 个 OFL 字体到 `assets/fonts/` 并在 `pubspec.yaml` 声明
- [ ] T0.5 写 `l10n.yaml` + `lib/l10n/app_en.arb` + `app_zh.arb` 骨架
- [ ] T0.6 写 `lib/main.dart` + `lib/app.dart` 最简骨架,确认 `flutter run -d chrome` 能起
- [ ] T0.7 写 `PLAN.md` + `TASKS.md` 在仓库根
- [ ] T0.8 跑 `flutter analyze` 0 错 + `flutter test` 0 败

## M1 — 设计系统

- [ ] T1.1 `core/theme/app_colors.dart`(11 个常量,对应原型 CSS 变量)
- [ ] T1.2 `core/theme/app_typography.dart`(TextTheme × 5 字体)
- [ ] T1.3 `core/theme/app_spacing.dart` / `app_radius.dart` / `app_shadows.dart`
- [ ] T1.4 `core/theme/app_theme.dart`(组装 ThemeData,useMaterial3=false)
- [ ] T1.5 `core/responsive/layout_mode.dart` + `responsive_builder.dart`
- [ ] T1.6 `core/widgets/` 下:app_button / app_search_field / app_topbar / app_tab_bar / empty_state / loading_state / error_state / kind_pill
- [ ] T1.7 关键组件 Widget 测试

## M2 — 数据层

- [ ] T2.1 `features/items/domain/item_kind.dart`(enum + label 扩展)
- [ ] T2.2 `features/items/data/database.dart`(Drift:Items + ItemImages 表)
- [ ] T2.3 `features/items/data/image_storage.dart`(写入沙盒,返回相对路径)
- [ ] T2.4 `features/items/data/item_repository.dart`(CRUD + 监听流)
- [ ] T2.5 `core/utils/id_generator.dart` + `core/utils/date_format.dart`
- [ ] T2.6 单元测试:CRUD roundtrip / 相对路径解析 / 图片写入删除

## M3 — 状态层

- [ ] T3.1 `features/items/presentation/providers/item_providers.dart`(database / repository / imageStorage / itemsStream / selectedItem)
- [ ] T3.2 `app.dart` 用 `ProviderScope` 包裹 + `localizationsDelegates`
- [ ] T3.3 Provider 单元测试(ProviderContainer)

## M4 — 陈列页

- [ ] T4.1 `features/items/presentation/archive/widgets/item_card.dart`
- [ ] T4.2 `features/items/presentation/archive/widgets/archive_grid.dart`(按 LayoutMode 选列数)
- [ ] T4.3 `features/items/presentation/archive/widgets/archive_subheader.dart`
- [ ] T4.4 `archive_screen.dart` + `home_shell.dart`(顶栏 + IndexedStack 3 Tab;v1 只用 archive/add,其他 Tab 占位)
- [ ] T4.5 Widget 测试:空态、N 件渲染、Tap 跳详情

## M5 — 详情页

- [ ] T5.1 `features/items/presentation/detail/widgets/detail_gallery.dart`
- [ ] T5.2 `features/items/presentation/detail/widgets/detail_info.dart`
- [ ] T5.3 `detail_screen.dart`(全屏路由 + 返回栏)
- [ ] T5.4 Widget 测试:多图切换、字段渲染

## M6 — 新增页

- [ ] T6.1 `features/items/presentation/add/widgets/image_dropzone.dart`
- [ ] T6.2 `features/items/presentation/add/widgets/add_form.dart`
- [ ] T6.3 `features/items/presentation/add/add_controller.dart`(@riverpod + 竞态守护 + 校验)
- [ ] T6.4 `add_screen.dart`
- [ ] T6.5 Widget 测试:校验失败、提交成功跳陈列

## M7 — 集成 + 跨平台

- [ ] T7.1 `router/app_router.dart`(go_router:`/` / `/add` / `/items/:id`)
- [ ] T7.2 `integration_test/add_then_view_test.dart`
- [ ] T7.3 iOS `Info.plist` 权限条目
- [ ] T7.4 Android `AndroidManifest.xml` 权限条目
- [ ] T7.5 `flutter build web` / `flutter build apk --debug` / `flutter build ios --debug --no-codesign` 全绿

## M8 — 收尾

- [ ] T8.1 全量 `flutter analyze` + `flutter test` + `flutter test integration_test` 全绿
- [ ] T8.2 写最小 `README.md`
- [ ] T8.3 PLAN.md / TASKS.md 勾选完成
- [ ] T8.4 按 CLAUDE.md §5 决定是否归档

## 归档

(完成后将历史 M_x 移入 `docs/tasks-archive/milestone-X-completed.md`)
