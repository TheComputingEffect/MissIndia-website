import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import fs from 'fs'
import path from 'path'

// Automated asset synchronization script
try {
  const brainDir = "C:\\Users\\ARAVINDHAN\\.gemini\\antigravity\\brain\\d0f89bd5-fff2-45a5-bf1c-3c10037c261b";
  const destDir = path.resolve('./public/images');
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }
  if (fs.existsSync(brainDir)) {
    const files = fs.readdirSync(brainDir);
    files.forEach(file => {
      if (file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.webp')) {
        const srcPath = path.join(brainDir, file);
        let destName = file;
        
        // Standardize filenames based on prefix matching
        if (file.startsWith('baby_shower_stage')) destName = 'baby_shower_stage.png';
        else if (file.startsWith('baby_shower_backdrop')) destName = 'baby_shower_backdrop.png';
        else if (file.startsWith('baby_shower_dessert')) destName = 'baby_shower_dessert.png';
        else if (file.startsWith('baby_shower_welcome')) destName = 'baby_shower_welcome.png';
        else if (file.startsWith('baby_shower_family')) destName = 'baby_shower_family.png';
        
        else if (file.startsWith('puberty_girl_stage')) destName = 'puberty_girl_stage.png';
        else if (file.startsWith('puberty_family_blessing')) destName = 'puberty_family_blessing.png';
        else if (file.startsWith('puberty_girl_portrait')) destName = 'puberty_girl_portrait.png';
        else if (file.startsWith('puberty_ceremony_stage')) destName = 'puberty_ceremony_stage.png';
        else if (file.startsWith('puberty_stage')) destName = 'puberty_stage.png';
        else if (file.startsWith('puberty_halfsaree')) destName = 'puberty_halfsaree.png';
        else if (file.startsWith('puberty_entrance')) destName = 'puberty_entrance.png';
        else if (file.startsWith('puberty_seating')) destName = 'puberty_seating.png';
        
        else if (file.startsWith('surprise_proposal')) destName = 'surprise_proposal.png';
        else if (file.startsWith('surprise_rooftop')) destName = 'surprise_rooftop.png';
        else if (file.startsWith('surprise_anniversary')) destName = 'surprise_anniversary.png';
        else if (file.startsWith('surprise_reaction')) destName = 'surprise_reaction.png';

        const destPath = path.join(destDir, destName);
        fs.copyFileSync(srcPath, destPath);
      }
    });
  }
} catch (e) {
  console.error("Vite Asset Sync Error:", e);
}

// https://vite.dev/config/
// Asset sync trigger timestamp: 2026-06-01T15:00:00
export default defineConfig({
  plugins: [react(), tailwindcss()],
})
