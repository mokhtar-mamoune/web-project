function upload() {
    document.getElementById('sb1').addEventListener('change', function(event) {
        var fileList = event.target.files;
        var ul = document.getElementById('fileList');

        for (var i = 0; i < fileList.length; i++) {
            var file = fileList[i];
            var li = document.createElement('li');
            var a = document.createElement('a');
            a.href = URL.createObjectURL(file);
            a.textContent = file.name;
            a.setAttribute('target', 'iframe');
            a.setAttribute('onclick', 'loadFile("' +"/web-project/assets/"+ file.name + '"); return false;');
            li.appendChild(a);
            ul.appendChild(li);
        }
    });
}
function loadFile(filePath) {
    fetch(filePath)
        .then(response => response.text())
        .then(htmlContent => {
            var iframe = document.getElementsByName('iframe')[0];
            var srcTextarea = document.getElementById('src');
            iframe.contentDocument.open();
            iframe.contentDocument.write(htmlContent);
            iframe.contentDocument.close();

            srcTextarea.value = htmlContent;
        })
        .catch(error => {
            console.error('Error fetching file content:', error);
        });
}
function updateIframeContent() {
const a = document.querySelector("#src");
const iframe = document.querySelector("iframe");
const content = a.value;
iframe.setAttribute("srcdoc", content);
}