// 站点配置：改这里即可全局更新名字 / GitHub / 项目链接
window.SITE = {
  name: "redmi",
  title: "redmi的运维笔记",
  github: "sakura44u",
  githubUrl: "https://github.com/sakura44u",
  email: "", // 可填写你的邮箱，留空则不显示
  role: "IT 运维 / DevOps 方向 · 应届生",
  tagline: "专注系统运维、监控告警与自动化部署，用代码把重复的运维工作自动化。",
  projects: [
    {
      name: "OpsMonitor",
      emoji: "📊",
      repo: "ops-monitor",
      desc: "轻量级系统监控与告警平台：采集 CPU/内存/磁盘/网络指标，Web 仪表盘 + 阈值告警（邮件/Webhook）。",
      tech: ["Python", "FastAPI", "psutil", "SQLite", "Chart.js"],
      url: "https://github.com/sakura44u/ops-monitor",
    },
    {
      name: "OpsToolkit",
      emoji: "🧰",
      repo: "ops-toolkit",
      desc: "自动化运维脚本工具箱：日志轮转、数据备份、健康检查、磁盘清理、进程守护、一键部署等 8 个脚本。",
      tech: ["Python", "Shell", "标准库", "cron"],
      url: "https://github.com/sakura44u/ops-toolkit",
    },
    {
      name: "DevOps-CICD",
      emoji: "🐳",
      repo: "devops-cicd",
      desc: "容器化部署与 CI/CD 流水线示例：Docker 多阶段构建 + Nginx 反向代理 + GitHub Actions 自动构建部署。",
      tech: ["Docker", "docker-compose", "Nginx", "GitHub Actions", "FastAPI"],
      url: "https://github.com/sakura44u/devops-cicd",
    },
  ],
};
