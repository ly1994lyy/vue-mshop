import axios from 'axios'

const data = ["手机数码", "电脑办公", "家用电器", "计生情趣", "美妆护肤", "个护清洁", "汽车生活", "京东超市", "男装", "男鞋", "女装", "女鞋", "母婴童装", "图书音像", "运动户外", "内衣配饰", "食品生鲜", "酒水饮料", "家具家装", "家居厨具", "箱包手袋", "钟表珠宝", "玩具乐器", "医药保健", "宠物生活", "礼品鲜花", "农资绿植", "生活旅行", "奢侈品", "京东国际", "艺术邮币", "二手商品", "特产馆", "京东金融", "国际名牌", "拍卖", "房产", "工业品"]

export const insertData = ()=>{
    data.forEach(el => {
        axios.post('https://user.api.it120.cc/user/apiExtShopGoodsCategory/save',{
            dialogTitle: '增加分类',
            dialogFormVisible: true,
            name: el,
            pid: 0,
            isUse: true,
            paixu: 0,
            extJsonStr: {},
        })
    });
    return 'success'
}

