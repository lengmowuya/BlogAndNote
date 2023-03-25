/* 
    因为很多课程文件后缀都有广告后缀,如【更多IT教程 微信javago6666】,所以写下了这个小工具,他会批量遍历根目录下所有文件夹下的文件,然后去除指定字符串.
    2023.3.23
*/


const fs = require('fs');
const path = require('path');
const delName = '【更多IT教程 微信javago6666】';
let count = 0;
let root = path.join(__dirname);

// 重命名文件名
function fileRename(oldName,filePath,del=delName){
    oldName = path.join(filePath,oldName);
    // 剔除指定字符串
    let newName = oldName.replace(del,'');
    newName = path.join(filePath,newName);
    // 重命名
    fs.renameSync(oldName,newName,(err)=>{
        if(err) throw err;
        count+=1;
    })
}


readDirSync(root);
// 读取文件
function readDirSync(readPath){
    let pa = fs.readdirSync(readPath);
    pa.forEach((element)=>{
        let info = fs.statSync(readPath+'/'+element);
        // 判断是否是文件夹
        if(info.isDirectory()){
            // 递归往下读取文件夹
            readDirSync(readPath+'/'+element);
        }else{
            // 文件重命名
            fileRename(element,readPath);
        }
    })
}
console.log('净化文件名数量:'+count);

