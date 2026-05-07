# rubyngoc

npm run package:site

https://codebeautify.org/javascript-obfuscator#

Thêm ảnh/video kỷ niệm:

1. Copy ảnh hoặc video vào `src/media/YYYY/MM/DD/`.
2. Nếu muốn đặt tiêu đề hoặc mô tả riêng, sửa `title` / `caption` của media tương ứng trong `src/media-manifest.json`.
3. Chạy `npm run media:manifest` hoặc `npm run build` để tự quét media và tạo thumbnail WebP. Video sẽ dùng `ffmpeg` để tạo poster nếu máy có cài; nếu không, slider vẫn mở được video bằng file gốc.

Chọn ảnh nổi bật theo năm:

1. Mở `src/featured-media.json`.
2. Mỗi năm giữ khoảng 3-5 đường dẫn ảnh trong `photos`.
3. Chạy lại `npm run build`.

Kỷ Niệm Ngày Cưới Theo Năm

| Năm    | Tên tiếng Việt         | Tên quốc tế                   |
| ------ | ---------------------- | ----------------------------- |
| 1 năm  | Đám cưới Giấy          | Paper Anniversary             |
| 2 năm  | Đám cưới Bông          | Cotton Anniversary            |
| 3 năm  | Đám cưới Da            | Leather Anniversary           |
| 4 năm  | Đám cưới Trái cây và Hoa | Fruit and Flowers Anniversary |
| 5 năm  | Đám cưới Gỗ            | Wood Anniversary              |
| 6 năm  | Đám cưới Sắt           | Iron Anniversary              |
| 7 năm  | Đám cưới Len           | Wool Anniversary   |
| 8 năm  | Đám cưới Đồng          | Bronze Anniversary            |
| 9 năm  | Đám cưới Gốm           | Pottery Anniversary           |
| 10 năm | Đám cưới Thiếc         | Tin Anniversary   |
| 15 năm | Đám cưới Pha lê        | Crystal Anniversary           |
| 20 năm | Đám cưới Sứ            | China Anniversary             |
| 25 năm | Đám cưới Bạc           | Silver Anniversary            |
| 30 năm | Đám cưới Ngọc trai     | Pearl Anniversary             |
| 35 năm | Đám cưới San hô        | Coral Anniversary             |
| 40 năm | Đám cưới Hồng ngọc     | Ruby Anniversary              |
| 45 năm | Đám cưới Sapphire      | Sapphire Anniversary          |
| 50 năm | Đám cưới Vàng          | Gold Anniversary              |
| 55 năm | Đám cưới Ngọc lục bảo  | Emerald Anniversary           |
| 60 năm | Đám cưới Kim cương     | Diamond Anniversary           |
| 70 năm | Đám cưới Bạch kim      | Platinum Anniversary          |
| 80 năm | Đám cưới Sồi           | Oak Anniversary               |
