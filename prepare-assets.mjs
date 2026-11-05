import sharp from 'sharp';import {copyFile} from 'node:fs/promises';
const root='/Users/andreyyarovoy/Desktop/туры/';
await sharp(root+'My photo/Bearded Man in Charcoal Tee.png').resize(800).webp({quality:85}).toFile('public/assets/profile/andrii.webp');
for(const [src,dest] of [['gym/Screenshot 2569-11-03 at 06.55.07.png','gym'],['gym/Screenshot 2569-11-03 at 06.55.25.png','gym-stock']])await sharp(root+src).resize(1600).webp({quality:85}).toFile('public/assets/projects/'+dest+'.webp');
await sharp(root+'tour-china-web/Screenshot 2569-11-03 at 08.38.56.png').resize(1600).webp({quality:88}).toFile('public/assets/projects/china.webp');
await sharp(root+'tour-china-web/Screenshot 2569-11-03 at 08.37.17.png').resize(1600).webp({quality:88}).toFile('public/assets/projects/china-catalog.webp');
await sharp(root+'tour-finance/Screenshot 2569-11-03 at 07.10.55.png').resize(1600).webp({quality:88}).toFile('public/assets/projects/finance.webp');
await copyFile(root+'My photo/Энди на Великой Китайской стене_720p.mp4','public/assets/avatar/demo.mp4');
