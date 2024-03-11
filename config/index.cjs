/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx6fbdf919b4df4483',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '0bdf3abbdef7f1059087cc57ca190cb9',

  PROVINCE: '',
  CITY: '郑州',

  USERS: [
    {
      // 想要发送的人的名字
      name: '宝贝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oca6d6EV4mIEyeFSH4yXpMHqrlNg',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'Ha1gRJpciC-oYWxmGjX-iS1mqwCrQ2wWw7pvF_1CQSc',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '09-08',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '宝贝', year: '2002', date: '01-24',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
      //  {
        //  type: '生日', name: '巧儿', year: '2002', date: '01-08',
      //  },
       // {
        //  type: '节日', name: '相识纪念日', year: '2024', date: '02-16',
        //},
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
         { keyword: 'meet_day', date: '2024-02-16' },
        // 在一起的日子
        { keyword: 'love_day', date: '2024-03-09' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2024-03-09' },
        
        { keyword: 'wx_birthday_0', date: '2002-01-09' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'Fszfn-54NZAhkXneHQ8IOYJBdMl54zqyXo6f2gE7yhc',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oca6d6L8Wy8Hzds7qnIVAl5VT_L0',
    }
  ],

}

module.exports = USER_CONFIG

