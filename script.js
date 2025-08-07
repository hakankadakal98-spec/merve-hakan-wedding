document.getElementById('uploadForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const fileInput = document.getElementById('file');
  if (fileInput.files.length === 0) {
    alert('Lütfen bir dosya seçin!');
    return;
  }

  const formData = new FormData();
  formData.append('file', fileInput.files[0]);

  try {
    const response = await fetch('https://wedding-backend-ekm1rw1x1-hakans-projects-8baa0f26.vercel.app/api/upload', {  // Vercel’deki URL'ni buraya yaz
      method: 'POST',
      body: formData,
    });

    const data = await response.json();

    if (response.ok) {
      alert('Dosya başarıyla yüklendi!');
    } else {
      alert('Yükleme başarısız: ' + (data.message || 'Bilinmeyen hata'));
    }
  } catch (error) {
    alert('Yükleme sırasında hata oluştu: ' + error.message);
  }
});
