const fs = require('fs');
// const path = requrie('path')
// 读取目录下的所有文件，返回数组
// 参数（文件路径，要添加到的数组，第一次是否扫描文件）
let FileLevel = 0;
function GetFiles(path,filesList,allowFiles,parents=null){
    FileLevel++;
    let files = fs.readdirSync(path);
    files.forEach(walk);
    function walk(file){
        states = fs.statSync(path+'/'+file);
        sonCountText='';
        if(states.isDirectory()){
            // 扫描的是文件夹
            let NewDir = {
                size:states.size,
                name:file,
                path:path+'/'+file,
                type:2,
                level:FileLevel,
                selfText:'',
                countText:'',
                child:[],
                push:(content)=>{
                    NewDir.countText+='\n'+content;
                },
                pushParents:()=>{
                    if(parents == null)  return;
                    // console.log(NewDir.countText);
                    parents.countText = parents.countText + '\n'+ NewDir.countText;
                    if(parents.pushParents) parents.pushParents();
                }
            };
            NewDir.selfText = MarkDown.createTitle(NewDir.name,NewDir.level);
            NewDir.countText = NewDir.selfText;
            sonCountText =  NewDir.countText;
            // 扫描出来是特殊文件夹则跳出
            if(NewDir.name=='.git') return;
            filesList.push(NewDir);
            GetFiles(path+'/'+file,NewDir.child,true,NewDir);
            parents.push(NewDir.countText);
        }else{
            // 不扫描文件则跳出
            if(!allowFiles) return;
            let NewFile = {
                size:states.size,
                name:file,
                path:path+'/'+file,
                type:1,
                level:FileLevel,
                selfText:''
            };
            NewFile.selfText = MarkDown.createLink(NewFile.name,NewFile.path,NewFile.level);
            sonCountText =  NewFile.selfText;
            structure.size+=NewFile.size;
            structure.fileNumber++;
            filesList.push(NewFile);

            if(parents == null || parents.pushParents == undefined)  return;
            parents.push(sonCountText);
        }
    }
    FileLevel--;
}
// 将结构写成JSON文件
function WriteJSON(Content){
    fs.writeFile('./directory.json',Content,(err)=>{
        if(err) console.log("！结构JSON写入失败："+err.message);
        console.log("结构JSON写入成功...");
    });
}
const MarkDown = {
    // 创建标题（标题内容，标题级别）
    createTitle:(title,level=1)=>{
        let format = `# ${title}`
        for(let i=0;i<level;i++){
            format = "#"+format;
        }
        for(let i=0;i<level;i++){
            format = "--"+format;
        }
        return format;
    },
    // 创建链接（链接名称，链接）
    createLink:(name,link='./',level)=>{
        let format = `- [${name}](${link})`
        for(let i=0;i<level;i++){
            format = "--"+format;
        }
        return format;
    }
}

// 写入首页MarkDown
function WriteIndexMarkDown(content){
    fs.writeFile('./index.md',content,err=>{
        if(err) console.log("！首页MarkDown写入失败"+err.message);
        console.log("首页MarkDown写入成功...")
    })
}
let structure = {
    directory:[],
    time:0,
    fileNumber:0,
    size:0,
    countText:'## 冷漠乌鸦的站点',
    push:(content)=>{
        structure.countText+=' \n '+content;
    }
};
// let IndexMarkDown = '';
structure.time = Date.now();
GetFiles('./',structure.directory,false,structure);
console.log('总大小'+(structure.size/1024).toFixed(2)+'KB');
console.log('总文件数'+structure.fileNumber);
WriteJSON(JSON.stringify(structure));
WriteIndexMarkDown(structure.countText);