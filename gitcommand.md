git checkout -b task10

git add .
git commit -m "task10"
git push origin task10

git checkout main
git pull origin main
git merge task10
git push origin master