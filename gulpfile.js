//导入工具包 require('node_modules里对应模块')
var gulp = require('gulp'); //本地安装gulp所用到的地方
var minihtml=repuire('gulp-mimify-html');
//html压缩
	gulp.task('htmltask', function () {  //htmltask为自定义的任务名称
    	gulp.src('*.html') // 要压缩的html文件
   		.pipe(minihtml())  //压缩，和上面定义的依赖名相同
   		.pipe(gulp.dest('dist'))//压缩到哪
	});
