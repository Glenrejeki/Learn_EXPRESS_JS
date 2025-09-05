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
- [ ] Delete Requests
- [ ] Middleware
- [ ] Validation
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
- Membuat project Express.js pertama.  
- Menggunakan `import express from "express";` untuk inisialisasi aplikasi.  
- Menjalankan server di `PORT = 3000`.  

### Get Requests
- Endpoint `/` dengan response `"Hello World !"`.  
- Belajar struktur dasar `app.get("/", (req, res) => {...})`.  

### Route Params
- Endpoint `/api/users/:id`.  
- Mengambil parameter `id` dari `req.params`.  
- Validasi: jika `id` bukan angka → `400 Bad Request`.  
- Jika user dengan `id` tidak ditemukan → `404 Not Found`.  
- Jika ditemukan → mengembalikan data user.  

### Query Params
- Endpoint `/api/users` dengan filter lewat query string.  
- Contoh: `/api/users?filter=username&value=glen`.  
- Menggunakan `req.query` untuk akses parameter.  
- Jika `filter` & `value` kosong → tampilkan semua user.  
- Jika ada filter → tampilkan user yang cocok.  

### Post Requests
- Endpoint `/api/users`.  
- Menggunakan `req.body` (perlu `app.use(express.json())`).  
- Data user baru ditambahkan dengan `id` auto-increment.  
- Return `201 Created` dengan data user baru.  

### Put Requests
- Endpoint `/api/users/:id`.  
- Tujuan: update data user berdasarkan `id`.  
- Validasi: jika `id` bukan angka → `400 Bad Request`.  
- Jika user tidak ditemukan → `404 Not Found`.  
- Masih tahap awal (baru menemukan index user, belum update penuh).  

---

## Mock Data
Digunakan untuk testing API sederhana:  

```js
const mockUser = [
  {id: 1, username: "jeki", displayName: "Jeki"},
  {id: 2, username: "glen", displayName: "Glen"},
  {id: 3, username: "kobra", displayName: "Kobra"},
];
