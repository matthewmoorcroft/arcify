import { test } from 'node:test';
import assert from 'node:assert/strict';
import { shouldArchive } from '../../archive-policy.js';

const threshold = 360 * 60 * 1000;
const now = Date.UTC(2026, 0, 1);

test('a tab without an activity record is kept', () => {
    assert.equal(shouldArchive(undefined, now, threshold), false);
});
test('a recently active tab is kept', () => {
    assert.equal(shouldArchive(now - 1000, now, threshold), false);
});
test('a tab idle past the threshold is archived', () => {
    assert.equal(shouldArchive(now - threshold - 1, now, threshold), true);
});
