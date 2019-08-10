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
3.上传GitHub
git remote add origin 远端仓库地址 //链接到远端的GitHub仓库，此过程之前需要把传递文件提交到本地仓库中，git commit -m '';
git push -u origin master //提交到远程仓库中（第一次提交的时候这么操作，之后的额操作直接用 git push）
git pull //把远端的文件拉取到本地 
4.github远端管理
git push --set-upstream origin 分支名 A  //创建远端分支关联（在此之前一定在在本地端创建分支A）
git push origin --delete 分支名A //删除远端分支A
5.clone到本地
//先在项目的clone or download 选项找到仓库地址，然后
git clone 仓库地址  //把项目克隆到本地

*/