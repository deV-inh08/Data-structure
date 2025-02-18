# Cấu trúc dữ liệu Mảng (Array)

## 1. Giới thiệu
**Mảng (Array)** là một cấu trúc dữ liệu dùng để lưu trữ một danh sách các phần tử cùng kiểu dữ liệu, được định danh bằng chỉ số index. Mảng là một trong những cấu trúc dữ liệu cơ bản nhất trong lập trình.

## 2. Cách hoạt động
- Mỗi phần tử trong mảng được lưu trữ trong bộ nhớ liên tiếp.
- Chỉ số (index) bắt đầu từ 0.
- Mảng có thể là **mảng tĩnh** (kích thước cố định) hoặc **mảng động** (có thể thay đổi kích thước).

## 3. Các thao tác trên mảng
### a) Truy cập phần tử
- Dùng index: `array[index]`
- Tốc độ truy cập: **O(1)**

### b) Thêm phần tử
- **Cuối mảng**: `push(element)` - **O(1)**
- **Đầu mảng**: `unshift(element)` - **O(n)**
- **Vị trí bất kỳ**: `splice(index, 0, element)` - **O(n)**

### c) Xóa phần tử
- **Cuối mảng**: `pop()` - **O(1)**
- **Đầu mảng**: `shift()` - **O(n)**
- **Vị trí bất kỳ**: `splice(index, 1)` - **O(n)**

### d) Duyệt mảng
- Duyệt bằng vòng lặp `for` hoặc `forEach()` - **O(n)**

### e) Tìm kiếm phần tử
- **Tìm tuyến tính** (`indexOf()`, `includes()`) - **O(n)**
- **Tìm kiếm nhị phân** (trên mảng đã sắp xếp) - **O(log n)**

### f) Sắp xếp mảng
- **Bubble Sort**: O(n^2)
- **Quick Sort**: O(n log n)
- **Merge Sort**: O(n log n)
- Dùng `sort()` trong JavaScript (có thể khác nhau tùy vào engine)

## 4. Các loại mảng trong JavaScript
1. **Mảng tĩnh (Static Array)**: Kích thước cố định
2. **Mảng động (Dynamic Array)**: Kích thước linh hoạt, tự động tăng khi thêm phần tử.
3. **Mảng 2 chiều, n-chiều**: Mảng lòng nhau.
4. **TypedArray**: Dùng để thao tác dữ liệu nhị phân.

## 5. Khi nào dùng mảng?
- Khi cần lưu trữ danh sách dữ liệu theo thứ tự.
- Khi cần truy cập nhanh tới phần tử theo index.
- Khi cần dùng dữ liệu trong bộ nhớ liên tiếp (đối với một số ngôn ngữ như C, C++).

## 6. Hạn chế của mảng
- Chèn/xóa giữa mảng tốn O(n).
- Tìm kiếm trong mảng không sắp xếp tốn O(n).
- Phát sinh bộ nhớ thừa (trong một số ngôn ngữ, khi phải tăng kích thước mảng).

## 7. Kết luận
Mảng là cấu trúc dữ liệu quan trọng trong lập trình. Hiểu rõ cách hoạt động của mảng giúp tối ưu mã và cải thiện hiệu suất xử lý dữ liệu.

