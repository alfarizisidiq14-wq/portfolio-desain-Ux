// Data Dummy untuk Simulasi Cek Duplikat Username
const registeredUsernames = ['alfarizi', 'sidiq', 'admin', 'user123'];
const minPasswordLength = 6;

// Ambil Elemen dari DOM
const usernameInput = document.getElementById('username');
const usernameStatus = document.getElementById('username-status');
const passwordInput = document.getElementById('password');
const passwordStatus = document.getElementById('password-status');
const submitButton = document.getElementById('submit-button');
const loginForm = document.getElementById('login-form'); // Untuk Poin 1

// Fungsi untuk mengecek dan mengaktifkan/menonaktifkan tombol submit
function checkFormValidity() {
    const isUsernameValid = usernameStatus.textContent === ''; // Cek jika status kosong (berarti OK)
    const isPasswordValid = passwordInput.value.length >= minPasswordLength;
    
    // Tombol submit menyala jika KEDUANYA valid
    submitButton.disabled = !(isUsernameValid && isPasswordValid);
}

// --- LOGIKA PASSWORD (Poin 6, 7, 8) ---
passwordInput.addEventListener('input', function() {
    const currentLength = this.value.length;

    if (currentLength < minPasswordLength) {
        // Poin 7: Tombol submit disable dan tampil pesan
        passwordStatus.style.color = 'red';
        passwordStatus.textContent = `Anda baru mengetik ${currentLength} dari ${minPasswordLength} karakter.`;
    } else {
        // Poin 8: Pesan hilang dan tombol submit menyala (jika username juga valid)
        passwordStatus.textContent = '';
    }
    checkFormValidity();
});

// --- LOGIKA USERNAME (Poin 2, 3, 4, 5) ---
usernameInput.addEventListener('blur', function() {
    const username = this.value.toLowerCase(); // Ambil input, ubah ke huruf kecil
    
    // Poin 3: Sistem cek duplikat
    if (registeredUsernames.includes(username) && username !== "") {
        // Jika duplikat
        
        // Poin 4: Sistem menghapus inputan
        this.value = ''; 
        
        // Poin 5: Sistem menampilkan pesan
        usernameStatus.style.color = 'red';
        usernameStatus.textContent = '❌ Username sudah terdaftar! Masukkan yang lain.';
    } else if (username !== "") {
        // Jika username tersedia (dan tidak kosong)
        usernameStatus.style.color = 'green';
        usernameStatus.textContent = '✅ Username tersedia!';
    } else {
        // Jika input kosong
        usernameStatus.textContent = '';
    }
    checkFormValidity();
});

// Poin 1: Handler untuk tombol klik (menguji sistem)
loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    if (!submitButton.disabled) {
        alert('SUCCESS! Form berhasil di-submit (Poin 1). Cek logika JS Anda.');
    }
});

// Awalnya tombol submit sudah disabled
checkFormValidity();
