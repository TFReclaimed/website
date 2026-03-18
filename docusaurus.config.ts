import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

function siteBaseUrl() {
    if (process.env.NODE_ENV === "development") {
        return "http://localhost:3000";
    }

    if (process.env.CF_PAGES_URL) {
        return process.env.CF_PAGES_URL;
    }

    return "https://tfainternal.com";
}

const config: Config = {
    title: "TF Reclaimed",
    tagline: "Titanfall Assault and Frontline restoration project",
    favicon: "img/favicon.ico",
    future: {
        v4: true,
    },
    url: siteBaseUrl(),
    baseUrl: "/",
    onBrokenLinks: "throw",
    i18n: {
        defaultLocale: "en",
        locales: ["en"],
    },
    presets: [
        [
            "classic",
            {
                docs: {
                    sidebarPath: "./sidebars.ts",
                    editUrl: "https://github.com/TFReclaimed/website/",
                },
                blog: {
                    showReadingTime: true,
                    feedOptions: {
                        type: ["rss", "atom"],
                        xslt: true,
                    },
                    editUrl: "https://github.com/TFReclaimed/website/",
                    onInlineTags: "warn",
                    onInlineAuthors: "warn",
                    onUntruncatedBlogPosts: "warn",
                },
                theme: {
                    customCss: "./src/css/custom.css",
                },
            } satisfies Preset.Options,
        ],
    ],
    themeConfig: {
        image: "img/tfreclaimed-social-card.jpg",
        metadata: [
            {
                name: "keywords",
                content:
                    "titanfall, titanfall assault, titanfall frontline, server emulator, private server, apex legends",
            },
            {
                name: "darkreader-lock",
            },
        ],
        colorMode: {
            respectPrefersColorScheme: true,
        },
        navbar: {
            title: "TF Reclaimed",
            logo: {
                alt: "My Site Logo",
                src: "img/logo.svg",
            },
            items: [
                {
                    to: "/blog",
                    label: "Blog",
                    position: "left",
                },
                {
                    href: "https://discord.gg/TF6PUR6uHv",
                    label: "Discord",
                    position: "right",
                },
                {
                    href: "https://github.com/TFReclaimed",
                    label: "GitHub",
                    position: "right",
                },
            ],
        },
        footer: {
            style: "dark",
            links: [
                {
                    title: "Community",
                    items: [
                        {
                            label: "Discord",
                            href: "https://discord.gg/TF6PUR6uHv",
                        },
                        {
                            label: "YouTube",
                            href: "https://www.youtube.com/@tfreclaimed",
                        },
                        {
                            label: "TikTok",
                            href: "https://www.tiktok.com/@tfreclaimed",
                        },
                    ],
                },
                {
                    title: "More",
                    items: [
                        {
                            label: "Blog",
                            to: "/blog",
                        },
                        {
                            label: "GitHub",
                            href: "https://github.com/TFReclaimed",
                        },
                        {
                            label: "OpenTOY Account",
                            href: "https://opentoy.tfflinternal.com",
                        },
                    ],
                },
            ],
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },
    } satisfies Preset.ThemeConfig,
};

export default config;
