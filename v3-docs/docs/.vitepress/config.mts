import { defineConfig } from "vitepress";
import metadata from "../generators/meteor-versions/metadata.generated";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Docs",
  description: "Meteor.js Docs",
  head: [
    ["link", { rel: "icon", href: "/logo.png" }],
    [
      "script",
      {
        async: "",
        src: "https://widget.kapa.ai/kapa-widget.bundle.js",
        "data-website-id": "64051b0e-d79f-4fe7-b3ca-ff5c84075693",
        "data-project-name": "Meteor",
        "data-project-color": "#36436b",
        "data-project-logo": "https://v3-docs.meteor.com/logo.png",
        "data-modal-disclaimer":
          "This is a custom LLM for answering questions about Meteor. Answers are based on the contents of the docs, answered forum posts, YouTube videos and GitHub issues. Please note that answers are generated by AI and may not be fully accurate, so please use your best judgement.",
      },
    ],
  ],
  lastUpdated: true,
  sitemap: {
    hostname: "https://v3-docs.meteor.com",
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {
        text: "Docs",
        activeMatch: `^/(guide|docs|examples)/`,
        items: [
          { text: "Quick Start", link: "/about/install" },
          { text: "Examples", link: "https://github.com/meteor/examples" },
          {
            text: "Meteor.js 2 Docs",
            link: "https://v2-docs.meteor.com",
          },
          {
            text: "Migration from Meteor.js 2",
            link: "https://v3-migration-docs.meteor.com",
          },
          {
            text: "Tutorials",
            items: [
              {
                text: "Meteor.js 3 + React",
                link: "/tutorials/react/index",
              },
              {
                text: "Meteor + Vue + vue-meteor-tracker",
                link: "/tutorials/vue/meteorjs3-vue3-vue-meteor-tracker",
              },
            ],
          },
        ],
      },
      {
        text: "Ecosystem",
        activeMatch: `^/ecosystem/`,
        items: [
          {
            text: "Community & Help",
            items: [
              {
                text: "Meteor Forums",
                link: "https://forums.meteor.com",
              },
              {
                text: "Meteor Lounge Discord",
                link: "https://discord.gg/hZkTCaVjmT",
              },
              {
                text: "GitHub Discussions",
                link: "https://github.com/meteor/meteor/discussions",
              },
            ],
          },
          {
            text: "Resources",
            items: [
              {
                text: "Packages on Atmosphere",
                link: "https://atmospherejs.com/",
              },
              {
                text: "VS Code Extension",
                link: "https://marketplace.visualstudio.com/items?itemName=meteor-toolbox.meteor-toolbox",
              },
              {
                text: "DevTools - Chrome Extension",
                link: "https://chromewebstore.google.com/detail/ibniinmoafhgbifjojidlagmggecmpgf",
              },
              {
                text: "DevTools - Firefox Extension",
                link: "https://addons.mozilla.org/en-US/firefox/addon/meteor-devtools-evolved/",
              },
            ],
          },
          {
            text: "Learning",
            items: [
              {
                text: "Meteor University",
                link: "https://university.meteor.com",
              },
              {
                text: "Youtube Channel",
                link: "https://www.youtube.com/@meteorsoftware",
              },
            ],
          },
          {
            text: "News",
            items: [
              { text: "Blog on Dev.to", link: "https://dev.to/meteor" },
              { text: "Blog on Medium", link: "https://blog.meteor.com" },
              { text: "Twitter", link: "https://x.com/meteorjs" },
              {
                text: "LinkedIn",
                link: "https://www.linkedin.com/company/meteor-software/",
              },
            ],
          },
        ],
      },
      { text: "API", link: "/api/" },
      { text: "Galaxy Cloud", link: "https://www.meteor.com/cloud" },
      {
        text: metadata.currentVersion,
        items: metadata.versions.reverse().map((v) => {
          if (v.isCurrent) {
            return {
              text: `${v.version} (Current)`,
              link: "/",
              activeMatch: "/",
            };
          }
          return {
            text: v.version,
            link: v.url,
          };
        }),
      },
    ],
    sidebar: [
      {
        text: "About",
        link: "/about/what-is",
        items: [
          {
            text: "What is Meteor?",
            link: "/about/what-is#introduction",
          },
          {
            text: "Meteor resources",
            link: "/about/what-is#learning-more",
          },
          {
            text: "Roadmap",
            link: "/about/roadmap",
          },
        ],
        collapsed: true,
      },
      {
        text: "Quick Start",
        items: [
          {
            text: "Install Meteor",
            link: "/about/install",
          },
          {
            text: "Web Apps",
            link: "/about/web-apps",
          },
          {
            text: "Cordova",
            link: "/about/cordova",
          },
        ],
        collapsed: true,
      },
      {
        text: "API",
        link: "/api/",
        items: [
          {
            text: "Accounts",
            link: "/api/accounts",
            items: [
              { text: "Accounts-Base", link: "/api/accounts#accounts-base" },
              { text: "Multi-server", link: "/api/accounts#multi-server" },
              { text: "Passwords", link: "/api/accounts#passwords" },
            ],
            collapsed: true,
          },
          {
            text: "Meteor",
            link: "/api/meteor",
            items: [
              { text: "Core", link: "/api/meteor#core" },
              { text: "Methods", link: "/api/meteor#methods" },
              { text: "Publish and Subscribe", link: "/api/meteor#pubsub" },
              { text: "Server connections", link: "/api/meteor#connections" },
              { text: "Timers", link: "/api/meteor#timers" },
            ],
          },
          {
            text: "Collections",
            link: "/api/collections",
          },
          {
            text: "DDPRateLimiter",
            link: "/api/DDPRateLimiter",
          },
          {
            text: "Check",
            link: "/api/check",
          },
          {
            text: "Session",
            link: "/api/session",
          },
          {
            text: "Blaze",
            link: "/api/blaze",
          },
          {
            text: "Templates",
            link: "/api/templates",
          },
          {
            text: "Email",
            link: "/api/email",
          },
          {
            text: "Tracker",
            link: "/api/Tracker",
          },
          {
            text: "Reactive Var",
            link: "/api/ReactiveVar",
          },
          {
            text: "Reactive Dict",
            link: "/api/ReactiveDict",
          },
          {
            text: "EJSON",
            link: "/api/EJSON",
          },
          {
            text: "Assets",
            link: "/api/assets",
          },
          {
            text: "Mobile Configuration",
            link: "/api/app",
          },
          {
            text: "Package.js",
            link: "/api/package",
          },
          {
            text: "Top Level Await",
            link: "/api/top-level-await",
          },
        ],
        collapsed: true,
      },
      {
        text: "Packages",
        items: [
          {
            text: "accounts-ui",
            link: "/packages/accounts-ui",
          },
          {
            text: "accounts-passwordless",
            link: "/packages/accounts-passwordless",
          },
          {
            text: "accounts-2fa",
            link: "/packages/accounts-2fa",
          },
          {
            text: "appcache",
            link: "/packages/appcache",
          },
          {
            text: "audit-arguments-checks",
            link: "/packages/audit-argument-checks",
          },
          {
            text: "autoupdate",
            link: "/packages/autoupdate",
          },
          {
            text: "browser-policy",
            link: "/packages/browser-policy",
          },
          {
            text: "bundler-visualizer",
            link: "/packages/bundle-visualizer",
          },
          {
            text: "coffeescript",
            link: "/packages/coffeescript",
          },
          {
            text: "ecmascript",
            link: "/packages/ecmascript",
          },
          {
            text: "fetch",
            link: "/packages/fetch",
          },
          {
            text: "hot-module-replacement",
            link: "/packages/hot-module-replacement",
          },
          {
            text: "less",
            link: "/packages/less",
          },
          {
            text: "logging",
            link: "/packages/logging",
          },
          {
            text: "markdown",
            link: "/packages/markdown",
          },
          {
            text: "modules",
            link: "/packages/modules",
          },
          {
            text: "oauth-encryption",
            link: "/packages/oauth-encryption",
          },
          {
            text: "random",
            link: "/packages/random",
          },
          {
            text: "react-meteor-data",
            link: "/packages/react-meteor-data",
          },
          {
            text: "server-render",
            link: "/packages/server-render",
          },
          {
            text: "standard-minifier-css",
            link: "/packages/standard-minifier-css",
          },
          {
            text: "underscore",
            link: "/packages/underscore",
          },
          {
            text: "url",
            link: "/packages/url",
          },
          {
            text: "webapp",
            link: "/packages/webapp",
          },
          {
            link: "/packages/packages-listing",
            text: "Maintained Packages",
          },
          {
            link: "packages/community-packages",
            text: "Community Packages",
          },
        ],
        collapsed: true,
      },
      {
        text: "Community Packages",
        link: "/community-packages/index",
        items: [],
        collapsed: true,
      },
      {
        text: "Troubleshooting",
        items: [
          {
            text: "Expired Certificates",
            link: "/troubleshooting/expired-certificate",
          },
          { text: "Windows", link: "/troubleshooting/windows" },
        ],
        collapsed: true,
      },
      {
        text: "Command Line",
        items: [
          { link: "/cli/", text: "CLI" },
          { link: "/cli/using-core-types", text: "Using Core Types" },
          { link: "/cli/environment-variables", text: "Environment Variables" },
        ],
        collapsed: true,
      },
      {
        text: "Tutorials",
        items: [
          {
            text: "Meteor.js 3 + React",
            link: "/tutorials/react/index",
          },
          {
            link: "/tutorials/vue/meteorjs3-vue3-vue-meteor-tracker",
            text: "Meteor + Vue + vue-meteor-tracker",
          },
        ],
        collapsed: true,
      },
      {
        text: "Changelog",
        items: [
          // TODO: Open issue in Vitepress about this
          { link: "/history", text: "Meteor.js v3 (Current)" },
          {
            link: "https://v2-docs.meteor.com/changelog",
            text: "Meteor.js v2",
          },
          {
            link: "https://v2-docs.meteor.com/changelog#v112220211012",
            text: "Meteor.js v1",
          },
        ],
        collapsed: true,
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/meteor/meteor" },
      { icon: "twitter", link: "https://x.com/meteorjs" },
      { icon: "discord", link: "https://discord.gg/hZkTCaVjmT" },
    ],

    logo: { dark: "/meteor-logo.png", light: "/meteor-blue.png" },

    search: {
      provider: "algolia",
      options: {
        appId: "2RBX3PR26I",
        apiKey: "7fcba92008b84946f04369df2afa1744",
        indexName: "meteor_docs_v3",
        searchParameters: {
          facetFilters: ["lang:en"],
        },
      },
    },

    footer: {
      message:
        'Released under the <a href="https://github.com/meteor/meteor?tab=License-1-ov-file#readme">MIT License</a>.',
      copyright:
        'Copyright (c) 2011 - present <a href="https://www.meteor.com/">Meteor Software</a>.',
    },
    editLink: {
      pattern: "https://github.com/meteor/meteor/edit/devel/v3-docs/docs/:path",
      text: "Edit this page on GitHub",
    },
  },
});
