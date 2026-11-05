import sharp from 'sharp';
const input='/Users/andreyyarovoy/Desktop/туры/CRM-tour-china/Screenshot 2569-11-03 at 15.09.12.png';
await sharp(input).resize(1600).webp({quality:88}).toFile('public/assets/projects/crm.webp');
await sharp('public/assets/profile/andrii.webp').resize(1200,700,{fit:'cover',position:'attention'}).webp({quality:85}).toFile('public/assets/projects/avatar.webp');
