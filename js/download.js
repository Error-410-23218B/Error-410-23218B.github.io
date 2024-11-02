document.getElementById('downloadBtn').addEventListener('click', function(e) {
    e.preventDefault();
    
    // URL of the file to be downloaded
    var fileUrl = '/path/to/your/file.pdf';
    
    // Suggested filename for the download
    var fileName = 'document.pdf';

    // Creating a temporary anchor element
    var tempLink = document.createElement('a');
    tempLink.href = fileUrl;
    tempLink.setAttribute('download', fileName);
    tempLink.style.display = 'none';

    // Appending to the body and triggering the download
    document.body.appendChild(tempLink);
    tempLink.click();

    // Cleaning up
    document.body.removeChild(tempLink);
});