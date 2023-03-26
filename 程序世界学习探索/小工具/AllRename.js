/* 
    因为很多课程文件后缀都有广告后缀,如【更多IT教程 微信javago6666】,所以写下了这个小工具,他会批量遍历根目录下所有文件夹下的文件,然后去除指定字符串.
    2023.3.23
*/
const fs = require('fs');
const path = require('path');
const delName = '(更多IT教程 微信javago6666)';
let count = 0;
let root = path.join(__dirname);

// 重命名文件名
function fileRename(oldName,filePath,isDir=false){
    if(oldName.indexOf(delName) == -1) return;
    // 剔除指定字符串
    let newName = oldName.replace(delName,'');
    // 是否是文件夹
    if(!isDir){
        oldName = path.join(filePath,oldName);
        newName = path.join(filePath,newName);
    }else{
        console.log(oldName,newName);
    }
    // 重命名
    fs.renameSync(oldName,newName,(err)=>{
        if(err){
            throw err;
        }
    })
    count++;
}


readDirSync(root);
// 递归遍历读取文件和各级文件夹
function readDirSync(readPath){
    let pa = fs.readdirSync(readPath);
    pa.forEach((element)=>{
        let info = fs.statSync(readPath+'/'+element);
        // 判断是否是文件夹
        if(info.isDirectory()){
            // 递归往下读取文件夹
            readDirSync(readPath+'/'+element);
            // 文件夹重命名
            // console.log();
            fileRename(path.join(readPath,element),path.join(readPath,element),true);
        }else{
            // 文件重命名
            fileRename(element,readPath);
        }
    })
}
console.log('净化名称数量:'+count);