/*
 * @Author: KUAI(https://github.com/kuainx)
 * @Date: 2022-02-26 16:02:38
 * @LastEditTime: 2022-02-26 16:08:31
 * @LastEditors: KUAI
 * @Description:
 * @FilePath: \doc88-dl\doc88.js
 */

(function () {
  const pageList = document.querySelectorAll(".inner_page")
  pageList.forEach(element => {
    let save_link = document.createElement("a");
    save_link.href = element.toDataURL();
    save_link.download = element.id + ".png";
    save_link.click();
  });
})();