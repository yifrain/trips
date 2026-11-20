#!/bin/bash
# 把各次旅行的 web/ 同步到 _site 里，然后提交并推送。
# 用法：在 _site 目录里运行 ./sync.sh
set -e
cd "$(dirname "$0")"
TRIPS=".."

# 旅行文件夹 → 网址里的子目录名（以后新增旅行在这里加一行）
sync_trip() { rsync -a --delete "$TRIPS/$1/web/" "./$2/"; }
sync_trip "2026-12_Rome-Naples" "rome-naples"

git add -A
if git diff --cached --quiet; then
  echo "没有改动，不用推送。"
else
  git commit -m "Update trips $(date +%Y-%m-%d)"
  git push
  echo "已推送，1–2 分钟后网站更新。"
fi
