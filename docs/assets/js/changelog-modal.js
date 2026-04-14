/* ------------------------------------------------------------------ *
 * What's New modal
 *
 * Display rules:
 *   - Auto-show on first visit OR first visit after a version bump.
 *   - Once shown in a session (even without closing), do NOT auto-show
 *     again on in-site page navigation (sessionStorage guard).
 *   - Clicking "閉じる" marks the version as seen in localStorage,
 *     which prevents auto-show on future visits until the next version.
 *   - The bell button always lets users re-open the modal manually.
 * ------------------------------------------------------------------ */

const CHANGELOG = [
  {
    version: "1.1.0",
    date: "2026-04-14",
    items: [
      "更新履歴の通知機能を追加しました（このモーダル）",
      "Windows 11 のローカルアカウント作成手順を更新しました（Shift+F10 でコマンドプロンプトを開く方式・24H2 以降の <code>ms-cxh:localonly</code> コマンドに対応）",
      "Windows 11 の Microsoft 広告・プロモーション無効化手順を追加しました",
      "Windows 11・macOS 26 の任意インストールコマンドを「PC によって要りそうならインストール」セクションへ集約しました"
    ]
  }
];

(function () {
  "use strict";

  const CURRENT_VERSION = CHANGELOG[0].version;
  const LS_KEY = "changelog_seen_version";
  const SS_KEY = "changelog_auto_shown";

  /* ── State helpers ──────────────────────────────────────────────── */

  function hasUnread() {
    return localStorage.getItem(LS_KEY) !== CURRENT_VERSION;
  }

  function shouldAutoShow() {
    if (sessionStorage.getItem(SS_KEY) === "1") return false;
    return hasUnread();
  }

  function markAutoShown() {
    sessionStorage.setItem(SS_KEY, "1");
  }

  function markSeen() {
    localStorage.setItem(LS_KEY, CURRENT_VERSION);
  }

  /* ── DOM builders ───────────────────────────────────────────────── */

  function buildOverlay() {
    const entries = CHANGELOG.map(function (entry) {
      const items = entry.items
        .map(function (item) { return "<li>" + item + "</li>"; })
        .join("");
      return (
        '<div class="cl-entry">' +
          '<div class="cl-entry-header">' +
            '<span class="cl-version">v' + entry.version + '</span>' +
            '<span class="cl-date">' + entry.date + '</span>' +
          "</div>" +
          '<ul class="cl-items">' + items + "</ul>" +
        "</div>"
      );
    }).join("");

    const overlay = document.createElement("div");
    overlay.id = "cl-overlay";
    overlay.setAttribute("role", "dialog");
    overlay.setAttribute("aria-modal", "true");
    overlay.setAttribute("aria-labelledby", "cl-title");
    overlay.hidden = true;
    overlay.innerHTML =
      '<div id="cl-modal">' +
        '<button id="cl-close-x" aria-label="閉じる">&times;</button>' +
        '<h2 id="cl-title">What\'s New</h2>' +
        '<div id="cl-body">' + entries + "</div>" +
        '<div id="cl-footer">' +
          '<button id="cl-close-btn">閉じる</button>' +
        "</div>" +
      "</div>";
    return overlay;
  }

  function buildReopenButton() {
    const btn = document.createElement("button");
    btn.id = "cl-reopen";
    btn.setAttribute("aria-label", "更新履歴を見る");
    btn.title = "更新履歴";
    btn.innerHTML =
      '<svg id="cl-bell-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" ' +
        'aria-hidden="true" focusable="false">' +
        '<path d="M12 22a2 2 0 0 0 2-2H10a2 2 0 0 0 2 2zm6-6V11a6 6 0 0 0-5-5.91V4a1 1 0 0 0-2 0v1.09A6 6 0 0 0 6 11v5l-2 2v1h16v-1l-2-2z"/>' +
      "</svg>" +
      '<span id="cl-badge" aria-label="未読あり" hidden></span>';
    return btn;
  }

  /* ── Visibility ─────────────────────────────────────────────────── */

  function showModal() {
    var overlay = document.getElementById("cl-overlay");
    overlay.hidden = false;
    // Move focus into the modal for accessibility
    var closeBtn = document.getElementById("cl-close-btn");
    if (closeBtn) closeBtn.focus();
  }

  function closeModal() {
    var overlay = document.getElementById("cl-overlay");
    overlay.hidden = true;
    markSeen();
    updateBadge();
    var reopen = document.getElementById("cl-reopen");
    if (reopen) reopen.focus();
  }

  function updateBadge() {
    var badge = document.getElementById("cl-badge");
    if (!badge) return;
    badge.hidden = !hasUnread();
  }

  /* ── Init ───────────────────────────────────────────────────────── */

  document.addEventListener("DOMContentLoaded", function () {
    var overlay = buildOverlay();
    var reopenBtn = buildReopenButton();
    document.body.appendChild(overlay);
    document.body.appendChild(reopenBtn);

    document.getElementById("cl-close-x").addEventListener("click", closeModal);
    document.getElementById("cl-close-btn").addEventListener("click", closeModal);

    document.getElementById("cl-reopen").addEventListener("click", function () {
      showModal();
      markAutoShown(); // suppress further auto-show if user navigates now
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && !document.getElementById("cl-overlay").hidden) {
        closeModal();
      }
    });

    updateBadge();

    if (shouldAutoShow()) {
      showModal();
      markAutoShown();
    }
  });
})();
