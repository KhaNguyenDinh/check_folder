const fs = require('fs');
const path = require('path');

const baseDir = 'C:\\FTTP'; // 🔁 Đường dẫn gốc

function listAllFolders(dirPath, depth = 0) {
    if (!fs.existsSync(dirPath)) return;

    const items = fs.readdirSync(dirPath, { withFileTypes: true });

    items.forEach(item => {
        if (item.isDirectory()) {
            const folderPath = path.join(dirPath, item.name);
            const indent = '  '.repeat(depth); // tạo thụt dòng theo cấp
            console.log(`${indent}- ${folderPath}`);
            listAllFolders(folderPath, depth + 1); // đệ quy
        }
    });
}

console.log(`📂 Danh sách tất cả thư mục con trong: ${baseDir}`);
listAllFolders(baseDir);
