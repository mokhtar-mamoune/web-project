const file_uplaoder=document.createElement("input")
file_uplaoder.setAttribute("type", "file")
file_uplaoder.style.display="None"
document.body.appendChild(file_uplaoder)
function upload(username) {
    file_uplaoder.click()
    file_uplaoder.addEventListener('change', function(event) {
        var fileList = event.target.files;
        var ul = document.getElementById('fileList');

        for (var i = 0; i < fileList.length; i++) {
            var file = fileList[i];
            var li = document.createElement('li');
            var a = document.createElement('a');
            a.href = URL.createObjectURL(file);
            a.textContent = file.name;
            const formData = new FormData();
            formData.append("file", file);
            fetch("/OnlineEditer/upload.php", {
                method: 'POST',
                body: formData
            })
            .then(response => {
            a.setAttribute('target', 'iframe');
            a.addEventListener('click', function() {
                loadFile("/OnlineEditer/files/" +username+"/"+ file.name);
                return false;
            });
            li.appendChild(a);
            ul.appendChild(li);  // Response from the server
            })
            .catch(error => {
                console.error('Error:', error);
            });
            //
            
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
const form = document.createElement("form")
form.setAttribute("action","file.php")
form.setAttribute("method","post")
form.style.display="None"
document.body.appendChild(form)
//Draft oppner
function NewDraft(username){
    const filename=prompt('',_default="untitled")
    if(filename !== null && filename!=''){
    const newli=document.createElement('li')
    var a = document.createElement('a');
    a.href = "/OnlineEditer/files/"+username+"/"+filename;
    a.textContent = filename;
    const formData = new FormData();
    formData.append("filename", filename);
    fetch("/OnlineEditer/file.php", {
        method: 'POST',
        body: formData
    })
    .then(response => {
    a.setAttribute('target', 'iframe');
    a.addEventListener('click', function() {
        loadFile("/OnlineEditer/files/"+username+"/"+filename);
        return false;
    });
    newli.appendChild(a);
     document.querySelector("ul:last-child").appendChild(newli)
    })
    .catch(error => {
        console.error('Error:', error);
    });
   } 
  }
  //add directory 
 