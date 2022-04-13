//한페이지에 탭메뉴 여러개 있을때

function tabEvent(wrap) {
  const wrapEle = document.querySelectorAll(wrap);

  wrapEle.forEach(function (tabArea) {
    const btn = tabArea.querySelectorAll('.tab_btn');

    btn.forEach(function (item) {
      item.addEventListener('click', function () {
        let parent = findParent(this, 'container');
        // 부모를 찾는다, 두번째 파라미터 container는 부모의 클래스
        let idx = this.dataset['idx'];
        // 인덱스 값
        let depth = this.dataset['depth'];
        //뎁스값
        let btnArray = parent.querySelectorAll(
          `.tab_btn[data-depth="${depth}"]`
        );

        let contentArray = parent.querySelectorAll(
          `.content[data-depth="${depth}"]`
        );

        btnArray.forEach((btn) => {
          btn.classList.remove('on');
        });
        this.classList.add('on');
        contentArray.forEach((content) => {
          content.classList.remove('on');
        });
        parent
          .querySelector(`.content[data-idx="${idx}"][data-depth="${depth}"]`)
          .classList.add('on');
      });
    });
  });
}
tabEvent('.container');

function findParent(ele, className) {
  let check = ele.parentNode.classList.contains(className);

  return check ? ele.parentNode : findParent(ele.parentNode, className);
  // if (check === true) {
  //   return ele.parentNode;
  // } else {
  //   return findParent(ele.parentNode, className);
  // }
}
