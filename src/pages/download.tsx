import type { ReactNode } from "react";
import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";

import styles from "./download.module.css";

const platforms = [
    {
        name: "Windows",
        description: "Windows 7 or higher.",
        downloadUrl:
            "https://cdn-cf.tfflinternal.com/frontline/Frontline-Setup.exe",
        downloadLabel: "Download .exe",
    },
    {
        name: "Mac",
        description: "macOS 10.14 (Mojave) or higher.",
        downloadUrl: "https://cdn-cf.tfflinternal.com/frontline/Frontline.dmg",
        downloadLabel: "Download .dmg",
    },
    {
        name: "Linux",
        description: "Just use something modern.",
        downloadUrl:
            "https://cdn-cf.tfflinternal.com/frontline/Frontline.AppImage",
        downloadLabel: "Download AppImage",
    },
    {
        name: "Android",
        description: "Android 5.1 (Lollipop) or higher.",
        downloadUrl: "https://cdn-cf.tfflinternal.com/frontline/Frontline.apk",
        downloadLabel: "Download APK",
    },
    {
        name: "iOS",
        description: "iOS 12 or higher.",
        downloadUrl: "https://cdn-cf.tfflinternal.com/frontline/Frontline.ipa",
        downloadLabel: "Download IPA",
    },
] as const;

export default function Download(): ReactNode {
    return (
        <Layout title="Download" description="Download Titanfall Frontline">
            <main className="container margin-vert--lg">
                <div className={styles.header}>
                    <Heading as="h1">Download Titanfall Frontline</Heading>
                    <p className={styles.subtitle}>
                        Get the latest version of Titanfall Frontline for your
                        device.
                    </p>
                    <p className={styles.subtitle}>
                        Need help with installing? Read the{" "}
                        <Link href="/docs/category/installation">
                            installation documentation
                        </Link>
                        .
                    </p>
                    <p className={styles.version}>
                        <span>
                            <strong>Base game version:</strong> 1.0.17334
                        </span>
                        <span>
                            <strong>Patches version:</strong> 26.4.3
                        </span>
                    </p>
                </div>

                <section
                    className={styles.grid}
                    aria-label="Supported platforms"
                >
                    {platforms.map((platform) => (
                        <article key={platform.name} className={styles.card}>
                            <Heading as="h2" className={styles.cardTitle}>
                                {platform.name}
                            </Heading>
                            <p className={styles.description}>
                                {platform.description}
                            </p>

                            <div className={styles.actions}>
                                <Link
                                    className="button button--primary button--lg button--block text--truncate"
                                    href={platform.downloadUrl}
                                >
                                    {platform.downloadLabel}
                                </Link>
                            </div>
                        </article>
                    ))}
                </section>
            </main>
        </Layout>
    );
}
