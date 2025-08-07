document.getElementById('uploadForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const fileInput = document.getElementById('file');
  const formData = new FormData();
  formData.append('file', fileInput.files[0]);

  const response = await fetch('https://wedding-uploader-seven.vercel.app/api/upload', {
    method: 'POST',
    body: formData
  });

  const result = await response.json();
  alert(result.message || 'Yükleme tamamlandı!');
});
