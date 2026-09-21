# Muchi Explore Engine v1.5.1

v1.5.1 adds a shared PC/mobile portrait background for the exploration UI. Story logic and MVU settlement rules are unchanged.

## Required asset path

Place the background at:

`Assets/explore_bg.png`

The module resolves the image relative to `import.meta.url`, so a tagged module automatically uses the asset from the same tag; a `main` fallback uses the asset from `main`.

Recommended image: 9:16 portrait. The same file is used on desktop and mobile with `background-size: cover`.
