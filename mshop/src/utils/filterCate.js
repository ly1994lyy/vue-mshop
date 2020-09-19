const filterCate = (data)=>{
    return data.filter(cate=>{
        return cate.level===1
    })
}

const filterCateChild = (data,id)=>{
    const lv2 = data.filter(cate=>{
        return cate.level===2
    })

    const lv3 = data.filter(cate=>{
        return cate.level===3
    })

    const child = lv2.map(item=>{
         if(item.pid===id){
            return {
                title:item,
                child:lv3.filter(e=>{
                    return e.pid ===item.id
                })
            }
         }
         return
    })

    return child
}

export {
    filterCate,
    filterCateChild
}