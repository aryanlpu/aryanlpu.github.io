(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/* You can add global styles to this file, and also import other style files */\n\n*{\n    border-radius: 0 !important;\n}\n\n.cube-folding {\n    width: 50px;\n    height: 50px;\n    display: inline-block;\n    -webkit-transform: rotate(45deg);\n    transform: rotate(45deg);\n    font-size: 0;\n  }\n\n.cube-folding span {\n    position: relative;\n    width: 25px;\n    height: 25px;\n    -webkit-transform: scale(1.1);\n    transform: scale(1.1);\n    display: inline-block;\n  }\n\n.cube-folding span::before {\n    content: '';\n    background-color: #A8C5FF;\n    position: absolute;\n    left: 0;\n    top: 0;\n    display: block;\n    width: 25px;\n    height: 25px;\n    -webkit-transform-origin: 100% 100%;\n    transform-origin: 100% 100%;\n    -webkit-animation: folding 2.5s infinite linear both;\n    animation: folding 2.5s infinite linear both;\n  }\n\n.cube-folding .leaf2 {\n    -webkit-transform: rotateZ(90deg) scale(1.1);\n    transform: rotateZ(90deg) scale(1.1);\n  }\n\n.cube-folding .leaf2::before {\n    -webkit-animation-delay: 0.3s;\n    animation-delay: 0.3s;\n    background-color: #8197C2;\n  }\n\n.cube-folding .leaf3 {\n    -webkit-transform: rotateZ(270deg) scale(1.1);\n    transform: rotateZ(270deg) scale(1.1);\n  }\n\n.cube-folding .leaf3::before {\n    -webkit-animation-delay: 0.9s;\n    animation-delay: 0.9s;\n    background-color: #8197C2;\n  }\n\n.cube-folding .leaf4 {\n    -webkit-transform: rotateZ(180deg) scale(1.1);\n    transform: rotateZ(180deg) scale(1.1);\n  }\n\n.cube-folding .leaf4::before {\n    -webkit-animation-delay: 0.6s;\n    animation-delay: 0.6s;\n    background-color: #546380;\n  }\n\n@-webkit-keyframes folding {\n    0%, 10% {\n      -webkit-transform: perspective(140px) rotateX(-180deg);\n      transform: perspective(140px) rotateX(-180deg);\n      opacity: 0;\n    }\n    25%, 75% {\n      -webkit-transform: perspective(140px) rotateX(0deg);\n      transform: perspective(140px) rotateX(0deg);\n      opacity: 1;\n    }\n    90%, 100% {\n      -webkit-transform: perspective(140px) rotateY(180deg);\n      transform: perspective(140px) rotateY(180deg);\n      opacity: 0;\n    }\n  }\n\n@keyframes folding {\n    0%, 10% {\n      -webkit-transform: perspective(140px) rotateX(-180deg);\n      transform: perspective(140px) rotateX(-180deg);\n      opacity: 0;\n    }\n    25%, 75% {\n      -webkit-transform: perspective(140px) rotateX(0deg);\n      transform: perspective(140px) rotateX(0deg);\n      opacity: 1;\n    }\n    90%, 100% {\n      -webkit-transform: perspective(140px) rotateY(180deg);\n      transform: perspective(140px) rotateY(180deg);\n      opacity: 0;\n    }\n  }\n\n.cube-wrapper {\n    position: fixed;\n    left: 50%;\n    top: 50%;\n    margin-top: -50px;\n    margin-left: -50px;\n    width: 100px;\n    height: 100px;\n    text-align: center;\n  }\n\n.cube-wrapper:after {\n    content: '';\n    position: absolute;\n    left: 0;\n    right: 0;\n    bottom: -20px;\n    margin: auto;\n    width: 90px;\n    height: 6px;\n    background-color: rgba(0, 0, 0, 0.1);\n    -webkit-filter: blur(2px);\n    filter: blur(2px);\n    border-radius: 100%;\n    z-index: 1;\n    -webkit-animation: shadow 0.5s ease infinite alternate;\n    animation: shadow 0.5s ease infinite alternate;\n  }\n\n.cube-wrapper .loading {\n    font-size: 12px;\n    letter-spacing: 0.1em;\n    display: block;\n    color: #A8C5FF;\n    position: relative;\n    top: 25px;\n    z-index: 2;\n    -webkit-animation: text 0.5s ease infinite alternate;\n    animation: text 0.5s ease infinite alternate;\n  }\n\n@-webkit-keyframes text {\n    100% {\n      top: 35px;\n    }\n  }\n\n@keyframes text {\n    100% {\n      top: 35px;\n    }\n  }\n\n@-webkit-keyframes shadow {\n    100% {\n      bottom: -18px;\n      width: 100px;\n    }\n  }\n\n@keyframes shadow {\n    100% {\n      bottom: -18px;\n      width: 100px;\n    }\n  }\n\nhtml, body {\n    min-height: 100%;\n  }\n\nh1 {\n    font-size: 26px;\n    display: block;\n    text-align: center;\n    color: #2A3140;\n    padding: 50px 20px;\n    font-weight: 300;\n    font-family: 'Archivo Narrow', sans-serif;\n  }\n\n.made-with-love {\n  position: fixed;\n  left: 0;\n  width: 100%;\n  bottom: 10px;\n  text-align: center;\n  font-size: 10px;\n  z-index: 9999;\n  font-family: arial;\n  color: #9BB5EB;\n}\n\n.made-with-love i {\n  font-style: normal;\n  color: #F50057;\n  font-size: 14px;\n  position: relative;\n  top: 2px;\n}\n\n.made-with-love a {\n  color: #9BB5EB;\n  text-decoration: none;\n}\n\n.made-with-love a:hover {\n  text-decoration: underline;\n}\n\n/*# sourceMappingURL=data:application/json;base64,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QUFDVjs7QUFDQTtFQUNFLGNBQWM7RUFDZCxxQkFBcUI7QUFDdkI7O0FBQ0E7RUFDRSwwQkFBMEI7QUFDNUIiLCJmaWxlIjoic3JjL3N0eWxlcy5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5cbip7XG4gICAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xufVxuXG4uY3ViZS1mb2xkaW5nIHtcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgIGZvbnQtc2l6ZTogMDtcbiAgfVxuICAuY3ViZS1mb2xkaW5nIHNwYW4ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMjVweDtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB9XG4gIC5jdWJlLWZvbGRpbmcgc3Bhbjo6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQThDNUZGO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogMDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMjVweDtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgLW1vei10cmFuc2Zvcm0tb3JpZ2luOiAxMDAlIDEwMCU7XG4gICAgLW1zLXRyYW5zZm9ybS1vcmlnaW46IDEwMCUgMTAwJTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDEwMCUgMTAwJTtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiAxMDAlIDEwMCU7XG4gICAgLW1vei1hbmltYXRpb246IGZvbGRpbmcgMi41cyBpbmZpbml0ZSBsaW5lYXIgYm90aDtcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogZm9sZGluZyAyLjVzIGluZmluaXRlIGxpbmVhciBib3RoO1xuICAgIGFuaW1hdGlvbjogZm9sZGluZyAyLjVzIGluZmluaXRlIGxpbmVhciBib3RoO1xuICB9XG4gIC5jdWJlLWZvbGRpbmcgLmxlYWYyIHtcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlWig5MGRlZykgc2NhbGUoMS4xKTtcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGVaKDkwZGVnKSBzY2FsZSgxLjEpO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVaKDkwZGVnKSBzY2FsZSgxLjEpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlWig5MGRlZykgc2NhbGUoMS4xKTtcbiAgfVxuICAuY3ViZS1mb2xkaW5nIC5sZWFmMjo6YmVmb3JlIHtcbiAgICAtbW96LWFuaW1hdGlvbi1kZWxheTogMC4zcztcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC4zcztcbiAgICBhbmltYXRpb24tZGVsYXk6IDAuM3M7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzgxOTdDMjtcbiAgfVxuICAuY3ViZS1mb2xkaW5nIC5sZWFmMyB7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVooMjcwZGVnKSBzY2FsZSgxLjEpO1xuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZVooMjcwZGVnKSBzY2FsZSgxLjEpO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVaKDI3MGRlZykgc2NhbGUoMS4xKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVooMjcwZGVnKSBzY2FsZSgxLjEpO1xuICB9XG4gIC5jdWJlLWZvbGRpbmcgLmxlYWYzOjpiZWZvcmUge1xuICAgIC1tb3otYW5pbWF0aW9uLWRlbGF5OiAwLjlzO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjlzO1xuICAgIGFuaW1hdGlvbi1kZWxheTogMC45cztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODE5N0MyO1xuICB9XG4gIC5jdWJlLWZvbGRpbmcgLmxlYWY0IHtcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlWigxODBkZWcpIHNjYWxlKDEuMSk7XG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlWigxODBkZWcpIHNjYWxlKDEuMSk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVooMTgwZGVnKSBzY2FsZSgxLjEpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlWigxODBkZWcpIHNjYWxlKDEuMSk7XG4gIH1cbiAgLmN1YmUtZm9sZGluZyAubGVhZjQ6OmJlZm9yZSB7XG4gICAgLW1vei1hbmltYXRpb24tZGVsYXk6IDAuNnM7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuNnM7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwLjZzO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NDYzODA7XG4gIH1cbiAgXG4gIEAtbW96LWtleWZyYW1lcyBmb2xkaW5nIHtcbiAgICAwJSwgMTAlIHtcbiAgICAgIC1tb3otdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxNDBweCkgcm90YXRlWCgtMTgwZGVnKTtcbiAgICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTQwcHgpIHJvdGF0ZVgoLTE4MGRlZyk7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgICAyNSUsIDc1JSB7XG4gICAgICAtbW96LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTQwcHgpIHJvdGF0ZVgoMGRlZyk7XG4gICAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDE0MHB4KSByb3RhdGVYKDBkZWcpO1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gICAgOTAlLCAxMDAlIHtcbiAgICAgIC1tb3otdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxNDBweCkgcm90YXRlWSgxODBkZWcpO1xuICAgICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxNDBweCkgcm90YXRlWSgxODBkZWcpO1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gIH1cbiAgQC13ZWJraXQta2V5ZnJhbWVzIGZvbGRpbmcge1xuICAgIDAlLCAxMCUge1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDE0MHB4KSByb3RhdGVYKC0xODBkZWcpO1xuICAgICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxNDBweCkgcm90YXRlWCgtMTgwZGVnKTtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICAgIDI1JSwgNzUlIHtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxNDBweCkgcm90YXRlWCgwZGVnKTtcbiAgICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTQwcHgpIHJvdGF0ZVgoMGRlZyk7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgICA5MCUsIDEwMCUge1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDE0MHB4KSByb3RhdGVZKDE4MGRlZyk7XG4gICAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDE0MHB4KSByb3RhdGVZKDE4MGRlZyk7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgfVxuICBAa2V5ZnJhbWVzIGZvbGRpbmcge1xuICAgIDAlLCAxMCUge1xuICAgICAgLW1vei10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDE0MHB4KSByb3RhdGVYKC0xODBkZWcpO1xuICAgICAgLW1zLXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTQwcHgpIHJvdGF0ZVgoLTE4MGRlZyk7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTQwcHgpIHJvdGF0ZVgoLTE4MGRlZyk7XG4gICAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDE0MHB4KSByb3RhdGVYKC0xODBkZWcpO1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gICAgMjUlLCA3NSUge1xuICAgICAgLW1vei10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDE0MHB4KSByb3RhdGVYKDBkZWcpO1xuICAgICAgLW1zLXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTQwcHgpIHJvdGF0ZVgoMGRlZyk7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTQwcHgpIHJvdGF0ZVgoMGRlZyk7XG4gICAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDE0MHB4KSByb3RhdGVYKDBkZWcpO1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gICAgOTAlLCAxMDAlIHtcbiAgICAgIC1tb3otdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxNDBweCkgcm90YXRlWSgxODBkZWcpO1xuICAgICAgLW1zLXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTQwcHgpIHJvdGF0ZVkoMTgwZGVnKTtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxNDBweCkgcm90YXRlWSgxODBkZWcpO1xuICAgICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxNDBweCkgcm90YXRlWSgxODBkZWcpO1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gIH1cbiAgLmN1YmUtd3JhcHBlciB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0b3A6IDUwJTtcbiAgICBtYXJnaW4tdG9wOiAtNTBweDtcbiAgICBtYXJnaW4tbGVmdDogLTUwcHg7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5jdWJlLXdyYXBwZXI6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogLTIwcHg7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHdpZHRoOiA5MHB4O1xuICAgIGhlaWdodDogNnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICAtd2Via2l0LWZpbHRlcjogYmx1cigycHgpO1xuICAgIGZpbHRlcjogYmx1cigycHgpO1xuICAgIC1tb3otYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICB6LWluZGV4OiAxO1xuICAgIC1tb3otYW5pbWF0aW9uOiBzaGFkb3cgMC41cyBlYXNlIGluZmluaXRlIGFsdGVybmF0ZTtcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogc2hhZG93IDAuNXMgZWFzZSBpbmZpbml0ZSBhbHRlcm5hdGU7XG4gICAgYW5pbWF0aW9uOiBzaGFkb3cgMC41cyBlYXNlIGluZmluaXRlIGFsdGVybmF0ZTtcbiAgfVxuICAuY3ViZS13cmFwcGVyIC5sb2FkaW5nIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGNvbG9yOiAjQThDNUZGO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDI1cHg7XG4gICAgei1pbmRleDogMjtcbiAgICAtbW96LWFuaW1hdGlvbjogdGV4dCAwLjVzIGVhc2UgaW5maW5pdGUgYWx0ZXJuYXRlO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOiB0ZXh0IDAuNXMgZWFzZSBpbmZpbml0ZSBhbHRlcm5hdGU7XG4gICAgYW5pbWF0aW9uOiB0ZXh0IDAuNXMgZWFzZSBpbmZpbml0ZSBhbHRlcm5hdGU7XG4gIH1cbiAgXG4gIEAtbW96LWtleWZyYW1lcyB0ZXh0IHtcbiAgICAxMDAlIHtcbiAgICAgIHRvcDogMzVweDtcbiAgICB9XG4gIH1cbiAgQC13ZWJraXQta2V5ZnJhbWVzIHRleHQge1xuICAgIDEwMCUge1xuICAgICAgdG9wOiAzNXB4O1xuICAgIH1cbiAgfVxuICBAa2V5ZnJhbWVzIHRleHQge1xuICAgIDEwMCUge1xuICAgICAgdG9wOiAzNXB4O1xuICAgIH1cbiAgfVxuICBALW1vei1rZXlmcmFtZXMgc2hhZG93IHtcbiAgICAxMDAlIHtcbiAgICAgIGJvdHRvbTogLTE4cHg7XG4gICAgICB3aWR0aDogMTAwcHg7XG4gICAgfVxuICB9XG4gIEAtd2Via2l0LWtleWZyYW1lcyBzaGFkb3cge1xuICAgIDEwMCUge1xuICAgICAgYm90dG9tOiAtMThweDtcbiAgICAgIHdpZHRoOiAxMDBweDtcbiAgICB9XG4gIH1cbiAgQGtleWZyYW1lcyBzaGFkb3cge1xuICAgIDEwMCUge1xuICAgICAgYm90dG9tOiAtMThweDtcbiAgICAgIHdpZHRoOiAxMDBweDtcbiAgICB9XG4gIH1cbiAgaHRtbCwgYm9keSB7XG4gICAgbWluLWhlaWdodDogMTAwJTtcbiAgfVxuICBcbiAgXG4gIGgxIHtcbiAgICBmb250LXNpemU6IDI2cHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjMkEzMTQwO1xuICAgIHBhZGRpbmc6IDUwcHggMjBweDtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGZvbnQtZmFtaWx5OiAnQXJjaGl2byBOYXJyb3cnLCBzYW5zLXNlcmlmO1xuICB9XG4gIFxuLm1hZGUtd2l0aC1sb3ZlIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgYm90dG9tOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgei1pbmRleDogOTk5OTtcbiAgZm9udC1mYW1pbHk6IGFyaWFsO1xuICBjb2xvcjogIzlCQjVFQjtcbn1cbi5tYWRlLXdpdGgtbG92ZSBpIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBjb2xvcjogI0Y1MDA1NztcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMnB4O1xufVxuLm1hZGUtd2l0aC1sb3ZlIGEge1xuICBjb2xvcjogIzlCQjVFQjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLm1hZGUtd2l0aC1sb3ZlIGE6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cbiJdfQ== */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!./styles.css */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 2:
/*!******************************!*\
  !*** multi ./src/styles.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\devri\Documents\projects\bill-invoice\src\styles.css */"./src/styles.css");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles-es2015.js.map