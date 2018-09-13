<template>
  <full-page class="home-wrapper" ref="fullpage" :options="options">
    <div class="section" style="background-color: red;">
      First section ...
    </div>
    <div class="section" style="background-color: blue;">
      Second section ...
    </div>
  </full-page>
</template>

<script>
export default {
  name: 'FullPageCom',
  data() {
    return {
      options: {
        licenseKey: 'MIT',
        sectionsColor: ['red', 'blue'], // 设置每个 section 的背景
        menu: '#menu',
        lockAnchors: false,
        anchors: ['firstPage', 'secondPage'],
        navigation: false,
        navigationPosition: 'right',
        navigationTooltips: ['firstSlide', 'secondSlide'],
        showActiveTooltip: false,
        slidesNavigation: false,
        slidesNavPosition: 'bottom',

        //滚动
        css3: true,
        scrollingSpeed: 500, // 滚动过度时间
        autoScrolling: true,
        fitToSection: true,
        fitToSectionDelay: 1000,
        scrollBar: true, // 滚动条
        easing: 'easeInOutCubic',
        easingcss3: 'ease',
        loopBottom: false,
        loopTop: false,
        loopHorizontal: true,
        continuousVertical: false,
        continuousHorizontal: false,
        scrollHorizontally: false,
        interlockedSlides: false,
        dragAndMove: false,
        offsetSections: false,
        resetSliders: false,
        fadingEffect: false,
        normalScrollElements: '#element1, .element2',
        scrollOverflow: false,
        scrollOverflowReset: false,
        scrollOverflowOptions: null,
        touchSensitivity: 15,
        normalScrollElementTouchThreshold: 5,
        bigSectionsDestination: null,

        //可访问
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,

        //设计
        controlArrows: true, // 控制幻灯片箭头
        verticalCentered: true,
        paddingTop: '3em',
        paddingBottom: '10px',
        fixedElements: '#header, .footer',
        responsiveWidth: 0,
        responsiveHeight: 0,
        responsiveSlides: false,
        parallax: false,
        parallaxOptions: {
          type: 'reveal',
          percentage: 62,
          property: 'translate'
        },

        //自定义选择器
        sectionSelector: '.section',
        slideSelector: '.slide',

        lazyLoading: true,

        //事件
        onLeave: function(origin, destination, direction) {},
        afterLoad: function(origin, destination, direction) {},
        afterRender: function() {},
        afterResize: function(width, height) {},
        afterResponsive: function(isResponsive) {},
        afterSlideLoad: function(section, origin, destination, direction) {},
        onSlideLeave: function(section, origin, destination, direction) {}
      }
    };
  }
};
</script>



<style lang="scss" scoped>
@import './FullPageCom';
</style>

