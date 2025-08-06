document.getElementById('uploadForm').addEventListener('submit', function(event) {
  event.preventDefault();

  let fileInput = document.getElementById('fileInput');
  let file = fileInput.files[0];
  
  if (file) {
    alert(`Yüklemek istediğiniz dosya: ${file.name}`);
    // Google Drive API'ye yükleme kodu buraya gelecek
  } else {
    alert('Lütfen bir dosya seçin!');
  }
});
