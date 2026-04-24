import { useEffect, useState } from "react";
import styles from "./PlayerCounter.module.css";

type ServerStats = {
    onlinePlayers: number;
    activeBattles: number;
};

type OnlineStatus = "loading" | "online" | "offline";

export default function PlayerCounter() {
    const [stats, setStats] = useState<ServerStats>({
        onlinePlayers: 0,
        activeBattles: 0,
    });
    const [status, setStatus] = useState<OnlineStatus>("loading");

    useEffect(() => {
        let mounted = true;
        let interval: NodeJS.Timeout;

        async function fetchStats() {
            try {
                const response = await fetch(
                    "https://prod-us-east-1-gameserver-lb.tfflinternal.com/stats.json",
                );

                const data = (await response.json()) as ServerStats;

                if (mounted) {
                    setStats(data);
                    setStatus("online");
                }
            } catch (e) {
                console.error("Failed to fetch player stats", e);
                if (mounted) {
                    setStatus("offline");
                }
            }
        }

        fetchStats().finally(() => {
            if (mounted) {
                interval = setInterval(fetchStats, 30000);
            }
        });

        return () => {
            mounted = false;
            clearInterval(interval);
        };
    }, []);

    const dotColor =
        status === "online"
            ? "#10B981"
            : status === "loading"
              ? "#F59E0B"
              : "#EF4444";
    const statusText =
        status === "online"
            ? "Server Online"
            : status === "loading"
              ? "Checking Status..."
              : "Server Unreachable";

    return (
        <div className={styles.container}>
            <div className={styles.counterBox}>
                <div className={styles.statusHeader}>
                    <span
                        className={styles.statusDot}
                        style={{ backgroundColor: dotColor }}
                    ></span>
                    {statusText}
                </div>
                {status === "online" && (
                    <div className={styles.statsRow}>
                        <div>
                            <strong>{stats.onlinePlayers}</strong> Players
                            Online
                        </div>
                        <span>|</span>
                        <div>
                            <strong>{stats.activeBattles}</strong> Active
                            Battles
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
