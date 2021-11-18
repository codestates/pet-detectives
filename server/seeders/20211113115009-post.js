'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // await queryInterface.bulkInsert('posts',[{
      
    let datas = [];

    for(let i = 1; i < 40 ; i++) {
      let boolean = i % 2 === 1
      let region = i % 18
      let foundornot, image, sex, species, name
    
      if(boolean) {
        foundornot = " 찾았다!!"
      } else {
        foundornot = " 못 찾았어..."
      }
      if(i % 3 === 0) { sex="남" ; species="순종"} else if( i % 3 === 1) {sex="여" ; species="잡종"} else { sex = "남" ; species="순종"}
      if(i % 18 === 1) { name= "찰리"; image = "https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"}
      if(i % 18 === 2) { name= "뭉치"; image = "https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"}
      if(i % 18 === 3) { name= "로미"; image = "https://images.unsplash.com/photo-1530126483408-aa533e55bdb2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"}
      if(i % 18 === 4) { name= "칼"; image = "https://images.unsplash.com/photo-1567529684892-09290a1b2d05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"}
      if(i % 18 === 5) { name= "카리스"; image = "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"}
      if(i % 18 === 6) { name= "타미"; image = "https://media.istockphoto.com/photos/furry-dog-smiling-with-tongue-out-picture-id1287452200?b=1&k=20&m=1287452200&s=170667a&w=0&h=1XDHJ1DNyzoZ1fellkNKHhmmORqx2Oqt-PSSFJ4eS50="}
      if(i % 18 === 7) { name= "케이티"; image = "https://images.unsplash.com/photo-1586671267731-da2cf3ceeb80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZG9nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"}
      if(i % 18 === 8) { name= "코아"; image = "https://images.unsplash.com/photo-1583511655826-05700d52f4d9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZG9nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"}
      if(i % 18 === 9) { name= "투투"; image = "https://images.unsplash.com/photo-1517849845537-4d257902454a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGRvZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"}
      if(i % 18 === 10) { name= "타로"; image = "https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGRvZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"}
      if(i % 18 === 11) { name= "티티"; image = "https://images.unsplash.com/photo-1546527868-ccb7ee7dfa6a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHVwcHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"}
      if(i % 18 === 12) { name= "키키"; image = "https://images.unsplash.com/photo-1593134257782-e89567b7718a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHVwcHl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"}
      if(i % 18 === 13) { name= "뭉치"; image = "https://images.unsplash.com/photo-1512723185835-0700e5069a9a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHB1cHB5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"}
      if(i % 18 === 14) { name= "몽실"; image = "https://images.unsplash.com/photo-1574293876203-8bded53be0f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"}
      if(i % 18 === 15) { name= "탄이"; image = "https://images.unsplash.com/photo-1618359960102-8f4d3c1a3fae?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fHB1cHB5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"}
      if(i % 18 === 16) { name= "보스"; image = "https://media.istockphoto.com/photos/young-man-is-playing-with-a-dog-and-do-selfie-picture-id1300658241?b=1&k=20&m=1300658241&s=170667a&w=0&h=0lrTViinfnDjbWDgxV0TDDSAXvzSgmrN-pKq0q60hqA="}
      if(i % 18 === 17) { name= "매직"; image = "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9nc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"}

      let obj = {
        image: image,
        description: foundornot,
        pet_name: name,
        pet_sex: sex,
        pet_age: i%10,
        pet_category: species,
        pet_lost_date:"2021-10-30",
        pet_lost_region: region,
        is_found: boolean,
        createdAt: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, ''),
        updatedAt: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')
      }
      datas.push(obj)
    }

  for(let i = 1; i < 40 ; i++) {
      let boolean = i % 2 === 0
      let region = i % 18
      let foundornot, image, sex, species, name
      
      if(boolean) {
        foundornot = " 찾았다!!"
      } else {
        foundornot = " 못 찾았어..."
      }
      if(i % 3 === 0) { sex="남" ; species="잡종"} else if( i % 3 === 1) {sex="여" ; species="순종"} else { sex = "남" ; species="순종"}
      if(i % 18 === 1) { name= "뽀"; image = "https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"}
      if(i % 18 === 2) { name= "유니"; image = "https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"}
      if(i % 18 === 3) { name= "시드니"; image = "https://images.unsplash.com/photo-1530126483408-aa533e55bdb2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"}
      if(i % 18 === 4) { name= "쎄삐"; image = "https://images.unsplash.com/photo-1567529684892-09290a1b2d05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"}
      if(i % 18 === 5) { name= "워리"; image = "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"}
      if(i % 18 === 6) { name= "오동"; image = "https://media.istockphoto.com/photos/furry-dog-smiling-with-tongue-out-picture-id1287452200?b=1&k=20&m=1287452200&s=170667a&w=0&h=1XDHJ1DNyzoZ1fellkNKHhmmORqx2Oqt-PSSFJ4eS50="}
      if(i % 18 === 7) { name= "은별"; image = "https://images.unsplash.com/photo-1586671267731-da2cf3ceeb80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZG9nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"}
      if(i % 18 === 8) { name= "바다"; image = "https://images.unsplash.com/photo-1583511655826-05700d52f4d9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZG9nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"}
      if(i % 18 === 9) { name= "피터"; image = "https://images.unsplash.com/photo-1517849845537-4d257902454a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGRvZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"}
      if(i % 18 === 10) { name= "파파"; image = "https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGRvZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"}
      if(i % 18 === 11) { name= "담비"; image = "https://images.unsplash.com/photo-1546527868-ccb7ee7dfa6a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHVwcHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"}
      if(i % 18 === 12) { name= "렉스"; image = "https://images.unsplash.com/photo-1593134257782-e89567b7718a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHVwcHl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"}
      if(i % 18 === 13) { name= "리차드"; image = "https://images.unsplash.com/photo-1512723185835-0700e5069a9a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHB1cHB5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"}
      if(i % 18 === 14) { name= "로미오";image = "https://images.unsplash.com/photo-1574293876203-8bded53be0f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"}
      if(i % 18 === 15) { name= "네로"; image = "https://images.unsplash.com/photo-1618359960102-8f4d3c1a3fae?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fHB1cHB5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"}
      if(i % 18 === 16) { name= "노기"; image = "https://media.istockphoto.com/photos/young-man-is-playing-with-a-dog-and-do-selfie-picture-id1300658241?b=1&k=20&m=1300658241&s=170667a&w=0&h=0lrTViinfnDjbWDgxV0TDDSAXvzSgmrN-pKq0q60hqA="}
      if(i % 18 === 17) { name= "나타샤"; image = "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9nc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"}
      
      let obj = {
        image: image,
        description: foundornot,
        pet_name: name,
        pet_sex: sex,
        pet_age: i%10,
        pet_category: species,
        pet_lost_date:"2021-10-30",
        pet_lost_region: region,
        is_found: boolean,
        createdAt: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, ''),
        updatedAt: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')
      }
      datas.push(obj)
    }

    return queryInterface.bulkInsert('posts', datas, {});

   
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('posts',null,{})
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};