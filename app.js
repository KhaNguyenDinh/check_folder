const fs = require('fs');
const path = require('path');

const baseDir = 'C:\\DATA'; // 🔁 Đường dẫn đến thư mục cha

function listSubFolders(dirPath) {
    if (!fs.existsSync(dirPath)) {
        console.log(`❌ Thư mục không tồn tại: ${dirPath}`);
        return;
    }

    const items = fs.readdirSync(dirPath, { withFileTypes: true });

    const folders = items
        .filter(item => item.isDirectory())
        .map(item => path.join(dirPath, item.name));

    if (folders.length === 0) {
        console.log('📁 Không có thư mục con nào.');
    } else {
        console.log('📁 Các thư mục con hiện có:');
        folders.forEach(folder => {
            console.log(' -', folder);
        });
    }
}

// Gọi hàm
listSubFolders(baseDir);
