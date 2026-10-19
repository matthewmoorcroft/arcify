export function shouldArchive(lastActivity, now, idleThresholdMillis) {
    return now - lastActivity > idleThresholdMillis;
}
