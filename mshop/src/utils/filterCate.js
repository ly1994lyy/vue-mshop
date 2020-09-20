
function setTreeData(source){
    let cloneData = JSON.parse(JSON.stringify(source))      // 对源数据深度克隆
    return  cloneData.filter(father=>{                      // 循环所有项，并添加children属性
        let branchArr = cloneData.filter(child=> father.id == child.pid);   // 返回每一项的子级数组
        branchArr.length>0 ? father.children=branchArr : ''   //给父级添加一个children属性，并赋值
        return father.pid==0;      //返回第一层
    });
}

export {
    setTreeData
}