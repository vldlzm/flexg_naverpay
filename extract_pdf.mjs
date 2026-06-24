import { pdf } from 'pdf-img-convert';
import { writeFileSync } from 'fs';

const pdfPath = 'C:/Users/최혜선/Desktop/네이버페이주문형.pdf';
const outDir = 'c:/Users/최혜선/Desktop/flexg_naverpay/images';

const pages = [6, 7, 8, 9, 10, 11];
const names = [
  'kyc_popup',
  'kyc_info',
  'kyc_biz_info',
  'kyc_ceo_info',
  'kyc_doc_submit',
  'kyc_review_request'
];

for (let i = 0; i < pages.length; i++) {
  const imgs = await pdf(pdfPath, { page_numbers: [pages[i]], scale: 2.0 });
  writeFileSync(`${outDir}/${names[i]}.png`, imgs[0]);
  console.log(`Saved ${names[i]}.png`);
}

console.log('Done');
