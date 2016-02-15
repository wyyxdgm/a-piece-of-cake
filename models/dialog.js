function TipWithYes(body, title, reload) {
    nwDialog({
        title: title || '提示',
        height: 200,
        content: '<div style=\"margin:28px auto;\">' + body + '~</div>',
        btn: nwDialogBtn({
            m: 1,
            ok: {
                val: '确定',
                type: 'red',
                click: function() {
                    if (reload) window.location.reload();
                }
            }
        }),
        hide: function() {
            if (reload) window.location.reload();
        }
    });
}

function TipGoToLogin(goToUrl) {
    nwDialog({
        title: '提示',
        height: 160,
        content: '<div style=\"margin:10px auto;\">您尚未登录，请先登录</div>',
        btn: nwDialogBtn({
            m: 2,
            ok: {
                val: '登录',
                type: 'red',
                click: function() {
                    window.location.href = domain + "login?apchy=" + goToUrl;
                }
            },
            cancle: {
                val: '取消',
                type: 'red'
            }
        })
    });
}