/*
1.常用命令
git init//初始化git
git status//查看仓库的状态
git add 文件名//添加到缓存区
git add . //代表把当前所有的文件添加到缓存区里
git status//查看仓库的状态
git commit -m '提交本次版本的时候的备注提示信息'//提交本次版本,已经被托管
2.分支
git branch//查看当前分支状态
git branch 新分支名A//创建新的分支
git branch//查看当前分支状态
git checkout 分支名A//切换分支
//在分分支上面提交的文件不会在主分支上显示
git branch//查看在哪个分支上,在A分支上创建文件之后提交，要合并的时候，一定要切换到需要合并的那个分支上
//比如要把分支B上提交的文件提交到分支A 上，则需要先切换当前分支为A分支，然后再执行git merge B 命令
git merge 分支名A//把分支A上的文件合并到主分支当中







*/