/*
1.常用命令
git init//初始化git
git status//查看仓库的状态
git add 文件名//添加到缓存区
git add . //把当前所有文件都添加到缓存区
git status//查看仓库的状态
git commit -m '提交本次版本的时候的备注提示信息'//提交本次版本
2.分支
git branch//查看当前分支状态
git branch 新分支名A //创建新的分支
git branch//查看当前分支状态
git checkout 分支名A //切换到分支A
//在分分支上面提交的文件不会在主分支上面显示，需要用merge命令同步
git branch //查看当前在哪个分支上，在A分支上创建并提交文件之后，要合并的时候，一定要切换到需要合并的那个分支上
//比如要把分支 B 的文件提交到分支 A 上，则需要先切换当前分支为 A 分支，然后再执行git merge B 命令
git merge 分支名A //把A上提交的文件合并到主分支上
git branch -d 分支名A //删除分支A

*/