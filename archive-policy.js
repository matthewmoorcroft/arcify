// A tab with no activity record (just opened in the background, or restored with a new id)
// is not idle yet: the caller records `now` for it and checks it again on a later pass.
export function shouldArchive(lastActivity, now, idleThresholdMillis) {
    if (!lastActivity) return false;
    return now - lastActivity > idleThresholdMillis;
}
