# !/bin/bash  

# mac需要添加 chmod +x deploy.command 给权限      

echo "开始执行shell"



cd FE

pwd


echo 开始 build gatsby
gatsby build
echo build 完成





echo                                      GitHub自动上传脚本
echo ================================================================================

cd ..

cur_dateTime="`date +%Y-%m-%d,%H:%m:%s`"    #  获取当前日期和时间


git pull
git add .
git commit -m $cur_dateTime
git push origin master


echo ================================================================================
echo                                      更新完毕


echo 开始 清除public

cd FE
gatsby clean

echo 清除 完成


# killall Terminal                                #关闭 terminal
exit 0                                       # 返回一个零退出状态，退出shell程序
