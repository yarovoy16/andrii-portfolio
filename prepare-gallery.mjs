import sharp from 'sharp';
const root='/Users/andreyyarovoy/Desktop/туры/';
await sharp(root+'gym/Screenshot 2569-11-03 at 06.55.42.png').extract({left:0,top:0,width:3298,height:1535}).resize(1800).webp({quality:88}).toFile('public/assets/projects/gym-shift.webp');
await sharp(root+'tour-finance/Screenshot 2569-11-03 at 07.11.53.png').resize(1600).webp({quality:88}).toFile('public/assets/projects/finance-expenses.webp');
await sharp(root+'CRM-tour-china/Screenshot 2569-11-03 at 15.11.27.png').resize(1600).webp({quality:88}).toFile('public/assets/projects/crm-overview.webp');
