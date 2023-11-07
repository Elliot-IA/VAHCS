c("~switchbox.js initiated~");

a("generateBtn").onclick = ()=>{
    c("generateBtn clicked");
    if(a("redirectionLinkInput").value != ""){
        var result = [a("redirectionLinkInput").value, a("destinationNameInput").value];
        a("command_hiddenInput").value = "generateQR";
        a("data_hiddenInput").value = JSON.stringify(result);

        $.post("/switchbox", {command: "generateQR", data: result}, (res)=>{
            console.log(res);
            a("hiddenForm").submit();
        });
    }else{
        alert("~Unable to comply, no redirection link~");
    }
}