// Competitive Programming Practicals - App Logic

document.addEventListener('DOMContentLoaded', () => {
  // Elements
  const practicalsList = document.getElementById('practicalsList');
  const tocList = document.getElementById('tocList');
  const searchInput = document.getElementById('searchInput');
  const filterPills = document.querySelectorAll('.filter-pill');
  const langFilter = document.getElementById('langFilter');
  const diffFilter = document.getElementById('diffFilter');
  const themeToggle = document.getElementById('themeToggle');
  const themeIcon = document.getElementById('themeIcon');
  const visibleCountEl = document.getElementById('visibleCount');

  // State
  let currentCategory = 'all';
  let currentLanguage = 'all';
  let currentDifficulty = 'all';
  let searchQuery = '';

  // Theme Management
  function initTheme() {
    const savedTheme = localStorage.getItem('cp_theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
  }

  function updateThemeIcon(theme) {
    if (themeIcon) {
      themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
    }
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') || 'dark';
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('cp_theme', next);
      updateThemeIcon(next);
    });
  }

  initTheme();

  // Simple Code Syntax Styler
  function highlightCode(code, lang) {
    let escaped = code
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');

    // Keywords
    const keywords = [
      'class', 'public', 'private', 'protected', 'int', 'long', 'void', 'bool', 'boolean', 'double', 'float', 'char', 'string',
      'vector', 'stack', 'return', 'if', 'else', 'while', 'for', 'auto', 'true', 'false', 'new', 'using', 'namespace', 'std',
      'cin', 'cout', 'getline', 'swap', 'abs', 'max', 'min', 'resize', 'assign', 'push_back', 'pop_back', 'empty', 'back', 'size',
      'fixed', 'setprecision'
    ];
    const kwRegex = new RegExp(`\\b(${keywords.join('|')})\\b`, 'g');
    escaped = escaped.replace(kwRegex, '<span class="code-keyword">$1</span>');

    // Preprocessor directives like #include <bits/stdc++.h>
    escaped = escaped.replace(/(#include\s+&lt;[^&]+&gt;)/g, '<span class="code-function">$1</span>');

    // Numbers
    escaped = escaped.replace(/\b(\d+)\b/g, '<span class="code-number">$1</span>');

    // Comments
    escaped = escaped.replace(/(\/\/.*$)/gm, '<span class="code-comment">$1</span>');

    return escaped;
  }

  // Render Table of Contents
  function renderTOC(items) {
    if (!tocList) return;
    tocList.innerHTML = items.map(p => `
      <li class="toc-item">
        <a href="#prac-${p.id.replace('.', '-')}" class="toc-link" data-id="${p.id}">
          <span style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">Prac ${p.id}: ${p.title}</span>
          <span class="toc-badge">${p.lang.toUpperCase()}</span>
        </a>
      </li>
    `).join('');
  }

  // Render Practical Card
  function renderCard(p) {
    const cardId = `prac-${p.id.replace('.', '-')}`;
    const diffClass = `badge-diff-${p.difficulty.toLowerCase()}`;
    const langClass = `badge-lang-${p.lang.toLowerCase()}`;
    const leetcodeLink = p.leetcode && !isNaN(p.leetcode)
      ? `https://leetcode.com/problem-list/all/?search=${p.leetcode}`
      : `https://www.google.com/search?q=LeetCode+${encodeURIComponent(p.title)}`;

    return `
      <article class="practical-card" id="${cardId}">
        <header class="card-header">
          <div class="card-title-group">
            <div class="card-meta-row">
              <span class="badge badge-id">Prac ${p.id}</span>
              <span class="badge badge-category">${p.category}</span>
              <span class="badge ${diffClass}">${p.difficulty}</span>
              <span class="badge ${langClass}">${p.lang.toUpperCase()}17</span>
            </div>
            <h2 class="card-title">${p.title}</h2>
          </div>
          <a href="${leetcodeLink}" target="_blank" rel="noopener noreferrer" class="leetcode-btn" title="View Problem Details">
            <span>⚡ LeetCode #${p.leetcode}</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
          </a>
        </header>

        <p class="problem-desc">${p.description}</p>

        ${p.inputFormat ? `
        <div class="input-format-box">
          <span class="input-format-label">📥 HackerRank Input:</span>
          <span class="input-format-text">${p.inputFormat}</span>
        </div>
        ` : ''}

        <div class="complexity-pills">
          <div class="complexity-item">
            <span>⏱️ Time:</span>
            <strong>${p.complexity.time}</strong>
          </div>
          <div class="complexity-item">
            <span>💾 Space:</span>
            <strong>${p.complexity.space}</strong>
          </div>
        </div>

        <div class="card-tabs">
          <button class="tab-btn active" data-tab="code" data-target="${cardId}">
            <span>💻 Solution Code</span>
          </button>
          <button class="tab-btn" data-tab="playground" data-target="${cardId}">
            <span>⚡ Live Test & Trace</span>
          </button>
        </div>

        <!-- Tab 1: Solution Code -->
        <div class="tab-content-code" id="${cardId}-code">
          <div class="code-wrapper">
            <div class="code-header">
              <span class="code-lang-label">⚡ C++17 Standalone (HackerRank Ready)</span>
              <button class="copy-btn" data-code="${encodeURIComponent(p.code)}">
                <span>📋 Copy C++ Code</span>
              </button>
            </div>
            <pre class="code-block"><code>${highlightCode(p.code, p.lang)}</code></pre>
          </div>
        </div>

        <!-- Tab 2: Interactive Playground -->
        <div class="tab-content-playground" id="${cardId}-playground" style="display: none;">
          <div class="playground-box">
            <div class="playground-input-row">
              <label>${p.testRunner.inputLabel}</label>
              <div class="playground-input-wrap">
                <input type="text" class="playground-input" id="${cardId}-input" value="${p.testRunner.defaultInput}" placeholder="Enter test input..." />
                <button class="btn btn-primary run-test-btn" data-id="${p.id}" data-card="${cardId}">
                  <span>▶ Run Test</span>
                </button>
              </div>
            </div>
            <div class="playground-output-box" id="${cardId}-output">Click "Run Test" to evaluate input against algorithm logic.</div>
          </div>
        </div>
      </article>
    `;
  }

  // Filter & Render Logic
  function applyFilters() {
    const query = searchQuery.trim().toLowerCase();

    const filtered = PRACTICALS_DATA.filter(item => {
      // Category Filter
      if (currentCategory !== 'all' && item.category !== currentCategory) {
        return false;
      }
      // Language Filter
      if (currentLanguage !== 'all' && item.lang !== currentLanguage) {
        return false;
      }
      // Difficulty Filter
      if (currentDifficulty !== 'all' && item.difficulty !== currentDifficulty) {
        return false;
      }
      // Search Query
      if (query) {
        const matchTitle = item.title.toLowerCase().includes(query);
        const matchId = item.id.toLowerCase().includes(query);
        const matchCategory = item.category.toLowerCase().includes(query);
        const matchDesc = item.description.toLowerCase().includes(query);
        const matchCode = item.code.toLowerCase().includes(query);
        const matchLeetcode = String(item.leetcode).toLowerCase().includes(query);
        if (!matchTitle && !matchId && !matchCategory && !matchDesc && !matchCode && !matchLeetcode) {
          return false;
        }
      }
      return true;
    });

    if (visibleCountEl) {
      visibleCountEl.textContent = `${filtered.length} / ${PRACTICALS_DATA.length}`;
    }

    if (filtered.length === 0) {
      practicalsList.innerHTML = `
        <div class="empty-state">
          <h3>No matching practical problems found</h3>
          <p>Try modifying your search query or resetting filters.</p>
          <button class="btn btn-primary" id="resetFiltersBtn" style="margin-top: 1rem;">Reset All Filters</button>
        </div>
      `;
      const resetBtn = document.getElementById('resetFiltersBtn');
      if (resetBtn) {
        resetBtn.addEventListener('click', () => {
          searchQuery = '';
          currentCategory = 'all';
          currentLanguage = 'all';
          currentDifficulty = 'all';
          if (searchInput) searchInput.value = '';
          if (langFilter) langFilter.value = 'all';
          if (diffFilter) diffFilter.value = 'all';
          filterPills.forEach(p => p.classList.toggle('active', p.dataset.category === 'all'));
          applyFilters();
        });
      }
    } else {
      practicalsList.innerHTML = filtered.map(renderCard).join('');
      attachCardListeners();
    }

    renderTOC(filtered);
    setupScrollSpy();
  }

  // Attach card event listeners
  function attachCardListeners() {
    // Copy button with robust fallback
    document.querySelectorAll('.copy-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const rawCode = decodeURIComponent(btn.getAttribute('data-code'));
        function copyText(text) {
          if (navigator.clipboard && window.isSecureContext) {
            return navigator.clipboard.writeText(text);
          } else {
            const ta = document.createElement('textarea');
            ta.value = text;
            ta.style.position = 'fixed';
            ta.style.left = '-9999px';
            document.body.appendChild(ta);
            ta.focus();
            ta.select();
            return new Promise((resolve, reject) => {
              try {
                document.execCommand('copy') ? resolve() : reject(new Error('execCommand copy failed'));
              } catch (err) {
                reject(err);
              } finally {
                document.body.removeChild(ta);
              }
            });
          }
        }

        copyText(rawCode).then(() => {
          const original = btn.innerHTML;
          btn.innerHTML = '<span>✅ Copied C++ Code!</span>';
          btn.style.borderColor = '#10b981';
          btn.style.color = '#10b981';
          setTimeout(() => {
            btn.innerHTML = original;
            btn.style.borderColor = '';
            btn.style.color = '';
          }, 2000);
        }).catch(err => {
          console.error('Copy failed:', err);
        });
      });
    });

    // Tab buttons (Code vs Playground)
    document.querySelectorAll('.tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const cardId = btn.getAttribute('data-target');
        const tabType = btn.getAttribute('data-tab');
        const parentCard = document.getElementById(cardId);
        if (!parentCard) return;

        parentCard.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const codeTab = document.getElementById(`${cardId}-code`);
        const playTab = document.getElementById(`${cardId}-playground`);

        if (tabType === 'code') {
          if (codeTab) codeTab.style.display = 'block';
          if (playTab) playTab.style.display = 'none';
        } else {
          if (codeTab) codeTab.style.display = 'none';
          if (playTab) playTab.style.display = 'block';
        }
      });
    });

    // Run test button
    document.querySelectorAll('.run-test-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const pracId = btn.getAttribute('data-id');
        const cardId = btn.getAttribute('data-card');
        const inputEl = document.getElementById(`${cardId}-input`);
        const outputEl = document.getElementById(`${cardId}-output`);
        const problem = PRACTICALS_DATA.find(p => p.id === pracId);

        if (problem && problem.testRunner && inputEl && outputEl) {
          try {
            const val = inputEl.value;
            const res = problem.testRunner.run(val);
            outputEl.textContent = res;
            outputEl.style.color = '#38bdf8';
          } catch (err) {
            outputEl.textContent = `Execution Error: ${err.message}`;
            outputEl.style.color = '#f87171';
          }
        }
      });
    });
  }

  // ScrollSpy for TOC
  function setupScrollSpy() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          document.querySelectorAll('.toc-link').forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
          });
        }
      });
    }, {
      rootMargin: '-20% 0px -70% 0px'
    });

    document.querySelectorAll('.practical-card').forEach(card => {
      observer.observe(card);
    });
  }

  // Filter Listeners
  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      filterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      currentCategory = pill.getAttribute('data-category');
      applyFilters();
    });
  });

  if (langFilter) {
    langFilter.addEventListener('change', (e) => {
      currentLanguage = e.target.value;
      applyFilters();
    });
  }

  if (diffFilter) {
    diffFilter.addEventListener('change', (e) => {
      currentDifficulty = e.target.value;
      applyFilters();
    });
  }

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      applyFilters();
    });
  }

  // Global Keyboard Shortcuts
  window.addEventListener('keydown', (e) => {
    if ((e.key === '/' || (e.ctrlKey && e.key === 'k')) && document.activeElement !== searchInput) {
      e.preventDefault();
      searchInput.focus();
      searchInput.select();
    }
    if (e.key === 'Escape' && document.activeElement === searchInput) {
      searchInput.value = '';
      searchQuery = '';
      searchInput.blur();
      applyFilters();
    }
  });

  // Initial Load
  applyFilters();
});
