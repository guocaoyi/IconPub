# IconPub WebApp

## Reference

```bash
├── mock                 # mock data
├── public
│   └── iconpub.ico      # ico
│   └── iconpub.png      # logo
├── src
│   ├── articles             # web apis
│   ├── assets           # static
│   ├── components       # common components
│   ├── composables      # composition apis
│   ├── config           # config & import.meta.env
│   ├── locales          # i18n
│   ├── styles           # common & global styles
│   ├── utils            # lib & utils
│   ├── views            # pages
│   ├── App.vue          # vue template entry
│   ├── main.ts          # main entry
│   └── router.ts        # router entry
├── README.md
└── package.json
```

## Views

```bash
- [✓] 首页 # / or /home
- [ ] 官方图标库 # /offical
- [ ] 插画库 # /illustrations
- [ ] 项目 # /projects
- [ ] 项目详情 # /project/:id
- [ ] 个人设置 # /user
- [ ] 预览 # /previewd
- [ ] 反馈 # /feedback
- [ ] 帮助中心 # /wiki
- [ ] 404 # /notfound
```

## TODOs

- [x] Arch: SPA (browser router)
- [x] Arch: i18n(zh_CH, en)
- [ ] Style: theme dark mode
- [ ] Feature: blog(markdown support)

## Project setup

```bash
npm install
```

### Compiles and hot-reloads for development

```bash
npm run dev
```

### Compiles and minifies for production

```bash
npm run build
```

## Usage

```bash
cd iconpub/packages/iconpub-webapp
npm i
npm run dev
```
