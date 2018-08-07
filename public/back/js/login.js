$ (function () {
    $('#form').bootstrapValidator({
        // 配置图标
    feedbackIcons: {
        valid: 'glyphicon glyphicon-heart',     // 校验成功
        invalid: 'glyphicon glyphicon-remove',  // 校验失败
        validating: 'glyphicon glyphicon-refresh'  // 校验中
      },



       // 配置字段 (不要忘记给input加name)
    fields: {
        username: {
          // 校验规则
          validators: {
            // 非空校验
            notEmpty: {
              // 配置提示信息
              message: "用户名不能为空"
            },
            // 长度校验
            stringLength: {
              min: 2,
              max: 6,
              message: "用户名长度必须是2-6位"
            },
            callback: {
              message: "用户名不存在"
            }
          }
        },
        password: {
          validators: {
            // 非空校验
            notEmpty: {
              message: "密码不能为空"
            },
            // 长度校验
            stringLength: {
              min: 6,
              max: 12,
              message: "密码长度必须是6-12位"
            },
            callback: {
              message: "密码错误"
            }
          }
        }
      }
    });

    
  /*
  * 2. 实现登录功能
  *    submit 按钮, 默认点击时会进行表单提交, 插件会在表单提交时进行检验
  *    (1) 如果校验成功, 页面会跳转, 我们需要阻止这次跳转, 通过ajax提交请求
  *    (2) 如果校验失败, 默认插件就会阻止这次提交跳转
  *
  *    注册表单校验成功事件, 在事件中阻止默认行为, 通过 ajax 进行提交请求
  * */
 $('#form').on("success.form.bv", function (e) {
  //  组织浏览器默认行为
   e.preventDefault();
 //console.log( "表单校验成功, 阻止了默认的提交行为" );

    // 通过 ajax 进行提交请求
   $.ajax({
     url:"/employee/employeeLogin",
     type: "post",
     data: $('#form').serialize(),
     dataType:"json",
     success : function ( info ) {
      if (info.success) {
        location.href = "index.html"
      }
      if (info.error == 1000) {
        alert ('密码错误');
      }
     }
   })
 })
    
   
      
          // alert("用户名不存在");
          // 如果用户名不存在, 需要将表单校验状态置成 校验失败 状态, 并提示用户
          // 插件方法 updateStatus
          // 参数1: 字段名称
          // 参数2: 校验状态, VALID成功的, INVALID失败的, NOT_VALIDATED未校验的
          // 参数3: 指定校验规则, 可以设置提示信息
        
          //alert("密码错误");
 


   /*
  * 3. 解决重置按钮的bug
  * */

  // 需要调用插件方法, 进行重置表单校验状态
  // 不传 true, 只重置校验状态, 传 true, 文本内容和校验状态都进行重置

});