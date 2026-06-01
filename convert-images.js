import sharp from 'sharp';
import { readdir } from 'fs/promises';
import { join } from 'path';

const imagesToConvert = [
  { input: 'client/public/Logo.png', output: 'client/public/Logo.webp', quality: 90 },
  { input: 'client/public/Vini.jpeg', output: 'client/public/Vini.webp', quality: 85 },
  { input: 'client/public/Renata.jpeg', output: 'client/public/Renata.webp', quality: 85 },
  { input: 'client/public/Edvelton.jpeg', output: 'client/public/Edvelton.webp', quality: 85 },
];

async function convertImages() {
  console.log('🖼️  Convertendo imagens para WebP...\n');
  
  for (const img of imagesToConvert) {
    try {
      const inputPath = join(process.cwd(), img.input);
      const outputPath = join(process.cwd(), img.output);
      
      await sharp(inputPath)
        .webp({ quality: img.quality })
        .toFile(outputPath);
      
      const inputStats = await sharp(inputPath).metadata();
      const outputStats = await sharp(outputPath).metadata();
      
      console.log(`✅ ${img.input.split('/').pop()}`);
      console.log(`   → ${img.output.split('/').pop()}`);
      console.log(`   Redução: ~${Math.round((1 - outputStats.size / inputStats.size) * 100)}%\n`);
    } catch (error) {
      console.error(`❌ Erro ao converter ${img.input}:`, error.message);
    }
  }
  
  console.log('✨ Conversão concluída!');
}

convertImages();
