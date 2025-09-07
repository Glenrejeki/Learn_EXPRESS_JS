# Learn_EXPRESS_JS

## Sumber Belajar 
[link belajar](https://youtu.be/SccSCuHhOw0?si=cnijxBQZO2f-mfG9)

## Materi :
- [x] Intro & Setup
- [x] Get Requests
- [x] Route Params
- [x] Query Params
- [x] Post Requests
- [x] Put Requests
- [x] Patch Requests
- [x] Delete Requests
- [x] Middleware
- [x] Validation
- [ ] Routers
- [ ] Cookies
- [ ] Sessions
- [ ] Sessions Pt. 2
- [ ] Passport.js & Authentication
- [ ] Databases & MongoDB
- [ ] Hashing Passwords
- [ ] Session Store
- [ ] OAuth2
- [ ] Unit Testing & Jest
- [ ] E2E Testing

---

## Catatan Progress

### Intro & Setup
**Definisi:**  
Langkah awal membuat aplikasi Express.js.  
**Tujuan:**  
Menyiapkan project dan menjalankan server.  
**Contoh Kode:**  
```js
import express from "express";
const app = express();
app.listen(3000, () => console.log("Running on port 3000"));
```
**Cocok untuk:**  
Semua aplikasi web berbasis Node.js.  
**Endpoint:**  
Belum ada, hanya setup server.

---

### Get Requests
**Definisi:**  
Membuat endpoint HTTP GET.  
**Tujuan:**  
Mengembalikan data sederhana ke client.  
**Contoh Kode:**  
```js
app.get("/", (req, res) => res.send("Hello World !"));
```
**Cocok untuk:**  
Menampilkan halaman utama atau health check.  
**Endpoint:**  
`/`

---

### Route Params
**Definisi:**  
Mengambil parameter dari URL.  
**Tujuan:**  
Mengakses data spesifik berdasarkan ID.  
**Contoh Kode:**  
```js
app.get("/api/users/:id", (req, res) => { ... });
```
**Cocok untuk:**  
Mengambil detail user, produk, dsb.  
**Endpoint:**  
`/api/users/:id`

---

### Query Params
**Definisi:**  
Mengambil parameter dari query string.  
**Tujuan:**  
Menyaring/memfilter data yang dikirim ke client.  
**Contoh Kode:**  
```js
app.get("/api/users", (req, res) => { ... });
```
**Cocok untuk:**  
Pencarian/filter data pada list.  
**Endpoint:**  
`/api/users?filter=username&value=glen`

---

### Post Requests
**Definisi:**  
Menerima data dari client untuk membuat resource baru.  
**Tujuan:**  
Menambah data user ke array.  
**Contoh Kode:**  
```js
app.post("/api/users", (req, res) => { ... });
```
**Cocok untuk:**  
Registrasi user, tambah produk, dsb.  
**Endpoint:**  
`/api/users`

---

### Put Requests
**Definisi:**  
Mengganti seluruh data resource berdasarkan ID.  
**Tujuan:**  
Update data user secara penuh.  
**Contoh Kode:**  
```js
app.put("/api/users/:id", (req, res) => { ... });
```
**Cocok untuk:**  
Update data user secara total.  
**Endpoint:**  
`/api/users/:id`

---

### Patch Requests
**Definisi:**  
Mengubah sebagian data resource berdasarkan ID.  
**Tujuan:**  
Update sebagian data user.  
**Contoh Kode:**  
```js
app.patch("/api/users/:id", (req, res) => { ... });
```
**Cocok untuk:**  
Update sebagian data user (misal hanya nama).  
**Endpoint:**  
`/api/users/:id`

---

### Delete Requests
**Definisi:**  
Menghapus resource berdasarkan ID.  
**Tujuan:**  
Menghapus user dari array.  
**Contoh Kode:**  
```js
app.delete("/api/users/:id", (req, res) => { ... });
```
**Cocok untuk:**  
Fitur hapus user, produk, dsb.  
**Endpoint:**  
`/api/users/:id`

---

### Middleware
**Definisi:**  
Fungsi yang dijalankan sebelum handler utama.  
**Tujuan:**  
Logging, validasi, autentikasi, dsb.  
**Contoh Kode:**  
```js
const loggingMiddleware = (req, res, next) => { ... };
app.use(loggingMiddleware);
```
**Cocok untuk:**  
Logging, validasi, parsing JSON, dsb.  
**Endpoint:**  
Semua endpoint (jika pakai `app.use`).

---

## Catatan Materi Baru Dipelajari (yang belum dicentang)

### Validation
**Definisi:**  
Proses memeriksa data input dari client agar sesuai aturan.  
**Tujuan:**  
Mencegah data tidak valid masuk ke sistem.  
**Contoh Kode:**  
```js
import { body, validationResult } from "express-validator";
app.post("/api/users", body("username").notEmpty(), (req, res) => { ... });
```
**Cocok untuk:**  
Form input, registrasi, update data.  
**Endpoint:**  
Semua endpoint yang menerima input.

---

### Routers
**Definisi:**  
Memecah route ke file terpisah agar kode lebih rapi.  
**Tujuan:**  
Modularisasi dan maintainability kode.  
**Contoh Kode:**  
```js
import userRouter from "./routes/user.js";
app.use("/api/users", userRouter);
```
**Cocok untuk:**  
Project besar dengan banyak endpoint.  
**Endpoint:**  
Sesuai router yang dibuat.

---

### Cookies, Sessions, Passport.js, dsb.
**Catatan:**  
Materi-materi ini akan dipelajari selanjutnya untuk kebutuhan autentikasi, penyimpanan sesi, dan keamanan aplikasi.

---

## Mock Data
Digunakan untuk testing API sederhana:  

```js
const mockUser = [
  {id: 1, username: "jeki", displayName: "Jeki"},
  {id: 2, username: "glen", displayName: "Glen"},
   {id: 3, username: "kobra", displayName: "Kobra"},
];
```