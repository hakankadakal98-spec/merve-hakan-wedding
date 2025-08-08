document.getElementById('uploadForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const fileInput = document.getElementById('file');
  const statusMessage = document.getElementById('statusMessage');

  if (!fileInput.files.length) {
    statusMessage.textContent = "Lütfen bir dosya seçin.";
    return;
  }

  const formData = new FormData();
  formData.append('file', fileInput.files[0]);

  try {
    const response = await fetch('https://wedding-backend-ekm1rw1x1-hakans-projects-8baa0f26.vercel.app/api/upload', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      statusMessage.textContent = "✅ Dosya başarıyla yüklendi!";
      fileInput.value = ''; // Reset input
    } else {
      statusMessage.textContent = "❌ Yükleme başarısız. Tekrar deneyin.";
    }
  } catch (error) {
    console.error(error);
    statusMessage.textContent = "❌ Sunucuya erişilemedi.";
  }
});
