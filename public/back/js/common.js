
if (location.href.indexOf("login.html") === -1) {
    $.ajax({
        url:"/employee/checkRootLogin",
        type: "get",
        dataType: "json",
        success:function (info) {
            console.log(info);
            if (info.success) {
                // console.log("已登录")
                alert('登陆');
               
            }
            if ( info.error == 400) {
                location.href = "login.html";
            }
        }
    })
}