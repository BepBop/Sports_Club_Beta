//blue line passing through
let last_slogan_bottom = document.getElementById("last").getBoundingClientRect().bottom;
const line_1 = document.getElementById("line-1");
line_1.style.height = `calc(100% - ${last_slogan_bottom}px)`;

//
// //slogan flexbox height
// let nav_height = document.getElementsByTagName("nav")[0].getBoundingClientRect().height;
// const slogan = document.getElementById("slogan");
// slogan.style.height = `calc(100% - ${nav_height}px - 1rem)`;
//
//

//
//
// // const blue_bg = document.getElementById("blue-bg");
// // blue_bg.addEventListener("click", loading_page_animation);
//
// function loading_page_animation() {
//
//   const loadingIcon = document.getElementById("loadingIcon");
//   const logo = document.getElementById("logo");
//
//   const logo_top = logo.getBoundingClientRect().top;
//   const logo_left = logo.getBoundingClientRect().left;
//
//
//   loadingIcon.style.width = "12vmin";
//   loadingIcon.style.top = `${logo_top}px`;
//   loadingIcon.style.left = `${logo_left}px`;
//   loadingIcon.style.transform = "translate(0%, 0%)";
//   loadingIcon.style.position = "none";
//   blue_bg.style.animation = "color_drop_animation 0.75s 2s ease-out forwards";
// }
