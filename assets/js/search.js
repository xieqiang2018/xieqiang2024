// 搜索功能实现
// 基于 Jekyll 生成的 JSON 文件进行客户端搜索

(function() {
  let searchData = null;
  const searchInput = document.getElementById('search-input');
  const searchResults = document.getElementById('search-results');

  // 加载搜索索引
  async function loadSearchData() {
    if (searchData) return searchData;
    
    try {
      const response = await fetch('/search.json');
      searchData = await response.json();
      return searchData;
    } catch (e) {
      console.error('加载搜索数据失败:', e);
      return [];
    }
  }

  // 执行搜索
  async function search(query) {
    if (!query || query.length < 2) {
      searchResults.innerHTML = '';
      return;
    }

    const data = await loadSearchData();
    const results = data.filter(item => {
      const searchText = (item.title + ' ' + item.content + ' ' + item.tags + ' ' + item.categories).toLowerCase();
      return searchText.includes(query.toLowerCase());
    });

    displayResults(results, query);
  }

  // 显示搜索结果
  function displayResults(results, query) {
    if (results.length === 0) {
      searchResults.innerHTML = '<p>没有找到相关内容</p>';
      return;
    }

    const html = results.map(item => `
      <div class="search-result">
        <a href="${item.url}">${highlightText(item.title, query)}</a>
        <p>${item.excerpt || ''}</p>
      </div>
    `).join('');

    searchResults.innerHTML = html;
  }

  // 高亮关键词
  function highlightText(text, query) {
    const regex = new RegExp(`(${query})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
  }

  // 防抖搜索
  let debounceTimer;
  function debounceSearch(query) {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => search(query), 300);
  }

  // 绑定事件
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      debounceSearch(e.target.value.trim());
    });
  }
})();
