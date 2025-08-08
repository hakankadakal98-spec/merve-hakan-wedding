const form = document.getElementById('uploadForm');
const fileInput = document.getElementById('file');
const fileCountText = document.getElementById('fileCount');
const statusMessage = document.getElementById('statusMessage');

fileInput.addEventListener('change', () => {
  const count = fileInput.files.length;
  fileCountText.textContent = count > 0
    ? `${count} dosya seçildi.`
    : "Hiç dosya seçilmedi.";
});

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  if (!fileInput.files.length) {
    statusMessage.textContent = "Lütfen en az bir dosya seçin.";
    return;
  }

  const formData = new FormData();
  for (let file of fileInput.files) {
    formData.append('files', file);
  }

  try {
    const response = await fetch('https://wedding-backend-ekm1rw1x1-hakans-projects-8baa0f26.vercel.app/api/upload', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      statusMessage.textContent = "✅ Dosyalar başarıyla yüklendi!";
      fileInput.value = '';
      fileCountText.textContent = "Hiç dosya seçilmedi.";
    } else {
      statusMessage.textContent = "❌ Yükleme başarısız. Lütfen tekrar deneyin.";
    }
  } catch (error) {
    console.error(error);
    statusMessage.textContent = "❌ Sunucuya erişilemedi.";
  }
});

