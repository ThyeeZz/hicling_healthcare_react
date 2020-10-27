import Mock from 'mockjs';
const Random = Mock.Random;
const userList = [];

/*
  'Boolean': Random.boolean, // 随机生成布尔类型
  'Natural': Random.natural(1, 100), // 随机生成1到100之间自然数
  'Integer': Random.integer(1, 100), // 生成1到100之间的整数
  'Float': Random.float(0, 100, 0, 5), // 生成0到100之间的浮点数,小数点后尾数为0到5位
  'Character': Random.character(), // 生成随机字符串,可加参数定义规则
  'String': Random.string(2, 10), // 生成2到10个字符之间的字符串
  'Range': Random.range(0, 10, 2), // 生成一个数组，数组元素从0开始到10结束，间隔为2
  'Date': Random.date(), // 生成一个随机日期,可加参数定义日期格式，默认yyyy-mm-dd
  'Image1': Random.image(Random.size, '#02adea', '#fff', 'png', 'Hello'), // Random.size表示将从size数据中任选一个数据，生成Random.size指定大小的，背景为'#02adea'的，前景色为'#fff'的，格式为'png'的，内容为'Hello'的图片。
  'Image2': Random.dataImage('200x100', 'Hello Mock.js!'), //只设置大小
  'Color': Random.color(), // 生成一个颜色随机值
  'Paragraph': Random.paragraph(2, 5), //生成2至5个句子的文本
  'Name': Random.name(), // 生成姓名
  'Url': Random.url(), // 生成url地址
  'Address': Random.province() // 生成地址
*/

let i = 0;
while (i < 12) {
  userList.push({
    "name": Random.name(),
    "deviceId": Random.integer(0, 3),
    "hr": Random.integer(60, 150),
    "cal": Random.integer(100, 2000),
    'sleepTotal': Random.integer(4, 9),
    'hbp': Random.integer(100, 130),
    'lbp': Random.integer(60, 90),
    "step": Random.integer(100, 1000),
    'temp':Random.float(35.0,37.0,1) 
  })
  i++
}

Mock.mock('/api/users','post',userList);