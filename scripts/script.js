const file_uplaoder=document.createElement("input")
file_uplaoder.setAttribute("type", "file")
function upload() {
    file_uplaoder.addEventListener('change', function(event) {
        var fileList = event.target.files;
        var ul = document.getElementById('fileList');
        
        for (var i = 0; i < fileList.length; i++) {
            var file = fileList[i];
            var li = document.createElement('li');
            var a = document.createElement('a');
            a.href = URL.createObjectURL(file);
            a.textContent = file.name;
            a.setAttribute('target', 'iframe');
            a.addEventListener('click', function() {
                loadFile("/OnlineEditer/files/" + file.name);
                return false;
            });
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
const form = document.createElement("form")
form.setAttribute("action","file.php")
form.setAttribute("method","post")
form.style.display="None"
document.body.appendChild(form)
//Draft oppner
const NewDraft=()=>{
    const filename=prompt('',_default="untitled")
    if(filename !== null && filename!=''){
    const newli=document.createElement('li')
    newli.appendChild(document.createTextNode(filename))
    const newfile=document.createElement('input')
    newfile.setAttribute("type","text")
    newfile.setAttribute("name", "filename")
    newfile.setAttribute("value",filename)
    form.appendChild(newfile)
    form.submit()
    form.removeChild(newfile)
    document.querySelector("ul:last-child").appendChild(newli)}
  }
  //add directory 
  document.getElementsByClassName("fa-solid fa-file-circle-plus")[0].parentElement.onclick=NewDraft
  document.getElementsByClassName("fa-solid fa-file-arrow-up")[0].parentElement.onclick=upload()
  document.getElementsByClassName("fa-solid fa-file-floppy-disk")[0].parentElement.onclick=updateIframeContent()


  //what happens on loading page 

  document.onload=(()=>{
         
  })()
