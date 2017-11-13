var uploader = WebUploader.create({
    // 选完文件后，是否自动上传。
    auto: true,
    // swf文件路径
    swf: './Uploader.swf',
    // 文件接收服务端。
    server: 'http://webuploader.duapp.com/server/fileupload.php',
    // 选择文件的按钮。可选。
    // 内部根据当前运行是创建，可能是input元素，也可能是flash.
    pick: '#filePicker',
    // 只允许选择图片文件。
    accept: {
        title: 'Images',
        extensions: 'gif,jpg,jpeg,bmp,png',
        mimeTypes: 'image/*'
    }
});

// 当有文件添加进来的时候
var $list = $('#fileList')
// 优化retina, 在retina下这个值是2
var ratio = window.devicePixelRatio || 1
// 缩略图大小
var thumbnailWidth = 110 * ratio
var thumbnailHeight = 110 * ratio
uploader.on('fileQueued', function (file) {
    var $li = $(
        '<div id="' + file.id + '" class="file-item thumbnail">' +
        '<img>' +
        '<div class="info">' + file.name + '</div>' +
        '</div>'
    ),
        $btns = $('<div class="del"></div>'),
        $img = $li.find('img');
    // $list为容器jQuery实例
    $li.append($btns);
    $list.append($li);

    // 创建缩略图
    // 如果为非图片文件，可以不用调用此方法。
    // thumbnailWidth x thumbnailHeight 为 100 x 100
    uploader.makeThumb(file, function (error, src) {
        if (error) {
            $img.replaceWith('<span>不能预览</span>');
            return;
        }
        $img.css('background-image', 'url(' + src + ')')
    }, thumbnailWidth, thumbnailHeight);
    $btns.on('click', function () {
        removeFile(file);
    });
});

// 文件上传过程中创建进度条实时显示。
uploader.on('uploadProgress', function (file, percentage) {
    var $li = $('#' + file.id),
        $percent = $li.find('.progress span');

    // 避免重复创建
    if (!$percent.length) {
        $percent = $('<p class="progress"><span></span></p>')
            .appendTo($li)
            .find('span');
    }

    $percent.css('width', percentage * 100 + '%');
});

// 文件上传成功，给item添加成功class, 用样式标记上传成功。
uploader.on('uploadSuccess', function (file) {
    $('#' + file.id).addClass('upload-state-done');
    $('<div class="success2"></div>').appendTo($('#' + file.id));
});

// 文件上传失败，显示上传出错。
uploader.on('uploadError', function (file) {
    var $li = $('#' + file.id),
        $error = $li.find('div.error2');
    // 避免重复创建
    if (!$error.length) {
        $error = $('<div class="error2"></div>').appendTo($li);
    }

    $error.text('上传失败');
});

// 完成上传完了，成功或者失败，先删除进度条。
uploader.on('uploadComplete', function (file) {
    $('#' + file.id).find('.progress').remove();
});


// 负责view的销毁
removeFile = function (file) {
    var $li = $('#' + file.id);
    uploader.removeFile( file );
    $li.remove();
}