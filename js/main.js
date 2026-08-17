// 全站通用脚本：高亮当前导航、填充年份、从 config.js 渲染项目卡片
document.addEventListener("DOMContentLoaded", () => {
  // 当前页文件名（用于高亮导航）
  const page = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll("nav a").forEach((a) => {
    if (a.getAttribute("href") === page) a.classList.add("active");
  });

  // 页脚年份
  document.querySelectorAll(".year").forEach((el) => {
    el.textContent = new Date().getFullYear();
  });

  // 渲染项目卡片（读取 js/config.js 的 window.SITE.projects）
  const grid = document.getElementById("projects-grid");
  if (grid && window.SITE) {
    const gh = window.SITE.github;
    grid.innerHTML = window.SITE.projects
      .map(
        (p) => `
      <div class="card project-card">
        <div class="pc-top">
          <span class="pc-emoji">${p.emoji}</span>
          <span class="repo">${gh}/${p.repo}</span>
        </div>
        <h3><a href="${p.url}" target="_blank" rel="noopener">${p.name}</a></h3>
        <p class="desc">${p.desc}</p>
        <div class="tech">${p.tech.map((t) => `<span>${t}</span>`).join("")}</div>
        <div class="links"><a href="${p.url}" target="_blank" rel="noopener">源码 ↗</a></div>
      </div>`
      )
      .join("");
  }
});
