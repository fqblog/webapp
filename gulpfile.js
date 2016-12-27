var gulp=require("gulp")
var sass=require("gulp-sass");
var browserSync=require('browser-sync').create();//服务器监听器
var reload=browserSync.reload;
var webpack =require('gulp-webpack');
var named =require('vinyl-named');
var uglify=require("gulp-uglify");
var minifyCss =require('gulp-minify-css');
var revCollector =require('gulp-rev-collector');
var rev=require('gulp-rev');
var sequence=require('gulp-watch-sequence');
var fs=require("fs");
var url=require("url");
var webserver = require('gulp-webserver');

gulp.task("html",function(){
	return gulp.src("./src/index.html")
	.pipe(gulp.dest("./dist/"))
	.pipe(browserSync.stream());
});
gulp.task("css",function(){
	return gulp.src("./src/css/*.scss")
	.pipe(sass()).pipe(minifyCss())
	.pipe(gulp.dest("./dist/css"))
	.pipe(browserSync.stream());
});
gulp.task("cssfile",function(){
	return gulp.src("./src/css/common/**/*")
	.pipe(gulp.dest("./dist/css/common"))
	.pipe(browserSync.stream());
});
/*gulp.task("js",function(){
	return gulp.src("./src/js/*.js")
	.pipe(named())
	.pipe(webpack())
	.pipe(uglify())
	.pipe(gulp.dest('./dist/js'))
	.pipe(browserSync.stream());
});*//*require载入zepto,jq,iscroll等js插件失败,只有把js文件夹下全部一起支付过去*/
gulp.task("copy-jsfile",function(){
	return gulp.src("./src/js/**/*")
	.pipe(gulp.dest("./dist/js/"))
	.pipe(browserSync.stream());
})
gulp.task("img",function(){
	return gulp.src("./src/img/*")
	.pipe(gulp.dest("./dist/img"))
	.pipe(browserSync.stream());
});
gulp.task("audio",function(){
	return gulp.src("./src/audio/*")
	.pipe(gulp.dest("./dist/audio"))
	.pipe(browserSync.stream());
});

gulp.task('browser-sync',["html","css","cssfile","copy-jsfile","img","audio"], function() {
    browserSync.init({
        server: {
            baseDir: "./dist"
        }
    });
    gulp.watch("./src/index.html",["html"]);
    gulp.watch("./src/css/*.scss",["css"]);
    gulp.watch("./src/js/common/**/*",["copy-jsfile"]);
    gulp.watch("./src/img/*",["img"]);
    gulp.watch("./src/audio/*",["audio"]);
    gulp.watch("./src/css/common",["cssfile"]);
    //gulp.watch("./src/js/*.js").on('change', reload);
});

/*gulp.task("webserver",function(){
	gulp.src("./src")
	.pipe(webserver({
		livereload:true,
		open:true
	}))
})*/
//gulp.task("copy",["html","css","copy-jsfile","img","audio"])
gulp.task("default",["browser-sync"])